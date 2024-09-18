
import React from "react";
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';



function TimeCard({ name, hours, minutes, seconds }) {
     return (
     <div className="timecard-container">
      <h2 className="timecard-title">{name}</h2>
      <CountdownTimer 
          hours={hours}
          minutes={minutes}
          seconds={seconds}
         />
       <Link className="timecard-link" 
             to={`/cards/${name.id}`}>click me</Link>
    </div>
    )
}

export default TimeCard;