import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebar-friend">
      <img src={user.profilePicture} alt="" className="sidebar-friend-img" />
      <span className="siderbar-friend-name">{user.username}</span>
    </li>
  );
}
