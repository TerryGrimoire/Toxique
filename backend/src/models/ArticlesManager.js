const AbstractManager = require("./AbstractManager");

class ArticlesManager extends AbstractManager {
  static table = "articles";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = ArticlesManager;
