const express = require("express");

const {
  ItemController,
  ArticlesController,
  FaqController,
  SubjectController,
  CommentController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/articles", ArticlesController.browse);
router.get("/faq", FaqController.browse);
router.get("/subject", SubjectController.browse);
router.get("/subject/:id", SubjectController.read);

router.post("/comment", CommentController.add);

router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
