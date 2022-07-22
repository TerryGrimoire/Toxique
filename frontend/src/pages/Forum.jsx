import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

function Forum() {
  const { id } = useParams();
  const [comments, setComments] = useState();
  const [data, setData] = useState();
  const [commentId, setCommentId] = useState("");
  const [modalEdit, setModalEdit] = useState(false);
  const [newComment, setNewComment] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comment`, data)
      .catch((err) => console.error(err))
      .finally(window.location.reload());
  };

  const handleDelete = (el) => {
    setCommentId(el);
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/comment/${commentId}`)
      .catch((err) => console.error(err));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/comment/${commentId}`,
        newComment
      )
      .catch((err) => console.error(err))
      .finally(window.location.reload());
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
  }, [data, commentId]);

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
            <Comments
              commentMap={commentMap}
              handleDelete={handleDelete}
              setModalEdit={setModalEdit}
              setCommentId={setCommentId}
            />
          ))}
      </section>
      {modalEdit && (
        <form className="voile modal-edit" onSubmit={(e) => handleEdit(e)}>
          <h4>Modifier le commentaire </h4>
          <input type="text" onChange={(e) => setNewComment(e.target.value)} />
          <button type="submit" className="btn">
            Modifier
          </button>
        </form>
      )}

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
