import React, { useState, useEffect } from "react";
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
    <div>
      {articles &&
        articles.map((article) => (
          <article className="flex justify-start items-center">
            <div>
              <iframe
                src={article.image}
                width="480"
                height="320"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title={article.title}
              />
            </div>
            <section className="flex flex-col items-around">
              <h2>{article.titre}</h2>
              <p>{article.text}</p>
            </section>
          </article>
        ))}

      <article className="flex flex-col justify-center items-center choice">
        Maintenant, c'est à vous de choisir
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

      {/** <iframe src="https://giphy.com/embed/5C2d0RRxx5hvq9blM3" width="480" height="290" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/chJhmOrQaAYPWDmULG" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/1fjGzt1zIO9A9FnWAh" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/svsKIGiRjuiKCKL4Gk" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/1YLHVyLfKYSZyZgzfI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/cueX7HBTz5Fz8FDj0x" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/WUTv0h7TfsBpRL0yuT" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  * */}
    </div>
  );
}

export default Home;
