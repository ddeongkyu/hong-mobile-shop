import React from "react";

function HeadText() {
  const onReady = () => {
    alert("준비중입니다! 기다려주세용!");
  };
  return (
    <div className="HeadTextBlock">
      <span className="HeadText">Chairs</span>
      <span className="HeadText HeadTextNotActivated" onClick={onReady}>
        Tables
      </span>
      <span className="HeadText HeadTextNotActivated" onClick={onReady}>
        Sofa
      </span>
      <span className="HeadText HeadTextNotActivated" onClick={onReady}>
        Beds
      </span>
    </div>
  );
}

export default HeadText;
