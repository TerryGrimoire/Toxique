import React, { useState } from "react";
import { useParams } from "react-router-dom";
import forum from "../fakeData/forum";

function Forum() {
  const { id } = useParams();
  const [comment, setComment] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    forum[id].comments.push({
      id: 0,
      content: comment,
    });
  };

  return (
    <div className="container">
      <h1>Forum</h1>
      <div className="forum-question dark">
        <h2>{forum[id].title}</h2>
        <p>{forum[id].description}</p>
      </div>
      <section>
        {forum[id].comments.map((commentMap) => (
          <p className="comment">{commentMap.content}</p>
        ))}
      </section>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="forum-input"
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="send">
          ...
        </button>
      </form>
    </div>
  );
}

export default Forum;
