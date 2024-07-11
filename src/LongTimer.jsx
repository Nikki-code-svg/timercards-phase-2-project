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

const handleTimerFilter = longTimers.filter(timer =>
    timer.name.toLowerCase().includes(longfilter.toLowerCase())
  );




return (
    
      <div className="home">
        <NavBar />
        <LongForm addTimer={addTimer}/>
        <LongSearch filterTimer={longfilter} setFilterTimer={setLongFilter} />
        <LongList time={handleTimerFilter} />
       
       
       </div>
       );   
    }
export default LongTimer;
