const seedEmployees = require("./employee-seeds");
const seedItems = require("./item-seeds");
const seedSales = require("./sale-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedEmployees();
  console.log("\n----- EMPLOYEES SEEDED -----\n");
  await seedItems();
  console.log("\n----- ITEMS SEEDED -----\n");
  await seedSales();
  console.log("\n----- SALES SEEDED -----\n");
  process.exit(0);
};

seedAll();
