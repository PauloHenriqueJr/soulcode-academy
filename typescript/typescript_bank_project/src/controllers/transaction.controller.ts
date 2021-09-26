import User from '../models/User';
import { Request, Response } from 'express';

const TransactionController = {
  async newCreditOperation(req: Request, res: Response) {
    const { loggedUser } = req.headers;
    const amount = Number(req.body.amount);

    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: `O valor não pode ser negativo ou zero` });
    }

    try {
      const user = await User.findOne({ username: loggedUser });

      if (!user) {
        return res.status(400).json({ message: 'Você não está logado.' });
      }

      if (user.limit > 0 && user.limit >= amount) {
        user.limit -= amount;
        user.invoice += amount;

        user.history.push({
          transactionDate: Date.now(),
          amount: amount,
          transactionType: 'CREDIT',
        });

        await user.save();
      } else {
        return res
          .status(400)
          .json({ message: 'Limite de crédito insuficiente! =(' });
      }

      return res.status(200).json({ message: 'Operação de crédito bem-sucedida.' });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },

  async newDebitOperation(req: Request, res: Response) {
    const { loggedUser } = req.headers;
    const amount = Number(req.body.amount);

    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: `O valor não pode ser negativo ou zero.` });
    }

    try {
      const user = await User.findOne({ username: loggedUser });

      if (!user) {
        return res.status(400).json({ message: 'Você não está logado.' });
      }

      if (user.balance > 0 && user.balance >= amount) {
        user.balance -= amount;

        user.history.push({
          transactionDate: Date.now(),
          amount: amount,
          transactionType: 'DEBIT',
        });

        await user.save();
      } else {
        return res.status(400).json({ message: 'Dinheiro insuficiente! =(' });
      }

      return res.status(200).json({ message: 'Operação de débito bem-sucedida.' });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },

  async showHistory(req: Request, res: Response) {
    const { loggedUser } = req.headers;
    try {
      const user = await User.findOne({ username: loggedUser }).lean();

      return res.status(200).json({ data: user?.history });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },
};

export default TransactionController;
