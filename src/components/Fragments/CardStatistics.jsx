import { useContext } from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";
import { ThemeContext } from "../../context/ThemeContext";
import { DarkModeContext } from "../../context/DarkModeContext";

function CardStatistic(props) {
  const { data } = props;

  const { theme } = useContext(ThemeContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Card
      title="Statistics"
      desc={
        <div className="p-2">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <select
              className={`font-bold text-xl outline-none border-none bg-transparent ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <option>Weekly Comparison</option>
            </select>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3  bg-gray-05"></div>
                <span
                  className={`text-sm ${
                    darkMode ? "text-white" : "text-gray-01"
                  }`}
                >
                  This Week
                </span>
              </div>

              <div className="flex items-center gap-2 mr-2">
                <div
                  className="w-3 h-3"
                  style={{ backgroundColor: theme.color }}
                ></div>

                <span
                  className={`text-sm ${
                    darkMode ? "text-white" : "text-gray-01"
                  }`}
                >
                  Last Week
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <BarsDataset dataset={data} />
        </div>
      }
    />
  );
}

export default CardStatistic;