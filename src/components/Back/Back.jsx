import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import "./back.css";

const Back = () => {
  const { dark } = useStateContext();
  return (
    <div className={dark ? "backbutton-dark" : "backbutton"}>
      <Link to="/">
        <BiArrowBack />
        Back
      </Link>
    </div>
  );
};

export default Back;
