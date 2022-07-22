const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  static table = "comment";

  insert(data) {
    return this.connection.query(
      `insert into ${CommentManager.table} (content, subject_id) values (?, ?)`,
      [data.content, data.subject_id]
    );
  }
}

module.exports = CommentManager;
