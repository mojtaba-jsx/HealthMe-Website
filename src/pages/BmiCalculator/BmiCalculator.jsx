import React, { useState } from "react";
import "./BmiCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GiBodyBalance } from "react-icons/gi";
function BmiCalculator() {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("?");

  const handleHeightChange = (e) => {
    setHeightValue(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeightValue(e.target.value);
  };

  const bmiCalculatorFunc = () => {
    let heightInMeters = heightValue / 100;

    let bmi = weightValue / (heightInMeters * heightInMeters);

    setBmiValue(bmi.toFixed(2));

    setHeightValue("");
    setWeightValue("");
  };

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
          </div>
          <div className="bmr__images">
            <img
              src="./images/bmi-formula.png"
              alt="bmi"
              className="bmr__images-formula-img"
            />
            <img
              src="./images/BMI-1.png"
              alt="bmi"
              className="bmr__images-img"
            />
          </div>

          <div className="bmi__logic">
            <div className="bmi__logic__inputs">
              <div className="bmi__logic__inputs__height">
                <label className="bmi__logic__inputs__height-label">
                  قد (سانتی متر)
                </label>
                <input
                  min="0"
                  placeholder="قد خود  را به سانتی متر وارد کنید "
                  type="number"
                  className="bmi__logic__inputs__height-input"
                  value={heightValue}
                  onChange={handleHeightChange}
                />
              </div>

              <div className="bmi__logic__inputs__weight">
                <label className="bmi__logic__inputs__weight-label">
                  وزن (کیلوگرم)
                </label>
                <input
                  min="0"
                  placeholder="وزن خود را به کیلو گرم وارد کنید "
                  type="number"
                  className="bmi__logic__inputs__weight-input"
                  value={weightValue}
                  onChange={handleWeightChange}
                />
              </div>

              <button
                className="bmi__logic__inputs-btn"
                onClick={bmiCalculatorFunc}
              >
                محاسبه BMI{" "}
              </button>
            </div>

            <div className="bmi__logic-result">
              <span className="bmi__logic-result-text">
                شاخص توده بدنی شما برابر است با :
                <span className="bmi__logic-result-number">{bmiValue}</span>
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
