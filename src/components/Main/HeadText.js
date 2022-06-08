import React from "react";

function HeadText() {
  const onReady = () => {
    alert("준비중입니다! 기다려주세용!");
  };

  return (
    <div className="HeadTextBlock">
      <span className="HeadText">Featured</span>
      <span className="HeadText HeadTextNotActivated" onClick={onReady}>
        New
      </span>
      <span className="HeadText HeadTextNotActivated" onClick={onReady}>
        Collection
      </span>
    </div>
  );
}

export default HeadText;
