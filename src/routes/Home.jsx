import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Dropdown from "../components/Dropdown/Dropdown";
import Card from "../components/Card/Card";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("all");
  const [query, setQuery] = useState("");
  const { dark } = useStateContext();

  const fetchData = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  };

  const fetchRegion = () => {
    axios.get(`https://restcountries.com/v3.1/region/${region}`).then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(() => {
    if (region === "all") {
      fetchData();
    } else {
      fetchRegion();
    }
  }, [region]);

  return (
    <div className={dark ? "home-dark" : "home"}>
      <Navbar />
      <div className="inputs">
        <Searchbar setQuery={setQuery} />
        <Dropdown setRegion={setRegion} />
      </div>
      <Card countries={countries} query={query} />
    </div>
  );
};

export default Home;
