import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Database/sequelize-connection';
import { RecipientAttributes } from '../Interfaces/RecipientAttributes';

class Recipient extends Model implements RecipientAttributes {
  public id!: number;

  public name!: string;
  public street!: string;
  public number!: string;
  public complement!: string;
  public state!: string;
  public city!: string;
  public zip_code!: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Recipient.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: 'recipients',
  }
);

export default Recipient;
