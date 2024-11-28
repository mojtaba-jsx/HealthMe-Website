//  Modules Import
import React from "react";
import "./HealthUp.css";
//  Icons Import
import { FaRegSmile } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function HealthUp() {
  return (
    <>
      <div className="health-up">
        <div className="health-up__right">
          <img
            src="./images/health-up.png"
            alt="health"
            className="health-up__right-image"
          />
        </div>
        <div className="health-up__left">
          <h1 className="health-up__left-title">
            <Typewriter
              options={{
                strings: ["سالم زندگی کنیم"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                pauseFor: 2000,
              }}
            />
            <FaRegSmile className="health-up__left-title-icon" />
          </h1>
          <p className="health-up__left-text">
            امروزه توجه به سلامتی به امری مهم در تمامی جوامع تبدیل شده است.
          </p>
        </div>
      </div>
    </>
  );
}

export default HealthUp;
