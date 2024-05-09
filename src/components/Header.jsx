import { IconContext } from "react-icons";
import SearchForm from "./SearchFom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useWindowSize } from "../utiles/useWinowsSize";

const Header = () => {
  function SearchIcon() {
    return (
      <IconContext.Provider
        value={{ color: "#ffffff", size: "20px", cursior: "pointer" }}
      >
        <div
          onClick={() => {
            setSearchBarDrawerShow(!searchBarDrawerShow);
          }}
        >
          <FiSearch />
        </div>
      </IconContext.Provider>
    );
  }
  const [searchBarDrawerShow, setSearchBarDrawerShow] = useState(null);
  const { width: windowWidth } = useWindowSize();

  function CloseIcon() {
    return (
      <IconContext.Provider
        value={{ color: "#ffffff", size: "30px", cursior: "pointer" }}
      >
        <div
          onClick={() => {
            setSearchBarDrawerShow(!searchBarDrawerShow);
          }}
        >
          <IoMdClose />
        </div>
      </IconContext.Provider>
    );
  }
  return (
    <div className="header-container">
      <h3>Rasool News</h3>
      {windowWidth > 768 && <SearchForm />}
      <div className="MobileHeaderIcons-container">{SearchIcon()}</div>
      {searchBarDrawerShow && (
        <div className="searchBar-drawer">
          {CloseIcon()}
          <SearchForm />
        </div>
      )}
    </div>
  );
};

export default Header;
