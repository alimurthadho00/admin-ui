import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Input(props) {
  const {
    id,
    icon = false,
    backgroundColor = "",
    border = "border-gray-03",
    ...rest
  } = props;

  const { darkMode } = useContext(DarkModeContext);

  return (
    <input
      id={id}
      className={`py-3 pl-4 text-sm rounded-md w-full border transition-all duration-300
      ${
        darkMode
          ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-primary"
          : `text-gray-01 ${border} ${backgroundColor} focus:border-black`
      }
      focus:outline-none focus:ring-0`}
      {...rest}
    />
  );
}

export default Input;