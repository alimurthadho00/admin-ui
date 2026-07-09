import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/authContext";
import { logoutService } from "../../context/authContext";
import { DarkModeContext } from "../../context/DarkModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function MainLayout(props) {
  const { children } = props;

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { theme, setTheme } = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { user, logout } = useContext(AuthContext);

  const [loadingLogout, setLoadingLogout] = useState(false);

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    {
      id: 3,
      name: "Transaction",
      icon: <Icon.Transaction />,
      link: "/transaction",
    },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const handleLogout = async () => {
    try {
      setLoadingLogout(true);

      await logoutService();

      await new Promise((resolve) => setTimeout(resolve, 1000));

      logout();
    } catch (err) {
      console.error(err);

      if (err.status === 401) {
        logout();
      }
    } finally {
      setLoadingLogout(false);
    }
  };

  return (
    <>
      <div
        className={`flex min-h-screen ${theme.name} ${
          darkMode ? "bg-zinc-900" : ""
        }`}
      >
        {/* Sidebar */}
        <aside className="flex flex-col justify-between bg-defaultBlack text-special-bg2 w-28 sm:w-70 py-6 px-4">
          <div>
            <div className="mb-6">
              <Logo variant="secondary" />
            </div>

            <nav>
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md transition-all duration-200 hover:text-white hover:font-bold hover:scale-105 ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>

                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Theme */}
          <div>
            <div className="mb-2">Themes</div>

            <div className="flex items-center gap-2 flex-wrap">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer`}
                  onClick={() => setTheme(t)}
                />
              ))}

              <button
                onClick={toggleDarkMode}
                className="ml-2 text-gray-400 hover:text-white transition cursor-pointer"
              >
                {darkMode ? (
                  <WbSunnyOutlinedIcon sx={{ fontSize: 18 }} />
                ) : (
                  <DarkModeOutlinedIcon sx={{ fontSize: 18 }} />
                )}
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div>
            <div onClick={handleLogout} className="cursor-pointer">
              <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
                <div className="mx-auto sm:mx-0 text-primary">
                  <Icon.Logout />
                </div>

                <div className="ms-3 hidden sm:block">Logout</div>
              </div>
            </div>

            <div className="border my-10 border-b-special-bg"></div>

            <div className="flex justify-between items-center">
              <div>Avatar</div>

              <div className="hidden sm:block">
                {user.name}
                <br />
                View Profile
              </div>

              <div className="hidden sm:block">
                <Icon.Detail size={15} />
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div
          className={`flex flex-col flex-1 min-h-0 ${
            darkMode ? "bg-zinc-800" : "bg-special-mainBg"
          }`}
        >
          <header
            className={`flex justify-between items-center border-b px-6 py-4 ${
              darkMode
                ? "bg-zinc-800 border-zinc-700 text-white"
                : "border-gray-05 bg-special-mainBg"
            }`}
          >
            <div className="flex items-center">
              <div className="font-bold text-gray-01">{user.name}</div>

              <div className="flex text-gray-03">
                <span className="mx-1">&#xBB;</span>
              </div>

              <div className="text-sm text-gray-02">May 19, 2023</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="me-10">
                <NotificationsIcon className="text-primary scale-110" />
              </div>

              <Input
                placeholder="Search..."
                backgroundColor="bg-white"
                border="border-white"
              />
            </div>
          </header>

          <main
            className={`flex-1 min-h-0 px-6 py-6 overflow-auto ${
              darkMode ? "bg-zinc-800" : ""
            }`}
          >
            {children}
          </main>
        </div>
      </div>

      {/* Backdrop Logout */}
      <Backdrop
        open={loadingLogout}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1000,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress color="inherit" />

        <span className="text-sm font-light tracking-wide">Logging Out</span>
      </Backdrop>
    </>
  );
}

export default MainLayout;