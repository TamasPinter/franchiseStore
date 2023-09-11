const { Item } = require("../models");

const itemData = [
  {
    item_name: "Television",
    item_description: "A 60 inch flat screen TV",
    item_department: "Home Entertainment",
    item_price: 699.99,
  },
  {
    item_name: "Laptop",
    item_description: "A 16 inch gaming laptop",
    item_department: "Computers",
    item_price: 1299.99,
  },
  {
    item_name: "Smartphone",
    item_description: "A brand new Iphone",
    item_department: "Cell Phones",
    item_price: 999.99,
  },
  {
    item_name: "Blue Ray Player",
    item_description: "A 4K Blue ray Player",
    item_department: "Home Entertainment",
    item_price: 125.99,
  },
  {
    item_name: "Desktop Computer",
    item_description: "A 32 inch desktop computer",
    item_department: "Computers",
    item_price: 799.95,
  },
  {
    item_name: "Tablet",
    item_description: "A 10 inch tablet",
    item_department: "Computers",
    item_price: 159.98,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
