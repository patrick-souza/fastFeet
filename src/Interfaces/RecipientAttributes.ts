import TimeStamps from './Timestamps';

export interface RecipientAttributes extends TimeStamps {
  name: string;
  street: string;
  number: string;
  complement: string;
  state: string;
  city: string;
  zip_code: string;
}
