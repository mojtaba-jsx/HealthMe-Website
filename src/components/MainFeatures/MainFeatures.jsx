import React from "react";
import "./MainFeatures.css";
import { IoMdArrowRoundBack } from "react-icons/io";

function MainFeatures({ title, text, image,flex }) {


  return (
    <>
      <div className="main-feature" style={{ flexDirection: flex }}>
        <div className="main-feature__right">
          <img src={image} alt="main" className="main-feature__right-image" />
        </div>

        <div className="main-feature__left">
          <h1 className="main-feature__left-title gradien-2">{title}</h1>
          <p className="main-feature__left-text">{text}</p>
          <button className="main-feature__left-btn">
            شروع کنید
            <IoMdArrowRoundBack className="main-feature__left-btn-icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default MainFeatures;
