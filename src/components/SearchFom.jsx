import { useState } from "react";
import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";
import { addFilter } from "../features/filters/filtersSlice";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const [searchKeyWord, SetSearchKeyWord] = useState("");
  const dispatch = useDispatch();
  function SearchIcon() {
    return (
      <IconContext.Provider
        value={{ color: "#ffffff", size: "20px", cursior: "pointer" }}
      >
        <div
          onClick={() => {
            let key = "q";
            const payload = {
              key: key,
              selectedValue: searchKeyWord,
            };
            dispatch(addFilter(payload));
          }}
        >
          <FiSearch />
        </div>
      </IconContext.Provider>
    );
  }
  return (
    <div className="searchForm-container">
      <input
        placeholder="search content"
        onChange={(e) => SetSearchKeyWord(e.target.value)}
      ></input>
      <button>{SearchIcon()}</button>
    </div>
  );
};

export default SearchForm;
