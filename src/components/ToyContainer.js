import React, {useState,useEffect} from "react";
import ToyCard from "./ToyCard";



function ToyContainer({toys}) {

  




  return (
    <div id="toy-collection">
      {toys.map(toy=> <ToyCard toy={toy}/>)}
    </div>
  );
}


export default ToyContainer;
