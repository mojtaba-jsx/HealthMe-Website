//  Modules Import
import React from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";
//  Icons Import
import LandingHeatIcon from "./LandingHeatIcon";
function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landing__right">
          <span className="landing__right-badge">
            #سلامتی مهمه
            <LandingHeatIcon className="landing__right-badg-icon" />
          </span>
          <h1 className="landing__right-title">
            <Typewriter
              options={{
                strings: ["با مراقبت از خود، آینده‌ای سالم‌تر بسازید"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                pauseFor: 2000,
              }}
            />
          </h1>
          <p className="landing__right-text">
            با انجام تست های
            <span className="landing__right-text-word">BMR</span> و
            <span className="landing__right-text-word">BMI</span> و
            <span className="landing__right-text-word">آب مورد نیاز </span>و
            مقالات سلامتی بدن گامی کوچک در جهت بهبود سلامتی خود بردارید.
          </p>
        </div>

        <div className="landing__left">
          <img
            src="https://s8.uupload.ir/files/landing_3ixe.png"
            alt="Loading ..."
            className="landing__left-image"
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
