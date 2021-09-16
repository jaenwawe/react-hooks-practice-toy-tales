import React, {useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() { setShowForm((showForm) => !showForm);}
    
  const [toys, setToyArray] = useState([])
  const url="http://localhost:3001/toys"


    const renderUpdatedToy =(updatedToy)=>{
      setToyArray( toys.map(toy=> updatedToy.id === toy.id ? toy=updatedToy: toy=toy))
   
    }

    useEffect(()=>{
      fetch(url)
      .then(r=>r.json())
      .then(toyData=>setToyArray(toyData))
     },[])


  const addToToys=(newToy)=> {
       setToyArray([...toys,newToy])
     }

    

    const postToy =(e)=>{
      fetch(url,{
        method: "POST",
        headers: 
          {"Content-Type" : "application/json",
          "Accept" : "application/json"},
          body: JSON.stringify(
          {
          name: e.target.name.value,
          image: e.target.image.value
    
         })
      })
      .then(r=>r.json())
      .then(newToy=>setToyArray(newToy))
    }

  return (
    <>
      <Header />
      {showForm ? <ToyForm postToy={postToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} renderUpdatedToy= {renderUpdatedToy}/>
    </>
  );
}

export default App;
