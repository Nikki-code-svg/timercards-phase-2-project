import { useEffect, useState } from 'react'
import "./Long.css"
import NavBar from './NavBar';
import LongList from './LongList';
import LongSearch from "./LongSearch";
import LongForm from './LongForm';


function LongTimer() {
 const [ longTimers, setLongTimers ] = useState([]);
 const [ longfilter, setLongFilter ] = useState("");
console.log(longTimers);



useEffect(() => {
   fetch("http://localhost:3000/longterm")
    .then(response => response.json())
    .then((timer) => {
        setLongTimers(timer);
    })
    .catch(error => {
        console.error(error);
    });
}, []);


function addTimer(newTimer) {
  setLongTimers([...longTimers, newTimer])
}

const handleDelete = (id) => {
  fetch(`http://localhost:3000/longterm/${id}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (response.ok) {
      setLongTimers(prevTimers => prevTimers.filter(timer => timer.id !== id));
    } else {
      console.error('Failed to delete the timer');
    }
  })
  .catch(error => console.error('Error deleting timer:', error));
};


const handleUpdate = (id, updatedData) => {
  fetch(`http://localhost:3000/longterm/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Failed to update the timer');
    }
  })
  .then(updatedTimer => {
    console.log('Updated Timer:', updatedTimer); 
    setLongTimers(prevTimers => 
      prevTimers.map(timer => 
        timer.id === id ? updatedTimer : timer
      )
    );
    console.log('Timer updated successfully');
  })
  
  .catch(error => console.error('Error patching timer:', error));
};


const handleTimerFilter = longTimers.filter(timer =>
    timer.name.toLowerCase().includes(longfilter.toLowerCase())
  );


return (
    
      <div className="home">
        <NavBar />
        <LongForm addTimer={addTimer}/>
        <LongSearch filterTimer={longfilter} setFilterTimer={setLongFilter} />
        <LongList time={handleTimerFilter} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
       
       
       </div>
       );   
    }
export default LongTimer;
