import { useEffect, useState } from "react";
import style from "./scrollIndicator.module.css";

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    const scrollY = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollY / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div className={style.component}>
      <h1>Scroll Indicator</h1>
      <div className={style.barContainer}>
        <div
          className={style.bar}
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
