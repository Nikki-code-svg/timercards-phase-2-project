import React, { useState } from "react";
import "./Long.css"

function LongForm({ addTimer }) {
  const [name, setName] = useState("");
  const [targetDate, setTargetDate] = useState(""); 

  const handleNameChange = (e) => setName(e.target.value);

  const handleDateChange = (e) => setTargetDate(e.target.value); 

  function handleSubmit(e) {
    e.preventDefault();

    const timerData = {
      name,
      targetDate,  
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
        setName("");
        setTargetDate("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form  className="longSubbtn" onSubmit={handleSubmit}>
      <label>
        Name:
        <input className="input-form" type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Target Date:
        <input className="input-form" type="datetime-local" value={targetDate} onChange={handleDateChange} /> 
      </label>
      <button className="longbtn-delete" type="submit">Submit</button>
    </form>
  );
}

export default LongForm;