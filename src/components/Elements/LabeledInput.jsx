import { useContext } from "react";
import Input from "./Input";
import { DarkModeContext } from "../../context/DarkModeContext";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <label
        htmlFor={id}
        className={`block text-sm mb-2 ${
          darkMode ? "text-gray-200" : "text-gray-01"
        }`}
      >
        {label}
      </label>

      <Input id={id} {...rest} />
    </>
  );
}

export default LabeledInput;