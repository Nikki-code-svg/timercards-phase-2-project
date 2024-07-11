
import React from "react";
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';



function TimeCard({ name, hours, minutes, seconds }) {
     return (
     <>
      <h3>{name}</h3>
      <CountdownTimer 
          hours={hours}
          minutes={minutes}
          seconds={seconds}
         />
       <Link to={`/cards/${name.id}`}>click me</Link>
      </>
    )
}

export default TimeCard;