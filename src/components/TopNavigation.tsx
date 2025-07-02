import { useEffect, useState } from 'react';
import logoLight from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo2.svg';

const TopNavigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-theme'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const logo = isDarkMode ? logoDark : logoLight;

  return (
    <header className="h-[100px] w-full">
      <div className="TopNavigation w-full">
        <a href="/" className="Logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="Menu">
          <ul>
            <li className="cursor-pointer hover:underline">
              <a href="/aktualnosci">Aktualności</a>
            </li>
            <li className="cursor-pointer  hover:underline">
              <a href="/onas">O nas</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/zasady">Zasady</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopNavigation;
