const models = require("../models");

class CommentController {
  static add = (req, res) => {
    const data = req.body;

    models.comment
      .insert(data)
      .then(([result]) => {
        res.status(201).send({ ...data, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CommentController;
