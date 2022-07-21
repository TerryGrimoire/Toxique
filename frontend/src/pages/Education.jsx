import React, { useState, useEffect } from "react";
import axios from "axios";
import Faq from "../components/Faq";

function Education() {
  const [faq, setFaq] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/faq`)
      .then((res) => {
        setFaq(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container">
      <h1>Eduquons-nous</h1>
      <div>{faq && faq.map((el) => <Faq el={el} />)}</div>
    </div>
  );
}

export default Education;
