import React, { useState, useEffect } from "react";

const LongCount = ({ days, hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: days || 0,
    hours: hours || 0,
    minutes: minutes || 0,
    seconds: seconds || 0,
  });

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let updatedDays = prevTime.days;
        let updatedHours = prevTime.hours;
        let updatedMinutes = prevTime.minutes;
        let updatedSeconds = prevTime.seconds;

        if (updatedSeconds === 0) {
          if (updatedMinutes === 0) {
            if (updatedHours === 0) {
              if (updatedDays === 0) {
                clearInterval(interval);
                return prevTime;
              }
              updatedDays -= 1;
              updatedHours = 23;
            }
            updatedHours -= 1;
            updatedMinutes = 59;
          }
          updatedMinutes -= 1;
          updatedSeconds = 59;
        } else {
          updatedSeconds -= 1;
        }

        return {
          days: updatedDays,
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const { days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } = timeLeft;

  return (
    <div>
      <h3>Countdown Timer</h3>
      <p>
        Days: {remainingDays} | Hours: {remainingHours} | Minutes: {remainingMinutes} | Seconds: {remainingSeconds}
      </p>
    </div>
  );
};

export default LongCount;