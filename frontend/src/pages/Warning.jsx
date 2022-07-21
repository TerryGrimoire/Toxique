import React from "react";
import { Link } from "react-router-dom";

function Warning() {
  return (
    <Link to="/">
      <button className="warning" type="button">
        <h2>ATTENTION</h2>
        <p>
          Ce site contient du contenu pouvant être blessant ou offensant pour
          certaines catégories de personnes.
        </p>
      </button>
    </Link>
  );
}

export default Warning;
