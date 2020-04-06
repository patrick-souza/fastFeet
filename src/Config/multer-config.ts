import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
import { Request } from 'express';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (
      _: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, filename: string) => void
    ) => {
      crypto.randomBytes(16, (error: Error | null, result: Buffer) => {
        if (error) return cb(error, file.filename);

        return cb(null, result.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
