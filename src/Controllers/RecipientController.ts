import { Request, Response } from 'express';
import Recipient from '../Models/Recipient';
import { RecipientAttributes } from '../Interfaces/RecipientAttributes';

class RecipientController {
  index(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  detail(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  async create(request: Request, response: Response) {
    const {
      name,
      street,
      number,
      state,
      city,
      zip_code,
      complement,
    } = request.body as RecipientAttributes;

    const newRecipient = await Recipient.create({
      name,
      street,
      number,
      state,
      city,
      zip_code,
      complement,
    });

    return response.json(newRecipient);
  }
  remove(request: Request, response: Response) {
    throw 'Not Implemented Exception';
  }
  async update(request: Request, response: Response) {
    const {
      name,
      street,
      number,
      state,
      city,
      zip_code,
      complement,
    } = request.body as RecipientAttributes;
    const { id } = request.params;

    await Recipient.update(
      {
        name,
        street,
        number,
        state,
        city,
        zip_code,
        complement,
      },
      {
        where: { id },
      }
    );

    return response.status(204).send();
  }
}
export default new RecipientController();
