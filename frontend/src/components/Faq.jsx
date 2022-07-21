import React, { useState } from "react";

function Faq({ el }) {
  const [click, setClick] = useState(false);
  return (
    <div className="faq">
      <button
        type="button"
        onClick={() => setClick(!click)}
        className={click ? "openbutton" : "closebutton"}
      >
        {el.question}
      </button>
      {click && <p>{el.response}</p>}
    </div>
  );
}

export default Faq;
