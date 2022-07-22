import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import forum from "../fakeData/forum";

function Forum() {
  const { id } = useParams();
  const [comment, setComment] = useState();
  const [comments, setComments] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    forum[id].comments.push({
      id: 0,
      content: comment,
    });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/subject/${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Forum</h1>
      <div className="forum-question dark">
        <h2>{comments && comments.title}</h2>
        <p>{comments && comments.description}</p>
      </div>
      <section>
        {/* comments &&
          comments.comments.map((commentMap) => (
            <p className="comment">{commentMap.content}</p>
          )) */}
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
