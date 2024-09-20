import React, { useState, useEffect } from "react";

const LongCount = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(targetDate) - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="date-time-container">
      <p className="font-DHMS">
        Days: {timeLeft.days} | Hours: {timeLeft.hours} | Minutes: {timeLeft.minutes} | Seconds: {timeLeft.seconds}
      </p>
    </div>
  );
};

export default LongCount;



