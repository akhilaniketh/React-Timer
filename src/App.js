import "./styles.css";
import { useState } from "react";

export default function App() {
  const [sec, setsec] = useState(0);
  const [flag, setflag] = useState(false);
  const startTimer = () => {
    // Complete this function
    setflag(!flag);
    window.myinterval = setInterval(() => {
      setsec((sec) => sec + 1);
    }, 1000);
  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(window.myinterval);
    setflag(true);
  };
  const resetTimer = () => {
    // Complete this function
    stopTimer();
    setsec(0);
    setflag(true);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {parseInt(sec / 60, 10)} mins </span>
      <span> {sec % 60} secs</span>
      <div>
        <button disabled={flag} onClick={startTimer}>
          Start
        </button>
        <button disabled={sec < 1} onClick={stopTimer}>
          Stop
        </button>
        <button disabled={sec < 1} onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
