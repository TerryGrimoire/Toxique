const models = require("../models");

class FaqController {
  static browse = (req, res) => {
    models.faq
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FaqController;
