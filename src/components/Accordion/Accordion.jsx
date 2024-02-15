import { useState } from "react";
import { accordionData } from "./accordionData";
import styles from "./styles.module.css";

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

  return (
    <section>
      <h1>Accordion Selector</h1>
      <div className={styles.wrapper}>
        <button onClick={handleMultipleSelection}>
          {multipleSelection
            ? "Disable Multiple Selection"
            : "Enable Multiple Selection"}
        </button>
        <div className={styles.accordion}>
          {accordionData.map((item) => (
            <div key={item.id} className={styles.qna}>
              <div className={styles.question}>
                <h3>{item.question}</h3>
                <span
                  onClick={
                    multipleSelection
                      ? () => handleMultipleShowAnswer(item.id)
                      : () => handleShowAnswer(item.id)
                  }
                >
                  {selected === item.id ||
                  multipleSelected.indexOf(item.id) !== -1
                    ? "-"
                    : "+"}
                </span>
              </div>
              {selected === item.id ||
              multipleSelected.indexOf(item.id) !== -1 ? (
                <h4 className={styles.answer}>{item.answer}</h4>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
