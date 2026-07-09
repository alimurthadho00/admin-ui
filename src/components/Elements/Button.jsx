import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Button(props) {
  const { children, type = "submit", variant = "primary" } = props;

  const { darkMode } = useContext(DarkModeContext);

  const baseClasses =
    "h-12 rounded-md text-sm w-full cursor-pointer transition-all duration-300 hover:scale-105";

  const variantClasses = {
    primary: darkMode ? "bg-primary text-white" : "bg-primary text-white",

    secondary: darkMode
      ? "bg-zinc-800 border border-zinc-700 text-white"
      : "bg-gray-05 text-gray-02",
  };

  return (
    <button
      className={`${baseClasses} ${
        variantClasses[variant] || variantClasses.primary
      }`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;