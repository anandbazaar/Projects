import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
const Ms = (props) => {
  return (
    <div>
      {props.h}:{props.m}:{props.sc}:{props.ms}
    </div>
  );
};
function App() {
  const [milli, setMilli] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [hours, setHours] = useState(0);

  const increase = () => {
    setMilli((prev) => prev + 1);
  };

  useEffect(() => {
    if (milli === 100) {
      setSeconds(seconds + 1);
      setMilli(0);
    }
    if (seconds === 60) {
      setMinute(minutes + 1);
      setSeconds(0);
    }
    if (minutes === 60) {
      setHours(hours + 1);
      setMinute(0);
    }
  }, [milli, seconds, minutes]);

  return (
    <div>
      <Ms h={hours} m={minutes} sc={seconds} ms={milli}></Ms>
      <button
        onClick={() => {
          setInterval(increase, 10);
        }}
      >
        start/pause
      </button>
    </div>
  );
}

export default App;
