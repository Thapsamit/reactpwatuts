import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [convertedTime, setConvertedTime] = useState(0);
  const [time, setTime] = useState(0);

  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    return `${hours}:${minutes}:${seconds}`;
  };

  const startPractice = () => {
    setIsActive(true);
  };
  const stopPractice = () => {
    setIsActive(false);
    setIsStop(true);
    setIsSubmit(true);
    setIsReset(true);
  };
  const resetPractice = () => {
    setTime(0);
    setIsActive(true);
    setIsStop(false);
    setIsReset(false);
    setIsSubmit(false);
  };
  const submitTime = () => {
    setTime(0);
    setIsActive(false);
    setIsStop(false);
    setIsReset(false);
    setIsSubmit(false);
  };
  useEffect(() => {
    console.log("i ran");
    let interval = null;

    if (isActive && isStop === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isStop]);

  return (
    <>
      <div>
        <h1>{formatTime(time)}</h1>
        {!isActive && !isReset && (
          <button onClick={startPractice}>Start Practicing</button>
        )}
        {isActive && !isStop && (
          <button onClick={stopPractice}>Stop Practicing</button>
        )}
        {isReset && <button onClick={resetPractice}>Restart Practicing</button>}
        {isSubmit && <button onClick={submitTime}>Submit</button>}
      </div>
    </>
  );
};

export default Stopwatch;
