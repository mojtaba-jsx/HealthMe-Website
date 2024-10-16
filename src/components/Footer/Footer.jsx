import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../Logo/Logo";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__row1">
          <div className="footer__logo">
            <Logo className="footer__logo-icon" />
            <span className="footer__logo-text gradien-2">منِ سلامت</span>
            <MdHealthAndSafety className="footer__logo-health-icon" />
          </div>
          <p className="footer__row1-text">سلامتی و تندرسی را بهبود بخشید.</p>
        </div>

        <div className="footer__row2">
          <ul className="footer__row2-list">
            <li className="footer__row2-list__item">صفحات</li>
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
          <ul className="footer__row3-list">
            <li className="footer__row3-list__item">ابزار ها</li>
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
          <ul className="footer__row4-list">
            <li className="footer__row4-list__item">ارتباط با من</li>

            <li className="footer__row4-list__item">
              mojtaba.jsx@gmail.com
              <MdOutlineEmail className="footer__row4-list__item-icon" />
            </li>

            <li className="footer__row4-list__item">
              +989218750654
              <MdLocalPhone className="footer__row4-list__item-icon" />
            </li>

            <li className="footer__row4-list__item">
              استان اصفهان - شهرستان زیبا و خوش آب و هوای نطنز
              <IoLocationOutline className="footer__row4-list__item-icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
