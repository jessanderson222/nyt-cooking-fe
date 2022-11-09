import { BsFillGearFill } from "react-icons/bs";
import SearchBar from "../SearchBar";
import logoRed from "../../images/logo-red.png";

const DesktopNav = () => {
  return (
    <div className="desktop-nav flex">
      <a className="logo-wrap" href="/">
        <img alt="logo" className="logo" src={logoRed}></img>
      </a>
      <SearchBar />
      <div className="width-100"></div>
      <div className="flex nav-buttons">
        <span className="navLabel bold">{"Thanksgiving".toUpperCase()}</span>
        <span className="navLabel bold">{"Grocery List".toUpperCase()}</span>
        <span className="recipe-box bold">{"Recipe Box".toUpperCase()}</span>
        <div className="account flex">
          <a className="margin-auto">
            <BsFillGearFill className="gear" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
