const router = require("express").Router();
const { Item, Sale, Employee } = require("../../models");

// Get all items
router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [{ model: Employee, through: Sale, as: "item_employees" }],
    });
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one item
router.get("/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk({
      include: [{ model: Employee, through: Sale, as: "item_employees" }],
    });
    if (!itemData) {
      res.status(400).json({ message: "No item found!" });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new item
router.post("/", async (req, res) => {
  try {
    const itemData = await Item.create(req.body);
    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update an item
router.put("/:id", async (req, res) => {
  try {
    const itemData = await Item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!itemData) {
      res.status(404).json({ message: "No item found!" });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete an item
router.delete("/:id", async (req, res) => {
  try {
    const itemData = await Item.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!itemData) {
      res.status(404).json({ message: "This item is not found!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
