import { useState } from "react";
import style from "./darkmode.module.css";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <section>
      <h1>Dark Mode</h1>
      <div className={style.darkmode} data-theme={theme}>
        <p>Hello {theme === "light" ? "Light" : "Dark"} Mode!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </section>
  );
}
