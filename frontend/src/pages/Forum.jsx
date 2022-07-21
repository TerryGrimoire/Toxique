import React from "react";
import { useParams } from "react-router-dom";
import forum from "../fakeData/forum";

function Forum() {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>Forum</h1>
      <h2>{forum[id].title}</h2>
      <section>
        {forum[id].comments.map((comment) => (
          <p className="comment">{comment.content}</p>
        ))}
      </section>

      <form action="">
        <input type="text" className="forum-input" />
      </form>
    </div>
  );
}

export default Forum;
