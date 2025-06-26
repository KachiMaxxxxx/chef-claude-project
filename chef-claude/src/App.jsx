import { useState } from "react";

export default function App() {


  
  const allFavoriteThings = [
    "💦🌹",
    "😂",
    "💡",
    "🪔",
    "🔥",
    "🧤",
    "🟤",
    "🦥",
    "🍎🍰",
    "🚪",
    "🔔",
    "🦀🔔",
    "🥩📺",
    "🍑",
  ];
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const thingsElements = myFavoriteThings.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevFavThings) => [...prevFavThings, allFavoriteThings[prevFavThings.length]]);
   
  }
  return (
    <main className="container">
      <button className="button" onClick={addFavoriteThing}>
        {" "}
        Add Item{" "}
      </button>
      <section className="container" aria-live="polite">
        {thingsElements}{" "}
      </section>
    </main>
  );
}
