const AbstractManager = require("./AbstractManager");

class SubjectManager extends AbstractManager {
  static table = "subject";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.connection.query(
      `select * from  ${this.table} 
      INNER JOIN comment ON comment.subject_id = subject.subject_id 
      where comment.subject_id = ?`,
      [id]
    );
  }
}

module.exports = SubjectManager;
