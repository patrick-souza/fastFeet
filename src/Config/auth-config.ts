import dotenv from 'dotenv';

dotenv.config();

export default {
  Secret_key: process.env.SECRET_KEY || '',
  ExpiresIn: process.env.EXPIRES_IN || '30',
};
