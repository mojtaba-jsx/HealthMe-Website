import React from "react";
import { Link } from "react-router-dom";
import "./LastArticlesSlide.css";
import { IoIosArrowBack } from "react-icons/io";
function LastArticlesSlide() {
  return (
    <>
      <div className="last-articles-slide">
        <div className="last-articles-slide__top">
          <img
            src="./images/last-article.png"
            alt="article"
            className="last-articles-slide__top-image"
          />
        </div>
        <div className="last-articles-slide__bottom">
          <h2 className="last-articles-slide__bottom-title">
            جدیدترین تحقیق درباره ی لاغری
          </h2>
          <p className="last-articles-slide__bottom-text">
            امروزه تحقیقات جدید درباره ی سلامتی ولاغری منتشر شده که هر کدام
            نظریه های جدیدی را عنوان می کنند
          </p>
          <Link to={"/articles"} className="last-articles-slide__bottom__link">
            مطلالعه بیشتر
            <IoIosArrowBack className="last-articles-slide__bottom__link-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LastArticlesSlide;
