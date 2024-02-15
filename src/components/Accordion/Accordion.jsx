import { useState } from "react";
import { accordionData } from "./accordionData";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleShowAnswer(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultipleSelection() {
    setMultipleSelection(!multipleSelection);
    setSelected(null);
    setMultipleSelected([]);
  }

  function handleMultipleShowAnswer(id) {
    const selectedCopy = [...multipleSelected];
    const currentIdIndex = selectedCopy.indexOf(id);

    if (currentIdIndex === -1) {
      selectedCopy.push(id);
    } else {
      selectedCopy.splice(currentIdIndex, 1);
    }
    setMultipleSelected(selectedCopy);
  }

  console.log(multipleSelected);

  return (
    <div>
      <button onClick={handleMultipleSelection}>
        {multipleSelection
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>
      <div>
        {accordionData.map((item) => (
          <div key={item.id}>
            <h3>{item.question}</h3>
            <span
              onClick={
                multipleSelection
                  ? () => handleMultipleShowAnswer(item.id)
                  : () => handleShowAnswer(item.id)
              }
            >
              +
            </span>
            {selected === item.id ||
            multipleSelected.indexOf(item.id) !== -1 ? (
              <h3>{item.answer}</h3>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
