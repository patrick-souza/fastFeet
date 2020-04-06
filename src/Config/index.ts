import dotenv from 'dotenv';

dotenv.config();

export default {
  App_Url: process.env.APP_URL || 'localhost:3333',
  App_Port: process.env.APP_PORT || 3333,
};
