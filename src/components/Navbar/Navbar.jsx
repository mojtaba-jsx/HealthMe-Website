import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
// import HealthIcon from "../HealthIcon/HealthIcon";
import { MdHealthAndSafety } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { GiBodyBalance } from "react-icons/gi";
import { IoBodyOutline } from "react-icons/io5";
import { GiWaterBottle } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiFileInfoLine } from "react-icons/ri";
import { RiHealthBookFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Logo className="navbar__logo-icon" />
          <span className="navbar__logo-text gradien-2">منِ سلامت</span>
          <MdHealthAndSafety className="navbar__logo-health-icon" />
        </div>

        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link className="navbar__list__link" to={"/"}>
              صفحه اصلی
              <IoHomeOutline className="navbar__list__link-icon" />
            </Link>
          </li>

          <li className="navbar__list__item">
            <Link className="navbar__list__link" to={"/articles"}>
              مقالات
              <MdOutlineArticle className="navbar__list__link-icon" />
            </Link>
          </li>

          <li className="navbar__list__item  navbar__list__item-submenu">
            <Link className="navbar__list__link" to={"/articles"}>
              ابزار ها
              <IoIosArrowUp   className="navbar__list__link-icon" />
            </Link>
            <ul className="navbar__submenu">
              <li className="navbar__submenu__item">
                <Link className="navbar__submenu__link" to={"/bmi"}>
                  محاسبه BMI
                  <GiBodyBalance className="navbar__submenu__link-icon" />
                </Link>
              </li>

              <li className="navbar__submenu__item">
                <Link className="navbar__submenu__link" to={"/bmr"}>
                  محاسبه BMR
                  <IoBodyOutline className="navbar__submenu__link-icon" />
                </Link>
              </li>

              <li className="navbar__submenut__item">
                <Link className="navbar__submenu__link" to={"/water"}>
                  محاسبه آب مورد نیاز
                  <GiWaterBottle className="navbar__submenu__link-icon" />
                </Link>
              </li>
            </ul>
          </li>

          <li className="navbar__list__item">
            <Link className="navbar__list__link" to={"/about-us"}>
              ارتباط با ما
              <MdConnectWithoutContact className="navbar__list__link-icon" />
            </Link>
          </li>

          <li className="navbar__list__item">
          <Link className="navbar__list__link" to={"/about-us"}>
              درباره ما
              <RiFileInfoLine className="navbar__list__link-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
