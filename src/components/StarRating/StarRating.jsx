import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }
  console.log(rating);

  function handleMouseMove(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <section>
      <h1>Star Rating</h1>
      <div>
        {[...Array(numOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={`${
                index <= rating ? styles.active : styles.inactive
              } ${index <= hover ? styles.hover : ""}`}
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          );
        })}
      </div>
    </section>
  );
}
