import React from "react";
import "./navbar.css";
import { TbMoon, TbSun } from "react-icons/tb";

import { useStateContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { handleTheme, dark } = useStateContext();

  return (
    <nav className={dark ? "nav-dark" : "nav"}>
      <h2 className={dark ? "header-dark" : "header "}>Where in the world?</h2>
      <button className={dark ? "mode-dark" : "mode"} onClick={handleTheme}>
        {dark ? (
          <>
            <TbSun />
            Light Mode
          </>
        ) : (
          <>
            <TbMoon /> Dark mode
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
