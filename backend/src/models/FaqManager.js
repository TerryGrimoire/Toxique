const AbstractManager = require("./AbstractManager");

class FaqManager extends AbstractManager {
  static table = "faq";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = FaqManager;
