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

  static delete = (req, res) => {
    models.comment
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const comment = req.body;

    // TODO validations (length, format...)

    const id = parseInt(req.params.id, 10);

    models.comment
      .update(comment, id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CommentController;
