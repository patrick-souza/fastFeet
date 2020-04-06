import { Sequelize } from 'sequelize';
import configPostgres from '../Config/config-postgres';

const { database, host, password, username, port } = configPostgres;

export default new Sequelize({
  database,
  username,
  password,
  host,
  port,
  dialect: 'postgres',
});
