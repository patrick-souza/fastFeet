import { Request, Response } from 'express';
import Delivery from '../Models/Delivery';
import DeliveryAttributes from '../Interfaces/DeliveryAttributes';
import File from '../Models/File';

class DeliveryController {
  async index(_: Request, response: Response) {
    const deliveres = await Delivery.findAll();

    return response.json(deliveres);
  }

  async detail(request: Request, response: Response) {
    const { id } = request.params;

    const delivery = await Delivery.findByPk(id, {
      include: [{ model: File, as: 'avatar', attributes: ['url'] }],
    });

    return response.json(delivery);
  }

  async create(request: Request, response: Response) {
    const { email, name, avatar_id } = request.body as DeliveryAttributes;

    const newDelivery = await Delivery.create({ email, name, avatar_id });

    return response.json(newDelivery);
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params;

    await Delivery.destroy({ where: { id } });

    return response.status(204).send();
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { email, name, avatar_id } = request.body as DeliveryAttributes;
    await Delivery.update({ email, name, avatar_id }, { where: { id } });

    return response.status(204).send();
  }
}
export default new DeliveryController();
