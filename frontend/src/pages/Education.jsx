import React from "react";
import Faq from "../components/Faq";
import faq from "../fakeData/faq";

function Education() {
  return (
    <div>
      <h2>Eduquons-nous</h2>
      <div>
        {faq.map((el) => (
          <Faq el={el} />
        ))}
      </div>
    </div>
  );
}

export default Education;
