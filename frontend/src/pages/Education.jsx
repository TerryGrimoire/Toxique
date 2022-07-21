import React, { useEffect } from "react";
import Faq from "../components/Faq";
import faq from "../fakeData/faq";

function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h1>Eduquons-nous</h1>
      <div>
        {faq.map((el) => (
          <Faq el={el} />
        ))}
      </div>
    </div>
  );
}

export default Education;
