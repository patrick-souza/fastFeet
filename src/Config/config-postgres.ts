import dotenv from 'dotenv';

dotenv.config();

export default {
  dialect: 'postgres',
  host: process.env.DB_HOST || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
  port: Number(process.env.DB_PORT) || 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
