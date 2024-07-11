import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './NavBar';
import TimeList from './TimeList';
import Search from "./Search";
import TimeCardForm from './TimeCardForm';


function App() {
 const [ timers, setTimers ] = useState([]);
 const [ filterTimer, setFilterTimer ] = useState("")
console.log(filterTimer);


useEffect(() => {
   fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then((timer) => {
        setTimers(timer);
    })
    .catch(error => {
        console.error(error);
    });
}, []);


function addTimer(newTimer) {
  setTimers([...timers, newTimer])
}

const HandleTimerFilter = timers.filter((timers) => {
  return timers.name.toLowerCase().includes(filterTimer.toLowerCase());
});




return (
    
      <div className="home">
        <NavBar />
        <TimeCardForm addTimer={addTimer}/>
        <Search filterTimer={filterTimer} setFilterTimer={setFilterTimer} />
        <TimeList timeF={HandleTimerFilter} />
       
       
       
       </div>
       );
    }
export default App;
