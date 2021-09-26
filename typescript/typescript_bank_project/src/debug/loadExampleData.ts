// Mock Data

import Client from '../models/Client';
import User from '../models/User';

export default async function () {
  const clientCount = await Client.estimatedDocumentCount();
  if (clientCount === 0) {
    const client = new Client({
      // id: 'application',
      clientId: 'client_id',
      clientSecret: 'client_secret',
      grants: ['password', 'client_credentials'],
      redirectUris: [],
    });

    client.save(function (err, client) {
      if (err) {
        return console.error(err);
      }
      console.log('Dados iniciais do cliente criado com sucesso.', client);
    });
  }

  const userCount = await User.estimatedDocumentCount();
  if (userCount === 0) {
    const user = new User({
      name: 'Paulo Henrique Jr',
      username: '146.282.342-00',
      password: '$2a$08$oGpbSuqUxNHEEMe91Kv4wO43IacfwHfY0uzJSJDSLPjty6NuRhOUO',
    });

    user.save(function (err, client) {
      if (err) {
        return console.error(err);
      }
      console.log('Dados iniciais do usuario criado com sucesso.', client);
    });
  }
}
