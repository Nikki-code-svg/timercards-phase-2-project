import React from "react";
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

function TimeCard({ name, hours, minutes, seconds, id, handleDelete }) {
  return (
    <main>
      <div className="timecard-container">
      <Link className="timecard-link" to={`/cards/${id}`}>
          click me
        </Link>
        <h2 className="timecard-title">{name}</h2>
        <CountdownTimer 
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        
        <button className="cardbtn-delete" onClick={() => handleDelete(id)}> x </button> 
      </div>
    </main> 
  );
}

export default TimeCard;

