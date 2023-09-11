const { Sale } = require("../models");

const saleData = [
  {
    sale_date: "2021-01-01",
    sale_item: "Television",
    sale_employee: 1,
    sale_total: 699.99,
  },
  {
    sale_date: "2022-08-02",
    sale_item: "Laptop" + "Smartphone",
    sale_employee: 3,
    sale_total: 2299.98,
  },
  {
    sale_date: "2022-09-03",
    sale_item: "Blue Ray Player" + "Desktop Computer" + "Tablet",
    sale_employee: 3,
    sale_total: 1084.92,
  },
  {
    sale_date: "2022-10-04",
    sale_item:
      "Television" +
      "Laptop" +
      "Smartphone" +
      "Blue Ray Player" +
      "Desktop Computer" +
      "Tablet",
    sale_employee: 3,
    sale_total: 4299.89,
  },
];

const seedSales = () => Sale.bulkCreate(saleData);

module.exports = seedSales;
