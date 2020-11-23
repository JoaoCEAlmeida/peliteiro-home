import React from "react";

import "./index.css";

const StayWithUs = () => {
  return (
    <div className="stay__with__us">
      <img
        className="stay__with__us__image"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
        src={"https://static.educalingo.com/img/en/800/sunset.jpg"}
        alt=""
      />
      <div className="stay__with__us__text">
        <p>STAY WITH US</p>
        <h4>EXPLORE NATURE!</h4>
      </div>
    </div>
  );
};

export default StayWithUs;
