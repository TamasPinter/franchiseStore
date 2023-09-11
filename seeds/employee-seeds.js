const { Employee } = require("../models");

const employeeData = [
  {
    employee_name: "Oliver Queen",
    hired_date: "2020-03-16",
    contact_number: "555-505-1234",
    sales: 1,
  },
  {
    employee_name: "Barry Allen",
    hired_date: "2020-03-18",
    contact_number: "555-505-4321",
    sales: 0,
  },
  {
    employee_name: "Caitlin Snow",
    hired_date: "2022-04-13",
    contact_number: "555-505-5678",
    sales: 3,
  },
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
