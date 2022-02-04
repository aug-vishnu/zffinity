import React from "react";

function ButtonFlat({ content, href }) {
  return (
    <div className="ButtonFlat">
      {" "}
      <a href={href}>{content}</a>
    </div>
  );
}

export default ButtonFlat;
