import { Request, Response } from 'express';
import File from '../Models/File';

class FileController {
  index() {
    throw new Error('Not Implemented Exception');
  }

  detail() {
    throw new Error('Not Implemented Exception');
  }

  async create(request: Request, response: Response) {
    const { originalname: name, filename: path } = request.file;

    const newFile = await File.create({ name, path });

    return response.json(newFile);
  }

  remove() {
    throw new Error('Not Implemented Exception');
  }

  update() {
    throw new Error('Not Implemented Exception');
  }
}
export default new FileController();
