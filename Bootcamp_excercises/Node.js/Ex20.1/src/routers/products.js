const express = require("express");
const Product = require("../models/product");
const router = new express.Router();

router.use(express.json());
// -------------------------------------------
router.post("/products", (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
// -------------------------------------------
router.get("/products", (req, res) => {
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
// -------------------------------------------
router.get("/products/active", (req, res) => {
  Product.find({ isActive: true })
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
// -------------------------------------------
router.get("/products/pricerange", (req, res) => {
  Product.find({ "details.price": { $gte: 5, $lte: 20 } })
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

// -------------------------------------------
router.get("/products/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
// -------------------------------------------
router.patch("/products/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["isActive", "details.discount"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});
// -------------------------------------------
router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});
// -------------------------------------------
router.delete("/products/", async (req, res) => {
  try {
    const products = await Product.deleteMany({});

    if (!products) {
      res.status(404).send();
    }

    res.send(products);
  } catch (e) {
    res.status(500).send();
  }
});
// -------------------------------------------
module.exports = router;
