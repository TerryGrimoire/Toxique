const express = require("express");

const { ItemController, ArticlesController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/articles", ArticlesController.browse);

router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
