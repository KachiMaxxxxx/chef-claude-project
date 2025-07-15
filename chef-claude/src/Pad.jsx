export default function Pad({arrayState, darkMode, handleClick}) {
  return (
    <>
      <div className="pad-container">
        {arrayState.map((item) => (
          <button
          onClick={() => handleClick(item.id)}
            key={item.id}
            style={{ backgroundColor: darkMode ? "#222222" :  item.color}}
            className= {item.on ? "on" : undefined }
        
          >
          </button>
        ))}
      </div>
    </>
  );
}
