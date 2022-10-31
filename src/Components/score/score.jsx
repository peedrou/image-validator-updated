import React, { useEffect, useState } from "react";
import "./score.scss";

function Prize(props) {
  const [prizeStatus, setPrizeStatus] = useState("Progress until Prize!");
  useEffect(() => {
    props.pointsConverted == 100
      ? setPrizeStatus("You won!... Nothing 😳")
      : setPrizeStatus("Progress until Prize!");
  });
  return <h1 className="progress-h1">{prizeStatus}</h1>;
}

function Score(props) {
  const pointsConverted = (props.totalPoints / 500) * 100;
  const inner = document.documentElement.style.setProperty(
    "--inner",
    `${pointsConverted}`
  );

  return (
    <div className="progress-main-div">
      <Prize pointsConverted={pointsConverted} />
      <div className="progress-current" style={{ inner }}>
        <h3 className="progress-h3">{pointsConverted}%</h3>
      </div>
    </div>
  );
}

export default Score;
