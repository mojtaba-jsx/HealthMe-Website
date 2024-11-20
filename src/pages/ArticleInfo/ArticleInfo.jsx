import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ArticleInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
function ArticleInfo() {
  const { id } = useParams();

  const [articleInfo, setArticleInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/articles?id=${id}`)
      .then((res) => res.json())
      .then((articleInfo) => {
        setArticleInfo(articleInfo);
      });
  }, []);
  console.log(articleInfo);

  return (
    <>
      <div className="article-info">
        <div className="container">
          <Navbar />

          {articleInfo.map((article) => (
            <div className="article-info__wrapper">
              <div className="article-info__top">
                <img
                  src={article.image}
                  alt="article"
                  className="article-info__top-image"
                />
                <div className="article-info__top__texts">
                  <span className="article-info__top__texts-category">
                    # سلامتی
                  </span>
                  <h1 className="article-info__top__texts-title">
                    <FaPencilAlt
                      className=""
                      article-info__top__texts-title-icon
                    />
                    {article.title}
                  </h1>
                  <span className="article-info__top__texts-date">
                    <MdOutlineCalendarMonth className="article-info__top__texts-date-icon" />
                    {article.releaseDate}
                  </span>
                  <span className="article-info__top__texts-time">
                    <IoMdTime className="article-info__top__texts-time-icon" />
                    زمان مطالعه : {article.readTime} دقیقه
                  </span>
                </div>
              </div>

              <div className="article-info__bottom">
                <p className="article-info__bottom-text">{article.body}</p>
              </div>
            </div>
          ))}



          <div className="article-info__share">
            <div className="article-info__share__left">
              از مقاله خوشت اومد ؟ برای دوستانت بفرست
              <FaRegShareSquare className="article-info__share__left-icon" />
            </div>

            <div className="article-info__share__right">
              <Link to={"https://telegram.org/"}>
                <FaTelegram className="article-info__share__right-icon telegram" />
              </Link>
              <Link to={"https://twitter.com"}>
                <FaSquareXTwitter className="article-info__share__right-icon x" />
              </Link>
              <Link to={"https://www.linkedin.com"}>
                <FaLinkedin className="article-info__share__right-icon linkedin" />
              </Link>
            </div>
          </div>

          <div className="articles__add-comment">
            <form className="articles__add-comment__form">
              <h3 className="articles__add-comment__form__title">
                ثبت نظر
                <FaPen className="articles__add-comment__form__title-icon" />
              </h3>
              <label className="articles__add-comment__form__name">
                نام و نام خانوادگی :
                <input
                  type="text"
                  className="articles__add-comment__form__name-input"
                />
              </label>
              <label className="articles__add-comment__form__email">
                ایمیل :
                <input
                  type="email"
                  className="articles__add-comment__form__email-input"
                />
              </label>
              <textarea
                placeholder="متن نظر را وارد کنید ..."
                className="articles__add-comment__form__text"
              ></textarea>
              <button className="articles__add-comment__form__btn">
                ثبت نظر
                <IoCheckboxOutline className="articles__add-comment__form__btn-icon" />
              </button>
            </form>
          </div>

          <div className="articles__comments">
            <h2 className="articles__comments__title">
              نظرات
              <FaRegComment className="articles__comments__title-icon" />
            </h2>
            <div className="articles__comment">
              <span className="articles__comment__name">
                <FaRegUser className="articles__comment__name-icon" />
                یوزر جدید
              </span>
              <p className="articles__comment-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleInfo;
