import Entity from './Entity';

export default interface UserAttributes extends Entity {
  name: string;
  email: string;
  password: string;
}
