import React from "react";

function Depistage() {
  return (
    <div className="container">
      <h1>Dépiste-toi</h1>

      <div className="depistage">
        <div className="flex justify-between">
          <p>Score : </p> <p>1/10</p>{" "}
        </div>
        <img src="" alt="test_img" />
        <p>La question qui tue sur la masculinité toxique ? </p>
      </div>
      <div className="flex buttons-container">
        <button type="button" className="btn dark">
          VRAI
        </button>
        <button type="button" className="btn dark">
          FAUX
        </button>
      </div>
    </div>
  );
}

export default Depistage;
