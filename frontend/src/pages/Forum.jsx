import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Forum() {
  const { id } = useParams();
  const [comments, setComments] = useState();
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comment`, data)
      .catch((err) => console.error(err));
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
  }, [data]);

  return (
    <div className="container">
      <h1>Forum</h1>
      <div className="forum-question dark">
        <h2>{comments && comments[0].title}</h2>
        <p>{comments && comments[0].description}</p>
      </div>
      <section>
        {comments &&
          comments.map((commentMap) => (
            <p className="comment">{commentMap.content}</p>
          ))}
      </section>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="forum-input"
          onChange={(e) => setData({ content: e.target.value, subject_id: id })}
        />
        <button type="submit" className="send">
          ...
        </button>
      </form>
    </div>
  );
}

export default Forum;
