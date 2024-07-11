import React from "react";
import LongCard from "./LongCard";


function LongList({ time }) {
    return (
    
      <ul className="cards">
       {time.map(longterm => (
       
           <LongCard 
              key={longterm.id}
              name={longterm.name}
              days={longterm.days}
              hours={longterm.hours}
              minutes={longterm.minutes}
              seconds={longterm.seconds}
              />
          ))}

      </ul>
    
  );
  
}

export default LongList;

          



