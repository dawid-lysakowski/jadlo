import { useEffect } from "react";
import darkModeIcon from "../assets/images/dark-mode.svg";

const toggleTheme = () => {
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
};

const TopBar = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);

  return (
    <nav className="TopBar">
      <div>
        <a
          href="https://facebook.com/jadlodzielniaszczecin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Facebook
        </a>
        <div className="flex space-x-4">
          <button className="hover:text-blue-400">EN / PL</button>
          <button
            className="hover:text-blue-400 flex items-center"
            onClick={toggleTheme}
          >
            <img
              src={darkModeIcon}
              alt="Toggle Theme"
              className="w-6 h-6 mr-2"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
