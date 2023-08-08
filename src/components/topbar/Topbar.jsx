import "./topbar.css";
import { BsSearch, BsChatLeftDots } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";

function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Connect</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <BsSearch className="search-icon" />
          <input
            placeholder="Lookout for your friends!"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link"></span>
          <span className="topbar-link"></span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <FaUserAlt className="topbar-icon" />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <BsChatLeftDots className="topbar-icon" />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <BiSolidBell className="topbar-icon" />
            <span className="topbar-icon-badge">3</span>
          </div>
        </div>
        <img src="assets/person/1.jpeg" alt="add img" className="topbar-img" />
      </div>
    </div>
  );
}

export default Topbar;
