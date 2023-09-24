//import models
const Employee = require("./Employee");
const Item = require("./Item");
const Sale = require("./Sale");

//create associations
// employees have many sales
Employee.hasMany(Sale, {
  foreignKey: "sale_employee",
  onDelete: "CASCADE",
});

// sales belong to an employee
Sale.belongsTo(Employee, {
  foreign_key: "sale_employee",
  as: "employee",
});

//items have many sales
Item.hasMany(Sale, {
  foreignKey: "sale_item",
  onDelete: "CASCADE",
});

//sales belong to an item
Sale.belongsTo(Item, {
  foreignKey: "sale_item",
});

module.exports = { Employee, Item, Sale };
