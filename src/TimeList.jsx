import React from "react";
import TimeCard from "./TimeCard";

function TimeList({ timeF, handleDelete }) {
  return (
    <ul className="cards">
      {timeF.map(card => (
        <TimeCard 
          key={card.id} 
          id={card.id} 
          name={card.name} 
          hours={card.hours} 
          minutes={card.minutes} 
          seconds={card.seconds} 
          handleDelete={handleDelete} 
        />
      ))}
    </ul>
  );
}

export default TimeList;
