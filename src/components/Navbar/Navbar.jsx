import React, { useRef } from "react";
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
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const mobileMenuRef = useRef(null);
  const showMobileMenu = () => {
    mobileMenuRef.current.style.right = "0";
  };
  const hideMobileMenu = () => {
    mobileMenuRef.current.style.right = "-100rem";
  };
  return (
    <>
      <div className="navbar">
        <button className="mobile-menu-btn" onClick={showMobileMenu}>
          <IoMenu className="mobile-menu-btn__icon" />
        </button>
        {/* ! Navbar Logo */}
        <Link to={"/"} className="navbar__logo">
          <Logo className="navbar__logo-icon" />
          <span className="navbar__logo-text gradien-2">منِ سلامت</span>
          <MdHealthAndSafety className="navbar__logo-health-icon" />
        </Link>
        {/* ! Navbar list */}
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
            <Link className="navbar__list__link">
              ابزار ها
              <IoIosArrowUp className="navbar__list__link-icon" />
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
            <Link className="navbar__list__link" to={"/contact-us"}>
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

        <div className="mobile-menu" ref={mobileMenuRef}>
          <button className="mobile-menu-close-btn" onClick={hideMobileMenu}>
            <IoClose className="mobile-menu-close-btn__icon" />
          </button>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <Link to={"/"} className="mobile-menu__list-link">
                صفحه اصلی
                <IoHomeOutline className="mobile-menu__list-link__icon" />
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to={"/articles"} className="mobile-menu__list-link">
                مقالات
                <MdOutlineArticle className="mobile-menu__list-link__icon" />
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to={"/bmi"} className="mobile-menu__list-link">
                محاسبه BMI
                <GiBodyBalance className="mobile-menu__list-link__icon" />
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to={"/bmr"} className="mobile-menu__list-link">
                محاسبه BMR
                <IoBodyOutline className="mobile-menu__list-link__icon" />
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to={"/water"} className="mobile-menu__list-link">
                محاسبه آب مورد نیاز
                <GiWaterBottle className="mobile-menu__list-link__icon" />
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to={"/contact-us"} className="mobile-menu__list-link">
                ارتباط با ما
                <MdConnectWithoutContact className="mobile-menu__list-link__icon" />
              </Link>
            </li>

            <li className="mobile-menu__list-item">
              <Link to={"/about-us"} className="mobile-menu__list-link">
                درباره ما
                <RiFileInfoLine className="mobile-menu__list-link__icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
