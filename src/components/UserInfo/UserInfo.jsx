import React from "react";
import dots from "../../images/dots.svg";
import msn from "../../images/msn.svg";
import star from "../../images/star.svg";
import gps from "../../images/gps.svg";
import mail from "../../images/mail.svg";
import link from "../../images/link.svg";
import "./UserInfo.css";

const UserInfo = ({
  login,
  name,
  email,
  bio,
  avatar,
  followers,
  following,
  web,
  location,
}) => {
  return (
    <div className="user-container">
      <a href="mvst.co">
        <img src={avatar} alt="profile avatar" id="user-picture" />
      </a>
      <span className="full-name">{name}</span>
      <span className="user-name">{login}</span>
      <span className="user-bio">{bio}</span>

      <div className="buttons-user">
        <button className="btn-follow">Follow</button>
        <button className="btn-more">
          <img className="svgs" src={dots} alt="more" />
        </button>
      </div>

      <div className="follower-info">
        <a href="google.de" className="pos">
          <img className="svgs pos" src={msn} alt="" />
          <span className="amount">{followers}</span> followers
        </a>
        ·
        <a href="google.de" className="pos posl">
          <span className="amount">{following}</span> following
        </a>
        ·
        <a href="google.de" className="pos posl">
          <img className="svgs pos" src={star} alt="" />
          <span className="amount">22</span>
        </a>
      </div>

      <div className="user-contact">
        <span className="pos room">
          <img className="svgs pos " src={gps} alt="gps" />
          {location}
        </span>
        <span className="pos room">
          <img className="svgs pos" src={mail} alt="mail" />
          {email}
        </span>
        <span>
          <img className="svgs pos" src={link} alt="link" />
          {web}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
