import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/articles`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="articles-container">
      <Helmet>
        <title> Toxique | Accueil </title>
      </Helmet>
      {articles &&
        articles.map((article) => (
          <article className="flex justify-start items-center">
            <div className="voile-container">
              <iframe
                src={article.image}
                width="480"
                height="320"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title={article.title}
              />
              <div className="voile" />
            </div>
            <section className="flex flex-col items-around">
              <h2>{article.titre}</h2>
              <p>{article.text}</p>
            </section>
          </article>
        ))}

      <article className="flex flex-col justify-center items-center choice">
        <h2>Maintenant, c'est à vous de choisir</h2>
        <div className="flex">
          <Link to="/Education">
            <button type="button" className="btn educate">
              S'éduquer
            </button>
          </Link>
          <Link to="/Error404">
            <button type="button" className="btn boomer">
              Toxique et fier
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Home;
