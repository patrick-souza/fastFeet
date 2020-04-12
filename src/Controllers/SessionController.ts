import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../Models/User';
import authConfig from '../Config/auth-config';

class SessionController {
  index() {
    throw new Error('Not Implemented Exception');
  }

  detail() {
    throw new Error('Not Implemented Exception');
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

  remove() {
    throw new Error('Not Implemented Exception');
  }

  update() {
    throw new Error('Not Implemented Exception');
  }
}

export default new SessionController();
