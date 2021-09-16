import React,{useState} from "react";

function ToyCard ({toy,renderUpdatedToy}){
  
  const addLike = ()=>  {
   const currentLikes = toy.likes++
   console.log(currentLikes)
  fetch(`http://localhost:3001/toys/${toy.id}`,
  {
    method: "PATCH",
    headers: 
      {"Content-Type" : "application/json",
      "Accept" : "application/json"},
      body: JSON.stringify(
      {
      likes: toy.likes+1

     })
  })
  .then(r=>r.json())
  .then(element=>renderUpdatedToy(element))
}



  return(
  <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={addLike} > Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
