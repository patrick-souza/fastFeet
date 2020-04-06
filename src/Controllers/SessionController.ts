import { Request, Response } from 'express';
import User from '../Models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../Config/auth-config';

class SessionController {
  index(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  detail(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (user && user.checkPassword(password)) {
      const token = jwt.sign({ id: user.id }, authConfig.Secret_key, {
        expiresIn: authConfig.ExpiresIn,
      });

      return response.json({ token });
    }

    return response.json({ error: 'Fail authentication' });
  }
  remove(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  update(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
}

export default new SessionController();
