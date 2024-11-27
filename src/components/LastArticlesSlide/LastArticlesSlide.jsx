// *: Modules Import
import React from "react";
import { Link } from "react-router-dom";
import "./LastArticlesSlide.css";
// *: Icons Import
import { IoIosArrowBack } from "react-icons/io";
function LastArticlesSlide({ title, image, body, id }) {
  return (
    <>
      <div className="last-articles-slide">
        <div className="last-articles-slide__top">
          <img
            src={image}
            alt="article"
            className="last-articles-slide__top-image"
          />
        </div>
        <div className="last-articles-slide__bottom">
          <h2 className="last-articles-slide__bottom-title">{title}</h2>
          <p className="last-articles-slide__bottom-text">{body}</p>
          <Link
            to={`/articles/articleInfo/${id}`}
            className="last-articles-slide__bottom__link"
          >
            مطلالعه بیشتر
            <IoIosArrowBack className="last-articles-slide__bottom__link-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LastArticlesSlide;
