const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  static table = "comment";

  insert(data) {
    return this.connection.query(
      `insert into ${CommentManager.table} (content, subject_id) values (?, ?)`,
      [data.content, data.subject_id]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where comment_id = ?`,
      [id]
    );
  }

  update(comment, id) {
    return this.connection.query(
      `update ${CommentManager.table} set content = ? where comment_id = ?`,
      [comment, id]
    );
  }
}

module.exports = CommentManager;
