import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Database/sequelize-connection';
import Config from '../Config';
import FileAttributes from '../Interfaces/FileAttributes';

class File extends Model implements FileAttributes {
  public id!: number;

  public name!: string;

  public path!: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

File.init(
  {
    name: DataTypes.STRING,
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.VIRTUAL,
    },
  },
  {
    getterMethods: {
      url(): string {
        return `${Config.App_Url}/files/${this.path}`;
      },
    },
    sequelize: sequelizeConnection,
    tableName: 'files',
  }
);

export default File;
