// *: Modules Import
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../Logo/Logo";
// *: Icons Import
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
      // *: Footer Section
      <div className="footer">
        <div className="footer__row1">
          <div className="footer__logo">
            <Logo className="footer__logo-icon" />
            <span className="footer__logo-text gradien-2">منِ سلامت</span>
            <MdHealthAndSafety className="footer__logo-health-icon" />
          </div>
          <p className="footer__row1-text">
            سلامتی و تندرسی را بهبود بخشید.
            <TiTick className="footer__row1-text-icon" />
          </p>
        </div>

        <div className="footer__row2">
          <span className="footer__row2-title">صفحات</span>
          <ul className="footer__row2-list">
            <li className="footer__row2-list__item">
              <Link to={"/"} className="footer__row2-list__link">
                صفحه اصلی
              </Link>
            </li>
            <li className="footer__row2-list__item">
              <Link to={"/articles"} className="footer__row2-list__link">
                مقالات
              </Link>
            </li>
            <li className="footer__row2-list__item">
              <Link to={"/contact-us"} className="footer__row2-list__link">
                ارتباط با ما
              </Link>
            </li>
            <li className="footer__row2-list__item">
              <Link to={"/about-us"} className="footer__row2-list__link">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__row3">
          <span className="footer__row3-title">ابزار ها</span>
          <ul className="footer__row3-list">
            <li className="footer__row3-list__item">
              <Link to={"/bmi"} className="footer__row3-list__link">
                {" "}
                محاسبه BMI
              </Link>
            </li>
            <li className="footer__row3-list__item">
              <Link to={"/bmr"} className="footer__row3-list__link">
                محاسبه BMR
              </Link>
            </li>
            <li className="footer__row3-list__item">
              <Link to={"/water"} className="footer__row3-list__link">
                {" "}
                محاسبه آب بدن
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__row4">
          <span className="footer__row4-title">ارتباط با من</span>
          <ul className="footer__row4-list">
            <li className="footer__row4-list__item">
              mojtaba.jsx@gmail.com
              <MdOutlineEmail className="footer__row4-list__item-icon" />
            </li>

            <li className="footer__row4-list__item">
              09218750654
              <MdLocalPhone className="footer__row4-list__item-icon" />
            </li>

            <li className="footer__row4-list__item">
              استان اصفهان - شهرستان زیبا و خوش آب و هوای نطنز
              <IoLocationOutline className="footer__row4-list__item-icon" />
            </li>
          </ul>
        </div>
      </div>
      // *: After Footer Section
      <div className="after-footer">
        <span className="after-footer__text">
          توسعه داده شده با
          <FaHeart className="after-footer__icon" />
          توسط
          <Link
            className="after-footer__link"
            to={"https://github.com/mojtaba-jsx"}
          >
            Mojtaba.JSX
            <FaGithub className="after-footer__link-icon" />
          </Link>
        </span>
      </div>
    </>
  );
}

export default Footer;
