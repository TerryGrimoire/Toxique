import React, { useState } from "react";
import { Helmet } from "react-helmet";
import gameData from "../fakeData/gameData";

function Depistage() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const scoreFinal = 100 - score * 10;

  const handleClickTrue = () => {
    if (question < 9) {
      setQuestion(question + 1);
    }
    if (gameData[question].reponse === true) {
      setScore(score + 1);
    }
  };

  const handleClickFalse = () => {
    if (question < 9) {
      setQuestion(question + 1);
    }
    if (gameData[question].reponse === false) {
      setScore(score + 1);
    }
  };
  return (
    <div className="container">
      <Helmet>
        <title> Toxique | Déspistage </title>
      </Helmet>
      <h1>Dépiste-toi</h1>

      <div className="depistage">
        <div className="flex justify-between">
          <p>Questions : </p> <p>{gameData[question].id}/10</p>
        </div>
        <p className="game-question">{gameData[question].question} </p>
      </div>
      <div className="flex buttons-container">
        <button
          type="button"
          className="btn dark"
          onClick={() => handleClickTrue()}
        >
          VRAI
        </button>
        <button
          type="button"
          className="btn dark"
          onClick={() => handleClickFalse()}
        >
          FAUX
        </button>
      </div>
      {question === 9 ? (
        <div className="score-final"> {`Tu es toxique à ${scoreFinal} % `}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Depistage;
