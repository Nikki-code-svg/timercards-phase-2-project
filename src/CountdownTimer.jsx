import React, { useState, useEffect } from "react";

const CountdownTimer = ({ hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours || 0,
    minutes: minutes || 0,
    seconds: seconds || 0,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
            clearInterval(interval);
            return prevTime;
          }

          let updatedHours = prevTime.hours;
          let updatedMinutes = prevTime.minutes;
          let updatedSeconds = prevTime.seconds - 1;

          if (updatedSeconds < 0) {
            updatedMinutes -= 1;
            updatedSeconds = 59;
          }

          if (updatedMinutes < 0) {
            updatedHours -= 1;
            updatedMinutes = 59;
          }

          return {
            hours: updatedHours,
            minutes: updatedMinutes,
            seconds: updatedSeconds,
          };
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft({
      hours: hours || 0,
      minutes: minutes || 0,
      seconds: seconds || 0,
    });
  };

  const { hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } = timeLeft;

  return (
    <div>
      <h4>Countdown Timer</h4>
      <p>
        Hours: {remainingHours} | Minutes: {remainingMinutes} | Seconds: {remainingSeconds}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;