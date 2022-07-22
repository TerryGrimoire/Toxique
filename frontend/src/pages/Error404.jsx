import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Link to="/" className="dark error-container voile-container">
      <Helmet>
        <title> Toxique | ERROR404 </title>
      </Helmet>
      <div className="flex flex-col">
        <h1>ERROR 404</h1>
        <h2>Toxic Masculinity no longer found</h2>
      </div>
      <iframe
        src="https://giphy.com/embed/3oKIPfp2txB8jGDSrm"
        width="480"
        height="462"
        frameBorder="0"
        className="giphy"
        title="fart on patriarchy"
      />
      <div className="voile" />
    </Link>
  );
}

export default Error404;
