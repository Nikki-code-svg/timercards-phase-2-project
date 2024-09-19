import { Link } from 'react-router-dom';
import React, {useState} from "react";
import LongCount from "./LongCount";



function LongCard({ name, days, hours, minutes, seconds }) {
     return (
     <>
      <h3>{name}</h3>
      <LongCount 
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
         />
       
      </>
    )
}

export default LongCard;