import { useState } from "react";
import { accordionData } from "./accordionData";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleShowAnswer(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <div>
      {accordionData.map((item) => (
        <div key={item.id}>
          <h3>{item.question}</h3>
          <span onClick={() => handleShowAnswer(item.id)}>+</span>
          {selected === item.id ? <h3>{item.answer}</h3> : null}
        </div>
      ))}
    </div>
  );
}
