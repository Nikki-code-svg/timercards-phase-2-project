import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import TimeList from "./TimeList";


function Cards() {
  const [ cards, setCards ] = useState(null);
   const {id} = useParams();
  console.log(params);

  useEffect(() =>{
    fetch(`http://localhost:3000/cards/${id}`)
    .then(response => response.json())
    .then((card)=> {
           setCards(card)
    })
    .catch(error => console.error(error));
  }, [id])
 

  if(!cards.title)
        return <h1>Loading...</h1>
    
  const listcards = cards.timers.map((cards, index) => (
    <span key={index}>{cards}</span>
  ))
    return (
        <>
          <header>
            <NavBar />
            
          </header>
          <main>
          <h1>{cards.name}</h1>
            <p>Time:{cards.timers.time}</p>
            {listcards}
        </main>
        </>
      );
};

 export default Cards;