import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="profile-cover-img"
              />
              <img
                src="assets/person/7.jpeg"
                alt=""
                className="profile-user-img"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Name</h4>
              <h4 className="profile-info-desc">Desc</h4>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
