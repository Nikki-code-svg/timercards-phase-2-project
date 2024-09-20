import React, { useState } from "react";

function TimeCardForm({ addTimer }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [name, setName] = useState("");
 

  const handleHoursChange = (e) => {
    setHours(parseInt(e.target.value));
  };

  const handleMinutesChange = (e) => {
    setMinutes(parseInt(e.target.value));
  };

  const handleSecondsChange = (e) => {
    setSeconds(parseInt(e.target.value));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    function resetForm() {
      setName("");
      setHours(0);
      setMinutes(0);
      setSeconds(0);

    }

    const timerData = {
      name,
      hours,
      minutes,
      seconds,
    };

    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(timerData),
    })
      .then((response) => response.json())
      .then((data) => {
        addTimer(data); 
        resetForm();
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="timecard-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Hours:
        <input
          className="timecard-input"
          type="number"
          value={hours}
          onChange={handleHoursChange}
          required
        />
      </label>
      <label>
        Minutes:
        <input
          className="timecard-input"
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
          required
        />
      </label>
      <label>
        Seconds:
        <input
          className="timecard-input"
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
          required
        />
      </label>
      <button 
         className="submit-form-btnS"
         type="submit">Submit</button>
    </form>
  );
}

export default TimeCardForm;