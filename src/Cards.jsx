import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function Cards() {
  const [card, setCard] = useState(null); 
  const { id } = useParams();

 
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null); 
  const intervalRef = useRef(null); 

  useEffect(() => {
   fetch(`http://localhost:3000/cards/${id}`)
      .then(response => response.json())
      .then((data) => {
        console.log("Fetched card data:", data); 
        setCard(data);
        // Convert hours, minutes, and seconds to total seconds for timer
        const totalSeconds = data.hours * 3600 + data.minutes * 60 + data.seconds;
        setTimeLeft(totalSeconds);
      })
      .catch(error => console.error("Error fetching card data:", error));
  }, [id]);

 
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

 
  const startTimer = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current); 
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); 
    }
  };

 
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  
  const resetTimer = () => {
    if (card) {
      const totalSeconds = card.hours * 3600 + card.minutes * 60 + card.seconds;
      setTimeLeft(totalSeconds);
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  if (!card) {
    return <h1>No card found</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1 className="single-card-name">{card.name}</h1>
        <p className="single-card-font">
          {formatTime(timeLeft)}
        </p>
        <div className="container-singlebtn">
          <button className='single-btn' onClick={startTimer} disabled={isRunning || timeLeft === 0}>
            Start
          </button>
          <button className='single-btn'  onClick={stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button className='single-btn'  onClick={resetTimer}>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}

export default Cards;


