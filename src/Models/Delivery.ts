import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Database/sequelize-connection';
import DeliveryAttributes from '../Interfaces/DeliveryAttributes';
import File from './File';

class Delivery extends Model implements DeliveryAttributes {
  public id!: number;

  public name!: string;

  public email!: string;

  public avatar_id?: number;

  public createdAt?: Date;

  public updatedAt?: Date;
}

Delivery.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: 'deliveres',
  }
);

Delivery.belongsTo(File, { foreignKey: 'avatar_id', as: 'avatar' });

export default Delivery;
