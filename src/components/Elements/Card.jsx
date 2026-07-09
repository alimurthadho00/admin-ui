import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Card(props) {
  const { title, link = false, desc } = props;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="h-full flex flex-col">
      <div
        className={`flex justify-between items-center mb-2 ${
          darkMode ? "text-gray-300" : "text-gray-02"
        }`}
      >
        <div className="text-2xl font-semibold">{title}</div>

        {link && (
          <div className="text-xs cursor-pointer hover:text-primary">
            View All
          </div>
        )}
      </div>

      <div
        className={`rounded-md shadow-sm transition-all duration-300 ${
          darkMode ? "bg-zinc-900 text-white" : "bg-white"
        }`}
      >
        {desc}
      </div>
    </div>
  );
}

export default Card;