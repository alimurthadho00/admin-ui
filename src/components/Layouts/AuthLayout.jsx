import { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/ThemeContext";
import { DarkModeContext } from "../../context/DarkModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function AuthLayout(props) {
  const { children } = props;

  const { theme } = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme.name
      } ${
        darkMode ? "bg-zinc-900 text-white" : "bg-special-mainBg text-black"
      }`}
    >
      {/* Card Login/Register */}
      <div className="w-full max-w-sm">
        <Logo />
        {children}
      </div>

      {/* Toggle Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="mt-7 text-gray-400 hover:text-primary transition duration-200 cursor-pointer"
      >
        {darkMode ? (
          <WbSunnyOutlinedIcon sx={{ fontSize: 30 }} />
        ) : (
          <DarkModeOutlinedIcon sx={{ fontSize: 30 }} />
        )}
      </button>
    </main>
  );
}

export default AuthLayout;