const router = require("express").Router();
const { Sale, Employee, Item } = require("../../models");

//Get all sales
router.get("/", async (req, res) => {
  try {
    const saleData = await Sale.findAll({
      include: [{ model: Employee, as: "employee" }, { model: Item }],
    });
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one sale
router.get("/:id", async (req, res) => {
  try {
    const saleData = await Sale.findByPk(req.params.id, {
      include: [{ all: true }],
    });
    if (!saleData) {
      res.status(404).json({ message: "No sale found!" });
      return;
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new sale
router.post("/", async (req, res) => {
  try {
    const saleData = await Sale.create(req.body);
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a sale
router.put("/:id", async (req, res) => {
  try {
    const saleData = await Sale.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!saleData) {
      res.status(404).json({ message: "No sale found!" });
      return;
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a sale
router.delete("/:id", async (req, res) => {
  try {
    const saleData = await Sale.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!saleData) {
      res.status(404).json({ message: "No sale found!" });
      return;
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
