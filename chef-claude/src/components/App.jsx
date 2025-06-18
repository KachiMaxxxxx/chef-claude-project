export default function App() {
  function handleClick(){
    console.log("I was clicked")
  }
  function handleMouseOver(){
    console.log("I moused over")
  }
  return (
    <main className="container">
      <div className="img__wrapper">
        <div className="img__container">
          <img
            src="/src/assets/man-riding-bike.png"
            alt="placeholder image of picsum"
            onMouseOver={handleMouseOver}
          />
        </div>

        <button onClick= {handleClick}className="button">Click Me</button>
      </div>
    </main>
  );
}