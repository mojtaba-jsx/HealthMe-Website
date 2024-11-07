import React from "react";
import "./AboutUs.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <Navbar />

        <div className="about-us__info">
          <div className="about-us__info__texts">
            <h1 className="about-us__info__texts-title">درباره من سلامت</h1>
            <p className="about-us__info__texts-text">
              "من سلامت" یک وب‌سایت جامع برای کمک به بهبود سلامت و افزایش آگاهی
              شما درباره بدن و نیازهای روزانه‌تان است. در اینجا، می‌توانید از
              ابزارهای تخصصی مانند محاسبه BMR (میزان متابولیسم پایه)، BMI (شاخص
              توده بدنی) و نیاز روزانه به آب استفاده کنید تا بتوانید با درک بهتر
              از بدن خود، سبک زندگی سالم‌تری را دنبال کنید. همچنین، مجموعه‌ای از
              مقالات علمی و آموزشی درباره موضوعات مختلف سلامت، تغذیه، ورزش و سبک
              زندگی ارائه شده است تا شما را در مسیر سلامت همراهی کند. "من سلامت"
              با هدف دسترسی آسان به اطلاعات و ابزارهای مورد نیاز برای داشتن
              زندگی سالم‌تر ایجاد شده است.
            </p>
          </div>
          <div className="about-us__image">
            <img
              src="./images/about-us.png"
              alt="AboutUs"
              className="about-us__image-tag"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
