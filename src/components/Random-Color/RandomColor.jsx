import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function RandomColor() {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("#000000");

  function randomize(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHEX() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomize(hex.length)];
    }
    console.log(hexcolor);

    setColor(hexcolor);
  }

  function handleGenerateRGB() {
    const r = randomize(256);
    const g = randomize(256);
    const b = randomize(256);

    console.log(r, g, b);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    setColor(colorType === "RGB" ? "rgb(256,256,256)" : "#FFFFFF");
  }, [colorType]);

  console.log(color, colorType);

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.buttonWrapper}>
        <button onClick={() => setColorType("HEX")}>Create HEX color</button>
        <button onClick={() => setColorType("RGB")}>Create RGB color</button>
        <button
          onClick={colorType === "HEX" ? handleGenerateHEX : handleGenerateRGB}
        >
          Generate Random Color
        </button>
      </div>
      <div style={{ background: color }} className={styles.colorWrapper}>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
