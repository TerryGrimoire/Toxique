import React from "react";
import { Link } from "react-router-dom";
import subjects from "../fakeData/subjects";

function ParlonsEn() {
  return (
    <div className="container">
      <h1>Parlons-en</h1>
      <div>
        {subjects.map((subject) => (
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
