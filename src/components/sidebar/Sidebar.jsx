import "./sidebar.css";
import {
  BsFillMortarboardFill,
  BsCalendarEvent,
  BsFillBookmarksFill,
  BsChatLeftDots,
} from "react-icons/bs";
import { MdWork, MdOutlineRssFeed } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegQuestionCircle, FaUsers } from "react-icons/fa";
import { Users } from "../../dummyData";
import CloseFriend from "../../components/closeFriends/CloseFriend";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <MdOutlineRssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <BsChatLeftDots className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chat</span>
          </li>
          <li className="sidebar-list-item">
            <AiOutlinePlayCircle className="sidebar-icon" />
            <span className="sidebar-list-item-text">Video</span>
          </li>
          <li className="sidebar-list-item">
            <FaUsers className="sidebar-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <BsFillBookmarksFill className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <FaRegQuestionCircle className="sidebar-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <MdWork className="sidebar-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <BsCalendarEvent className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <BsFillMortarboardFill className="sidebar-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
