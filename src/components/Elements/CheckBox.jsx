import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function CheckBox(props) {
  const { label, id, ...rest } = props;

  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <input className="accent-primary" id={id} {...rest} />

      <label
        htmlFor={id}
        className={`text-sm ml-3 ${
          darkMode ? "text-gray-300" : "text-gray-01"
        }`}
      >
        {label}
      </label>
    </>
  );
}

export default CheckBox;