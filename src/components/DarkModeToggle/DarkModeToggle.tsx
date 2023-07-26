"use client";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="w-11 h-6 border-teal-800 rounded-3xl border-2	flex justify-between items-center p-0.5 relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className={`h-4 w-4 rounded-full absolute bg-teal-500 ${
          mode === "light" ? "left-0.5" : "right-0.5"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
