var express  = require ('express');
var router = express.Router();
var Product = require('./product')



router.post('/', (req, res) => {
    let prod = new Product({
        name:req.body.name
    });

    prod.save((err, p) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(p);
        }
    })
})

router.get ('/', (req,res) => {
    Product.find().exec((err, prods) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(prods);
        }
    })
})



router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await Product.deleteOne({_id: id})
        res.status(200).send({});
    }
    catch(err) {
        res.status(500).send({msg:'Internal error', error:err})
    }
})

module.exports = router;