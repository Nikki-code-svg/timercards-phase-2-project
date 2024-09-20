import React from "react";
import LongCard from "./LongCard";

function LongList({ time, handleDelete, handleUpdate}) {
  return (
    <ul className="cards">
      {time.map(longterm => (
        <LongCard 
          key={longterm.id}
          id={longterm.id}
          name={longterm.name}
          targetDate={longterm.targetDate}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
}

export default LongList;


          



