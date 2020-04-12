import { Request, Response } from 'express';
import User from '../Models/User';
import UserAttributes from '../Interfaces/UserAttributes';

class UserController {
  async index(_: Request, response: Response) {
    const data = await User.findAll();

    return response.json(data);
  }

  async detail(request: Request, response: Response) {
    const { id } = request.params;

    const data = await User.findByPk(id);

    return response.json(data);
  }

  async create(request: Request, response: Response) {
    const { email, name, password } = request.body as UserAttributes;

    const newUser = await User.create({
      email,
      name,
      password,
    });

    return response.json(newUser);
  }

  remove() {
    throw new Error('Not Implemented Exception');
  }

  update() {
    throw new Error('Not Implemented Exception');
  }
}
export default new UserController();
