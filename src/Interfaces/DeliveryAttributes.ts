import Entity from './Entity';

export default interface DeliveryAttributes extends Entity {
  name: string;
  email: string;
  avatar_id?: number;
}
