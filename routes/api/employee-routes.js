const router = require("express").Router();

const { Employee, Item, Sale } = require("../../models");

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      include: { model: Sale },
    });
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one employee
router.get("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.params.id, {
      include: { model: Sale },
    });
    if (!employeeData) {
      res.status(404).json({ message: "No employee found!" });
    }
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new employee
router.post("/", async (req, res) => {
  try {
    const employeeData = await Employee.create(req.body);
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update an employee
router.put("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!employeeData) {
      res.status(404).json({ message: "No employee found!" });
      return;
    }
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete an employee
router.delete("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!employeeData) {
      res.status(404).json({ message: "No employee found!" });
      return;
    }
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
