import React, { useState, useEffect } from "react";
import "./Articles.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaTh, FaThList } from "react-icons/fa";
import { RiHealthBookLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";
function Articles() {
  const [articlesData, setArticlesData] = useState([]);
  const [articleShowNumber, setArticleShowNumber] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false); // وضعیت لودینگ


  useEffect(() => {
    fetch(`http://localhost:3000/articles?category=${selectedCategory}`)
      .then((res) => res.json())
      .then((artilcles) => {
        setArticlesData(artilcles);
        setLoading(false); // غیرفعال کردن لودینگ پس از دریافت داده‌ها
      });
  }, [selectedCategory]);

  const changeValueHandler = (event) => {
    setArticleShowNumber(event.target.value);
  };

  const getShortBody = (text, maxLength = 100) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text; // اگر متن کوتاه‌تر از maxLength بود
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
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
                <select
                  className="articles-wrapper__menu__category-select"
                  onChange={handleCategoryChange}
                >
                  <option
                    className="articles-wrapper__menu__category-option"
                    value=""
                  >
                    همه
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="تغذیه"
                  >
                    تغذیه سالم
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="ورزش"
                  >
                    ورزش و تندرستی
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="بیماری"
                  >
                    بیماری ها
                  </option>
                  <option
                    className="articles-wrapper__menu__category-option"
                    value="سلامت روان"
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
                  value={articleShowNumber}
                  onChange={changeValueHandler}
                />
              </div>

              <div className="articles-wrapper__menu__box-model">
                نحوه ی نمایش نقالات :
                <FaTh className="articles-wrapper__menu__box-model-icon" />
                <FaThList className="articles-wrapper__menu__box-model-icon" />
              </div>
            </section>


            <section className="articles-boxes">
              {articlesData.map((article) => (
                <div className="articles-box" key={article.id}>
                  <div className="articles-box__right">
                    <img
                      src={article.image}
                      alt="article"
                      className="articles-box__right-image"
                    />
                  </div>

                  <div className="articles-box__left">
                    <h2 className="articles-box__left-title">
                      {article.title}
                    </h2>
                    <p className="articles-box__left-text">
                      {getShortBody(article.body)}
                    </p>
                    <Link className="articles-box__left__text-link">
                      مطالعه بیشتر ...
                      <FaRegEye className="articles-box__left__text-link-icon" />
                    </Link>
                    <span className="articles-box__left-date">
                      تاریخ انتشار : {article.releaseDate}
                    </span>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Articles;
