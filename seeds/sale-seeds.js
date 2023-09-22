const { Sale } = require("../models");

const saleData = [
  {
    sale_date: "2021-01-01",
    sale_item: 1,
    sale_employee: 1,
    sale_total: 699.99,
  },
  {
    sale_date: "2022-08-02",
    sale_item: 2,
    sale_employee: 3,
    sale_total: 1299.99,
  },
  {
    sale_date: "2022-09-03",
    sale_item: 4,
    sale_employee: 3,
    sale_total: 125.99,
  },
  {
    sale_date: "2022-10-04",
    sale_item: 6,
    sale_employee: 3,
    sale_total: 159.98,
  },
];

const seedSales = () => Sale.bulkCreate(saleData);

module.exports = seedSales;
