import {useState} from "react";


export default function App(){
 

const [isGoingOut, setIsGoingOut] = useState(true)
  function handleClick(){
    setIsGoingOut(active=> !active)
  }
  return(
  <main>
    <h1>Do I feel like going out today?</h1>
    <button onClick={handleClick}>{isGoingOut===true?"Yes": "No"}</button>
  </main>
 )







}