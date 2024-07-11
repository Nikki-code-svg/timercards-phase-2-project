import React from "react";
import './App.css'

function LongSearch({ filterTimer, setFilterTimer}) {
    return (
      <div className="searchbar">
        <input
           type="text"
           id="search"
           placeholder="Type Timer..."
           value={filterTimer}
           onChange={(e) => setFilterTimer(e.target.value)}
           />
      </div>
    )
}
export default LongSearch;