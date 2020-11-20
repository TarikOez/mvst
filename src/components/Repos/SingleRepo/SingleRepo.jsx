import React from "react";
import star from "../../../images/star.svg";
import fork from "../../../images/fork.svg";
import "./SingleRepo.css";

function SingleRepo(props) {
  return (
    <div className="repo-container">
      <div className="infos">
        <h3>
          <a href="mvst.co" className="link-to-repo">
            {props.link}
          </a>
        </h3>
        <p className="fork-info">{props.forks}</p>
        <p className="desc-info">{props.desc}</p>

        <div className="code-info">
          <span className="pos1">
            <span className="lang-color"></span>
            {props.lang}
          </span>
          <a href="mvst.co" className="pos1">
            <img src={fork} alt="" className="svgs" />1
          </a>
          <span>{props.updates}</span>
        </div>
      </div>

      <div className="activity">
        <div>
          <button className="star-btn">
            <img src={star} alt="" className="svgs-star star-pos" />
            Star
          </button>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default SingleRepo;
