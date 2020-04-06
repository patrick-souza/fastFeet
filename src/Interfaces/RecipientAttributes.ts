import Entity from './Entity';

export interface RecipientAttributes extends Entity {
  name: string;
  street: string;
  number: string;
  complement: string;
  state: string;
  city: string;
  zip_code: string;
}
