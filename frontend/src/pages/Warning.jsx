import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Warning() {
  return (
    <Link to="/">
      <Helmet>
        <title> Toxique | Warning </title>
      </Helmet>
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
