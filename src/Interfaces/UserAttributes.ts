import TimeStamps from './Timestamps';

export default interface UserAttributes extends TimeStamps {
  name: string;
  email: string;
  password: string;
}
