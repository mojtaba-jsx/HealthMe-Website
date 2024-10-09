import React from "react";
import "./Landing.css";
import LandingHeatIcon from './LandingHeatIcon'
function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landing__right">
            <span className="landing__right-badge">
                سلامتی مهمه 
                <LandingHeatIcon/>
            </span>
            <h1 className="landing__right-title">
            با مراقبت از خود، آینده‌ای سالم‌تر بسازید 
            </h1>
            <p className="landing__right-text">
                تست BMI و BMR  و آّ مورد نیاز بدن خود را بسنجید و با مقالات سلامتی ، گامی در جهت بهبود سلامت خود بردارید 
            </p>
        </div>

        <div className="landing__left">
            <img src="./images/Landing.png" alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Landing;
