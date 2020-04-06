import { Request, Response } from 'express';
import File from '../Models/File';

class FileController {
  index(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  detail(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  async create(request: Request, response: Response) {
    const { originalname: name, filename: path } = request.file;

    const newFile = await File.create({ name, path });

    return response.json(newFile);
  }
  remove(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  update(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
}
export default new FileController();
