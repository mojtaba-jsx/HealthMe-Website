import React from "react";
import { Link } from "react-router-dom";
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
function ArticleInfo() {
  return (
    <>
      <div className="article-info">
        <div className="container">
          <Navbar />
          <div className="article-info__top">
            <img
              src="/images/water.jpg"
              alt="article"
              className="article-info__top-image"
            />
            <div className="article-info__top__texts">
              <span className="article-info__top__texts-category">#سلامتی</span>
              <h1 className="article-info__top__texts-title">
                <FaPencilAlt className=""article-info__top__texts-title-icon />
                چرا باید به اندازه کافی در طول روز آب بنوشیم ؟
              </h1>
              <span className="article-info__top__texts-date">
                <MdOutlineCalendarMonth className="article-info__top__texts-date-icon" />
                تاریخ انتشار : 22 مهر 1403
              </span>
              <span className="article-info__top__texts-time">
                <IoMdTime className="article-info__top__texts-time-icon" />
                زمان مطالعه : 10 دقیقه
              </span>
            </div>
          </div>

          <div className="article-info__bottom">
            <p className="article-info__bottom-text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="article-info__share">
            <div className="article-info__share__left">
              از مقاله خوشت اومد ؟ برای دوستانت بفرست
              <FaRegShareSquare  className="article-info__share__left-icon" />
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleInfo;
