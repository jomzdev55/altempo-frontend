import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../Stores/useThemeStore";

import logoAltempoMenu from "@Assets/png/menu/logotype.png";
import logoAltempoMenuDark from "@Assets/png/menu/logotype-dark.png";
import arrowLeftIcon from "@Assets/svg/menu/arrow-left-menu.svg";
import arrowLeftIconWhite from "@Assets/svg/menu/arrow-left-menu-dark-theme.svg";
import globeIcon from "@Assets/svg/menu/globe-menu.svg";
import globeIconWhite from "@Assets/svg/menu/globe-menu-dark.svg";
import darkModeIcon from "@Assets/svg/menu/dark-mode.svg";
import lightModeIcon from "@Assets/svg/menu/light-mode.svg";

const Header = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="md:container md:mx-auto lg:max-w-[800px] xl:max-w-[1000px]"
      id="menu"
    >
      <div className="flex justify-between items-center p-4">
        <button onClick={() => navigate("/")}>
          <img
            src={darkMode ? logoAltempoMenuDark : logoAltempoMenu}
            alt=""
            className={darkMode ? "pt-2" : ""}
          />
        </button>
        <div className="flex gap-7">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-accent dark:text-white"
          >
            <img src={darkMode ? arrowLeftIconWhite : arrowLeftIcon} />
            Regresar
          </button>
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-accent dark:text-white"
          >
            <img src={darkMode ? globeIconWhite : globeIcon} alt="" />
            ESP
          </button>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-1 text-accent dark:text-white"
          >
            <img src={darkMode ? darkModeIcon : lightModeIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
