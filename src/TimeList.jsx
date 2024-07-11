import React from "react";
import TimeCard from "./TimeCard";


function TimeList({ timeF }) {
   return (
      
      <ul className="cards">
       {timeF.map(card => (
           <TimeCard 
              key={card.id}
              name={card.name}
              hours={card.hours}
              minutes={card.minutes}
              seconds={card.seconds}
              />
          ))}
         
      </ul>
    
  );
       
}

export default TimeList;