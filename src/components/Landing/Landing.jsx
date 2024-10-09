import React from "react";
import "./Landing.css";
import LandingHeatIcon from "./LandingHeatIcon";
import { LuHeartPulse } from "react-icons/lu";
function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landing__right">
          <span className="landing__right-badge">
            #سلامتی مهمه
            <LandingHeatIcon />
          </span>
          <h1 className="landing__right-title">
            با مراقبت از خود، آینده‌ای سالم‌تر بسازید
          </h1>
          <p className="landing__right-text">
            با انجام تست های
            <span className="landing__right-text-word">BMR</span> و
            <span className="landing__right-text-word">BMI</span> و
            <span className="landing__right-text-word">آب مورد نیاز </span>
            بدن گامی کوچک در جهت بهبود سلامتی خود بردارید.
          </p>
        </div>

        <div className="landing__left">
          <img
            src="./images/Landing.png"
            alt=""
            className="landing__left-image"
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
