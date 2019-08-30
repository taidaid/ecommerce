import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styes.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <section
      className={`${size || ""} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <img
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
        alt="menu item background"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </section>
  );
};

export default withRouter(MenuItem);
