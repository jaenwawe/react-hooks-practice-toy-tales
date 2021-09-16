import React, {useState,useEffect} from "react";
import ToyCard from "./ToyCard";



function ToyContainer({toys, renderUpdatedToy, deleteToy}) {

  




  return (
    <div id="toy-collection">
      {toys.map(toy=> <ToyCard toy={toy} renderUpdatedToy={renderUpdatedToy} deleteToy={deleteToy}/>)}
    </div>
  );
}


export default ToyContainer;
