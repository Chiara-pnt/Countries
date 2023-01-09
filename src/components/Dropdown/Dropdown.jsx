import React, { useState } from "react";
import "./dropdown.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useStateContext } from "../../context/ContextProvider";

const Dropdown = ({ setRegion }) => {
  const { dark } = useStateContext();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Region");

  const all = () => {
    setRegion("all");
    setSelected("All");
  };

  const americas = () => {
    setRegion("americas");
    setSelected("Americas");
  };
  const oceania = () => {
    setRegion("oceania");
    setSelected("Oceania");
  };
  const asia = () => {
    setRegion("asia");
    setSelected("Asia");
  };
  const africa = () => {
    setRegion("africa");
    setSelected("Africa");
  };
  const europe = () => {
    setRegion("europe");
    setSelected("Europe");
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={dark ? "dropdown-dark" : "dropdown"} onClick={handleClick}>
      {selected} {open ? <SlArrowUp /> : <SlArrowDown />}
      <ul className={open ? "dropdown-list" : "hidden"}>
        <button
          className={dark ? "dropdown-item-dark" : "dropdown-item"}
          onClick={all}
        >
          All
        </button>
        <button
          className={dark ? "dropdown-item-dark" : "dropdown-item"}
          onClick={americas}
        >
          Americas
        </button>
        <button
          className={dark ? "dropdown-item-dark" : "dropdown-item"}
          onClick={asia}
        >
          Asia
        </button>
        <button
          className={dark ? "dropdown-item-dark" : "dropdown-item"}
          onClick={oceania}
        >
          Oceania
        </button>
        <button
          className={dark ? "dropdown-item-dark" : "dropdown-item"}
          onClick={europe}
        >
          Europe
        </button>
        <button
          className={dark ? "dropdown-item-dark" : "dropdown-item"}
          onClick={africa}
        >
          Africa
        </button>
      </ul>
    </div>
  );
};

export default Dropdown;
