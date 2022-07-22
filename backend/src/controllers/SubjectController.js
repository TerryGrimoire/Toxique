const models = require("../models");

class SubjectController {
  static browse = (req, res) => {
    models.subject
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.subject
      .find(req.params.id)
      .then(([rows]) => {
        if (rows == null) {
          res.sendStatus(404);
        } else {
          res.status(201).json(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = SubjectController;
