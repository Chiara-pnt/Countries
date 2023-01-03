import { BiSearch } from "react-icons/bi";
import { useStateContext } from "../context/ContextProvider";

const Searchbar = ({ query, setQuery }) => {
  const { dark } = useStateContext();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={dark ? "searchbar-dark" : "searchbar"}>
      <BiSearch />
      <input
        className={dark ? "input-dark" : "input"}
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Searchbar;
