import React from "react";
import "./BMIFeature.css";
import { IoMdArrowRoundBack } from "react-icons/io";
function BMIFeature() {
  return (
    <>
      <div className="bmi-feature">
        <div className="bmi-feature__right">
          <img
            src="./images/bmi-feature.png"
            alt="bmi"
            className="bmi-feature__right-image"
          />
        </div>

        <div className="bmi-feature__left">
          <h1 className="bmi-feature__left-title gradien-2">
            {" "}
            به راحتی BMI خود را محاسبه کنید
          </h1>
          <p className="bmi-feature__left-text">
            شاخص توده بدنی یا بی‌ام‌آی (به انگلیسی: body mass index، مخفف BMI)
            سنجشی آماری برای مقایسه وزن و قد یک فرد است. در واقع این سنجش میزان
            چاقی را اندازه‌گیری نمی‌کند بلکه ابزاری مناسب است تا سلامت وزن فرد
            با توجه به قدش تخمین زده شود. این شاخص در بین سال‌های ۱۸۳۰ تا ۱۸۵۰
            توسط آدولف کوتله دانشمند بلژیکی ابداع شد
          </p>
          <button className="bmi-feature__left-btn">
            شروع کنید
            <IoMdArrowRoundBack className="bmi-feature__left-btn-icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BMIFeature;
