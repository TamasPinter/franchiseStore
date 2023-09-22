const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Sale extends Model {}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sale_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "item",
        key: "id",
      },
    },
    sale_employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "employee",
        key: "id",
      },
    },
    sale_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sale",
  }
);

module.exports = Sale;
