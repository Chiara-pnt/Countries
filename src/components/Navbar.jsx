import React from "react";
import { TbMoon, TbSun } from "react-icons/tb";

import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
  const { handleTheme, dark } = useStateContext();

  return (
    <nav className={dark ? "nav-dark" : "nav"}>
      <h2 className={dark ? "header-dark" : "header "}>Wehre in the world?</h2>
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
