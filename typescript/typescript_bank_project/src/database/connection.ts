import mongoose from 'mongoose';

const { DB_PROTOCOL, DB_USER, DB_PASS, DB_HOST, DB_NAME } =
  process.env;

const URI =
  DB_USER || DB_PASS
    ? `${DB_PROTOCOL}://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
    : `${DB_PROTOCOL}://${DB_HOST}:/${DB_NAME}`;

mongoose.connect(URI, {


});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'erro de conexão:'));

export default db;
