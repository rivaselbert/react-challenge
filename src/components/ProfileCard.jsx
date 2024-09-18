import React from "react";
import "../styles/profile.css";
import userImage from "../assets/user.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <h3 className="header-title">Profile</h3>
      </div>
      <div className="user-profile">
        <div className="user-detail">
          <img src={userImage} alt="" />
          <h3 className="username">William Smith</h3>
          <span className="user-role">Software Engineer</span>
          <span className="user-biography">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
