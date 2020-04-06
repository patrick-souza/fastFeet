import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../Config/auth-config';
import { promisify } from 'util';

export default async function (
  request: Request,
  _: Response,
  next: NextFunction
) {
  try {
    const { authorization = '' } = request.headers;

    const [, token] = authorization.split(' ');

    const { id } = (await promisify(jwt.verify)(
      token,
      authConfig.Secret_key
    )) as { id: string };

    request.userId = id;

    return next();
  } catch (error) {
    throw new Error('Token is not valid');
  }
}
