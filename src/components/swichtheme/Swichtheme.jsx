import React, { useState, useEffect } from "react";
import "./switchtheme.css";

const Swichtheme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark-theme");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <button
      id="theme-button"
      className="change-theme"
      onClick={toggleTheme}
      role="switch"
      aria-checked
    >
      {theme === "dark-theme" ? (
        <i className="uil uil-sun"></i>
      ) : (
        <i className="uil uil-moon"></i>
      )}
    </button>
  );
};

export default Swichtheme;
