import React from "react";
import "./BmiCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GiBodyBalance } from "react-icons/gi";
function BmiCalculator() {
  return (
    <>
      <div className="bmi">
        <div className="container">
          <Navbar />
          <h1 className="bmi__title">
            محاسبه BMI
            <GiBodyBalance />
          </h1>
          <div className="bmi__info">
            <h2 className="bmi__info-title">BMI چیست ؟</h2>
            <p className="bmi__info-text">
              شاخص توده بدنی یا بی‌ام‌آی (به انگلیسی: body mass index، مخفف BMI)
              سنجشی آماری برای مقایسه وزن و قد یک فرد است. در واقع این سنجش
              میزان چاقی را اندازه‌گیری نمی‌کند بلکه ابزاری مناسب است تا سلامت
              وزن فرد با توجه به قدش تخمین زده شود. این شاخص در بین سال‌های ۱۸۳۰
              تا ۱۸۵۰ توسط آدولف کوتله دانشمند بلژیکی ابداع شد. نحوه محاسبه آن
              بسیار ساده است و در بسیاری جاها برای مشخص کردن بیش‌وزنی و کم‌وزنی
              استفاده می‌شود. شاخص توده بدنی از طریق تقسیم وزن فرد به کیلوگرم بر
              توان دوم (x²) قدش به متر بدست می‌آید و فرمول محاسبه آن در سیستم
              متریک چنین است:
            </p>
            <img
              src="./images/bmi-formula.png"
              alt="bmi"
              className="bmi__info-formula-img"
            />
          </div>

          <div className="bmi__logic">
            <img
              src="./images/BMI-1.png"
              alt="bmi"
              className="bmi__logic-img"
            />
            <div className="bmi__logic__inputs">
              <div className="bmi__logic__inputs__height">
                <label className="bmi__logic__inputs__height-label">
                  قد (متر)
                </label>
                <input
                  type="number"
                  className="bmi__logic__inputs__height-input"
                  value={194}
                />
              </div>

              <div className="bmi__logic__inputs__weight">
                <label className="bmi__logic__inputs__weight-label">
                  وزن (کیلوگرم)
                </label>
                <input
                  type="number"
                  className="bmi__logic__inputs__weight-input"
                  value={80}
                />
              </div>

              <button className="bmi__logic__inputs-btn">محاسبه BMI </button>
            </div>

            <div className="bmi__logic-result">
              <span className="bmi__logic-result-text">
                شاخص توده بدنی شما برابر است با :
                <span className="bmi__logic-result-number">14</span>
              </span>

              <span className="bmi__logic-result-notif">
                عدد به دست آمده را طبق جدول بالا برسی کنید
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BmiCalculator;
