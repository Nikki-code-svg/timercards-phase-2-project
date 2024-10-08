import React, { useEffect, useState, useRef } from "react";
import audioFile from './audioFile/sweet-man-10954.mp3' 


const CountdownTimer = ({ hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours || 0,
    minutes: minutes || 0,
    seconds: seconds || 0,
  });
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);


  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
            clearInterval(interval);
            if (audioRef.current) {
              audioRef.current.play();
            }

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
      audioRef.current.pause(); 
      audioRef.current.currentTime = 0; 
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft({
      hours: hours || 0,
      minutes: minutes || 0,
      seconds: seconds || 0,
    });
    if(audioRef.current){
        audioRef.current.pause(); 
        audioRef.current.currentTime = 0;
    }
  };

  const { hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } = timeLeft;

  return (
    <div>
      {/* <h4 className="countdown-timer">Countdown Timer</h4> */}
      <p className='count-timer'>
        Hours: {remainingHours} | Minutes: {remainingMinutes} | Seconds: {remainingSeconds}
      </p>
      <button  className="sSR-btn" onClick={handleStart}>Start</button>
      <button  className="sSR-btn" onClick={handleStop}>Stop</button>
      <button  className="sSR-btn" onClick={handleReset}>Reset</button>
      <audio ref={audioRef} src={audioFile} preload="auto" />
    </div>
  );
};

export default CountdownTimer;