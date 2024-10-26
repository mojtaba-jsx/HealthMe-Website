import React from "react";
import "./Articles.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaTh, FaThList } from "react-icons/fa";
import { RiHealthBookLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
function Articles() {
  return (
    <>
      <div className="articles">
        <div className="container">
          <Navbar />
          <section className="articles-wrapper">
            <h1 className="articles-wrapper__title">
              مقالات
              <RiHealthBookLine className="articles-wrapper__title-icon" />
            </h1>
            <section className="articles-wrapper__menu">
              <div className="articles-wrapper__menu__category">
                دسته بندی :
                <select className="articles-wrapper__menu__category-select">
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="food"
                  >
                    تغذیه سالم
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="workout"
                  >
                    ورزش و تندرستی
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="health"
                  >
                    بیماری ها
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="mental"
                  >
                    سلامت روان
                  </option>
                </select>
              </div>

              <div className="articles-wrapper__menu__number">
                تعداد مقاله های نمایش داده شده:
                <input
                  type="number"
                  className="articles-wrapper__menu__number-input"
                />
              </div>

              <div className="articles-wrapper__menu__box-model">
                نحوه ی نمایش نقالات :
                <FaTh className="articles-wrapper__menu__box-model-icon" />
                <FaThList className="articles-wrapper__menu__box-model-icon" />
              </div>
            </section>

            <section className="articles-boxes">
              <div className="articles-box">
                <div className="articles-box__right">
                  <img
                    src="./images/last-article.png"
                    alt="article"
                    className="articles-box__right-image"
                  />
                </div>

                <div className="articles-box__left">
                  <h2 className="articles-box__left-title">
                    چرا مصرف سبزیجات به سلامتی کمک می کند ؟
                  </h2>
                  <p className="articles-box__left-text">
                 ...   استفاده از سبزیجات به بهبود سلامتی کمک زیادی می کند و
                  </p>
                    <Link className="articles-box__left__text-link">
                      مطالعه بیشتر ...
                      <FaRegEye className="articles-box__left__text-link-icon" />
                    </Link>
                  <span className="articles-box__left-date">
                    تاریخ انتشار : 
                    20/2/1402
                  </span>
                </div>
              </div>
              <div className="articles-box">
                <div className="articles-box__right">
                  <img
                    src="./images/last-article.png"
                    alt="article"
                    className="articles-box__right-image"
                  />
                </div>

                <div className="articles-box__left">
                  <h2 className="articles-box__left-title">
                    چرا مصرف سبزیجات به سلامتی کمک می کند ؟
                  </h2>
                  <p className="articles-box__left-text">
                 ...   استفاده از سبزیجات به بهبود سلامتی کمک زیادی می کند و
                  </p>
                    <Link className="articles-box__left__text-link">
                      مطالعه بیشتر ...
                      <FaRegEye className="articles-box__left__text-link-icon" />
                    </Link>
                  <span className="articles-box__left-date">
                    تاریخ انتشار : 
                    20/2/1402
                  </span>
                </div>
              </div>
              <div className="articles-box">
                <div className="articles-box__right">
                  <img
                    src="./images/last-article.png"
                    alt="article"
                    className="articles-box__right-image"
                  />
                </div>

                <div className="articles-box__left">
                  <h2 className="articles-box__left-title">
                    چرا مصرف سبزیجات به سلامتی کمک می کند ؟
                  </h2>
                  <p className="articles-box__left-text">
                 ...   استفاده از سبزیجات به بهبود سلامتی کمک زیادی می کند و
                  </p>
                    <Link className="articles-box__left__text-link">
                      مطالعه بیشتر ...
                      <FaRegEye className="articles-box__left__text-link-icon" />
                    </Link>
                  <span className="articles-box__left-date">
                    تاریخ انتشار : 
                    20/2/1402
                  </span>
                </div>
              </div>
              <div className="articles-box">
                <div className="articles-box__right">
                  <img
                    src="./images/last-article.png"
                    alt="article"
                    className="articles-box__right-image"
                  />
                </div>

                <div className="articles-box__left">
                  <h2 className="articles-box__left-title">
                    چرا مصرف سبزیجات به سلامتی کمک می کند ؟
                  </h2>
                  <p className="articles-box__left-text">
                 ...   استفاده از سبزیجات به بهبود سلامتی کمک زیادی می کند و
                  </p>
                    <Link className="articles-box__left__text-link">
                      مطالعه بیشتر ...
                      <FaRegEye className="articles-box__left__text-link-icon" />
                    </Link>
                  <span className="articles-box__left-date">
                    تاریخ انتشار : 
                    20/2/1402
                  </span>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default Articles;
