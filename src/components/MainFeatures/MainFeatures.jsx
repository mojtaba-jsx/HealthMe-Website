// *: Modules Import
import React, { useEffect } from "react";
import "./MainFeatures.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// *: Icons Import
import { IoMdArrowRoundBack } from "react-icons/io";
function MainFeatures({
  title,
  text,
  image,
  flex,
  featurePath,
  featureBtnText,
}) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="main-feature" style={{ flexDirection: flex }}>
        <div className="main-feature__right">
          <img
            data-aos="fade-up"
            src={image}
            alt="main"
            className="main-feature__right-image"
          />
        </div>

        <div className="main-feature__left">
          <h1 className="main-feature__left-title gradien-2">{title}</h1>
          <p data-aos="fade-left" className="main-feature__left-text">
            {text}
          </p>
          <Link to={featurePath} className="main-feature__left-btn">
            {featureBtnText}
            <IoMdArrowRoundBack className="main-feature__left-btn-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainFeatures;
