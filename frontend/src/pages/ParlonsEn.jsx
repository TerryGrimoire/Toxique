import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ParlonsEn() {
  const [subjects, setSubjects] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/subject`)
      .then((res) => {
        setSubjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container">
      <h1>Parlons-en</h1>
      <div>
        {subjects &&
          subjects.map((subject) => (
            <Link to={`/Parlons_en/${subject.subject_id}`}>
              <div className="subject">
                <h3>{subject.title}</h3>
                <p>{subject.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ParlonsEn;
