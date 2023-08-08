import "./share.css";
import { MdPermMedia, MdLabelImportant } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="assets/person/1.jpeg"
            alt=""
            className="share-profile-img"
          />
          <input placeholder="What's on your mind?" className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <MdPermMedia
                style={{ color: "#EE6983" }}
                className="share-icon"
              />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <MdLabelImportant
                style={{ color: "#1687A7" }}
                className="share-icon"
              />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <IoLocationSharp
                style={{ color: "#1FAB89" }}
                className="share-icon"
              />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <BsEmojiLaughing
                style={{ color: "#FF9A00" }}
                className="share-icon"
              />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
}
