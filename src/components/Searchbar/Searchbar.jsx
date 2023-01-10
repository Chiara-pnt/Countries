import { BiSearch } from "react-icons/bi";
import { useStateContext } from "../../context/ContextProvider";
import "./searchbar.css";

const Searchbar = ({ query, setQuery }) => {
  const { dark } = useStateContext();

  const handleChange = (e) => {
    setTimeout(() => setQuery(e.target.value.toLowerCase()), 500);
  };

  return (
    <div className={dark ? "searchbar-dark" : "searchbar"}>
      <BiSearch />
      <input
        className={dark ? "input-dark" : "input"}
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Searchbar;
