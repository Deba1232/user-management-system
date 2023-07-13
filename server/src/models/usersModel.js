import dbConfig from "../config/dbConfig.js";
import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

try {
  await sequelize.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const User = sequelize.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

try {
  await sequelize.sync();
} catch (error) {
  console.error("Unable to create table : ", error);
}

export default {
  sequelize: sequelize,
  user: User,
};
