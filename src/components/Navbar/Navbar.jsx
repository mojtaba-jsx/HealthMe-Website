import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import HealthIcon from "../HealthIcon/HealthIcon";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Logo />
          منِ سلامت
          <HealthIcon />
        </div>

        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link to={"/"}>صفحه اصلی</Link>
          </li>

          <li className="navbar__list__item">
            <Link to={"/articles"}>مقالات</Link>
          </li>

          <li className="navbar__list__item">
            <Link to={"/bmi"}>محاسبه BMI </Link>
          </li>

          <li className="navbar__list__item">
            <Link to={"/bmr"}> محاسبه BMR</Link>
          </li>

          <li className="navbar__list__item">
            <Link to={"/water"}> محاسبه آب مورد نیاز </Link>
          </li>

          <li className="navbar__list__item">
            <Link to={"/about-us"}>ارتباط با ما </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
