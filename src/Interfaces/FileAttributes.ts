import Entity from './Entity';

export default interface FileAttributes extends Entity {
  name: string;
  path: string;
}
