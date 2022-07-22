const AbstractManager = require("./AbstractManager");

class SubjectManager extends AbstractManager {
  static table = "subject";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.connection.query(
      `select * from  ${this.table} where subject_id = ?`,
      [id]
    );
  }
}

module.exports = SubjectManager;
