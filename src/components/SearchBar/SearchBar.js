import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-wrap flex">
      <BsSearch className="magnify" />
      <form className="form width-100">
        <input
          className="search-input"
          placeholder="What would you like to cook?"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
