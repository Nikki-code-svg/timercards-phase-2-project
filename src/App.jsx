import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import TimeList from './TimeList';
import Search from './Search';
import TimeCardForm from './TimeCardForm';

function App() {
  const [timers, setTimers] = useState([]);
  const [filterTimer, setFilterTimer] = useState(""); // For filtering timers

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then(response => response.json())
      .then(data => setTimers(data)) 
      .catch(error => console.error('Error fetching timers:', error));
  }, []);

 
  function addTimer(newTimer) {
    setTimers([...timers, newTimer]);
  }

 
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/cards/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        // Remove the card from state without a refresh
        setTimers(prevTimers => prevTimers.filter(timer => timer.id !== id));
      } else {
        console.error('Failed to delete the timer');
      }
    })
    .catch(error => console.error('Error deleting timer:', error));
  };

 
  const filteredTimers = timers.filter(timer => 
    timer.name.toLowerCase().includes(filterTimer.toLowerCase())
  );

  return (
    <div className="home">
      <NavBar />
      <TimeCardForm addTimer={addTimer} />
      <Search filterTimer={filterTimer} setFilterTimer={setFilterTimer} />
      <TimeList timeF={filteredTimers} handleDelete={handleDelete} /> 
    </div>
  );
}

export default App;
