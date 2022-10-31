import React, { useEffect, useState } from "react";
import "./main.scss";
import get_random_image from "../functions/getimage";
import checkImage from "../functions/checkimage";

function RenderImage(props) {
  return (
    <img
      className="main-image"
      src={process.env.PUBLIC_URL + props.showcasedImage}
    ></img>
  );
}

function CurrentPoints(props) {
  const [points, setPoints] = useState(0);
  props.getDataMain(points + props.addedPoints);
  useEffect(() => (props.addedPoints > 500 ? setPoints(-500) : setPoints(0)));
  return (
    <h1 className="points-h1">You have {points + props.addedPoints} points</h1>
  );
}

function Main(props) {
  const [showcasedImage, setShowcasedImage] = useState(get_random_image());
  const [addedPoints, setaddedPoints] = useState(0);

  return (
    <div className="main-div">
      <div className="image-super-wrapper">
        <CurrentPoints
          addedPoints={addedPoints}
          getDataMain={props.getDataMain}
        />
        <div className="image-wrapper">
          <RenderImage showcasedImage={showcasedImage} />
        </div>
      </div>
      <div className="main-submission">
        <button
          className="new-image-button"
          onClick={() => setShowcasedImage(get_random_image())}
        >
          New Image
        </button>
        <label className="main-label">What is this? 🤔</label>
        <input className="main-input" id="image-name"></input>
        <button
          className="main-button"
          onClick={() => {
            setaddedPoints(checkImage(showcasedImage, addedPoints));
            setShowcasedImage(get_random_image());
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Main;
