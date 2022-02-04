import React from "react";
import bgGif from "../Assets/bggif1.gif";

function BgGif() {
  return (
    <div className="d-flex justify-content-center">
      <img className="bgGif" src={bgGif} alt="" />
    </div>
  );
}

export default BgGif;
