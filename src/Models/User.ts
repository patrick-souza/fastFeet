import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelizeConnection from '../Database/sequelize-connection';
import UserAttributes from '../Interfaces/UserAttributes';

class User extends Model implements UserAttributes {
  public id!: number;

  public name!: string;

  public email!: string;

  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public checkPassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
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
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 8);
        }
      },
    },
    sequelize: sequelizeConnection,
    tableName: 'users',
  }
);

export default User;
