import {useState} from "react";

export default function App(){
  const [isImportant, setIsImportant] = useState("Yes");
  console.log(isImportant);
 function handleClick(){
  setIsImportant("Definitely")
 }
  

return (
  <main>
    <h1 className="title">Is state important to you?</h1>
    <button onClick={handleClick} className="value">{isImportant}</button>
  </main>
)

}