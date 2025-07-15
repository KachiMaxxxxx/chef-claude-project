import pads from "./pads";
import { useState } from "react";
import Pad from "./Pad";

export default function App({ darkMode }) {
  const [arrayState, setArrayState] = useState(pads);

  function handleClick(id) {
    setArrayState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item))
    );
  }

  return (
    <main>
      <Pad
        handleClick={handleClick}
        arrayState={arrayState}
        darkMode={darkMode}
      />
    </main>
  );
}
