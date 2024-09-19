import React, { useState } from "react";

function LongForm({addTimer}) {
    const [ days, setDays ] = useState(0);
    const [ hours, setHours ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    
    const [ name, setName ] = useState("");

    const handleDaysChange = (e) => {
        setDays(parseInt(e.target.value));
    }

    const handleHoursChange = (e) => {
        setHours(parseInt(e.target.value));
    }

    const handleMinutesChange = (e) => {
        setMinutes(parseInt(e.target.value));
    }
    const handleSecondsChange = (e) => {
        setSeconds(parseInt(e.target.value));
    }
    const handleNameChange = (e) => {
        setName(e.target.value)

    }

   function handleSubmit(e) {
    e.preventDefault();
   

const timerData = {
    name,
    days,
    hours,
    minutes,
    seconds
};

fetch("http://localhost:3000/longterm", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(timerData),
})
  .then((response) => response.json())
  .then((data) => {
    addTimer(data);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  })
  .catch((error) => {
    console.error(error);
  });
 }
 return (

    <form onSubmit={handleSubmit}>
     <label>
          Name:
         <input type="name"
          value={name}
          onChange={handleNameChange} />
     </label>
     <label>
        Days:
        <input type="number" 
        value={days}
         onChange={handleDaysChange} />
     </label>
     <label>
        Hours:
        <input type="number" 
        value={hours}
         onChange={handleHoursChange} />
     </label>
     {` `}
     <label>
        Minutes:
        <input type="number" 
        value={minutes} 
        onChange={handleMinutesChange} />
     </label>
     {` `}
     <label>
        Seconds:
        <input type="number" 
        value={seconds} 
        onChange={handleSecondsChange} />
     </label>
       {` `}
     <button className="longbtn-delete" type="submit">Submit</button>
       
     </form>
   );

    
};

export default LongForm;