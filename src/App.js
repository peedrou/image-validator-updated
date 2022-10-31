import React, { useState } from "react";
import "./App.scss";
import Main from "./Components/main/main";
import Score from "./Components/score/score";

function App() {
  const [totalPoints, setTotalPoints] = useState(0);
  const getDataMain = (dataMain) => {
    return setTotalPoints(dataMain);
  };
  return (
    <div className="App">
      <Score totalPoints={totalPoints} />
      <Main getDataMain={getDataMain} />
    </div>
  );
}

export default App;
