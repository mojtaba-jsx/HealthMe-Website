import React, { useState } from "react";
import "./WaterCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GiWaterBottle } from "react-icons/gi";

function WaterCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [climate, setClimate] = useState("");
  const [waterNeed, setWaterNeed] = useState(0);

  // بررسی اعتبار ورودی‌ها
  const isFormValid = () => {
    return (
      weight > 0 &&
      age > 0 &&
      gender !== "" &&
      activityLevel !== "" &&
      climate !== ""
    );
  };

  const calculateWaterIntake = () => {
    let baseWater = weight * 30; // 30 ml per kg

    // Adjust for activity level
    if (activityLevel === "medium") baseWater += 500;
    if (activityLevel === "high") baseWater += 1000;

    // Adjust for climate
    if (climate === "hot") baseWater += 1000;
    if (climate === "cold") baseWater -= 500;

    // Adjust for gender
    if (gender === "male") baseWater *= 1.1;

    // Adjust for age
    if (age < 18) baseWater *= 1.05;
    if (age > 60) baseWater *= 0.95;

    setWaterNeed(Math.round(baseWater)); // Round to nearest whole number
  };

  return (
    <>
      <div className="water-calculator">
        <div className="container">
          <Navbar />
          <div className="water-calculator__info">
            <h1 className="water-calculator__info-title">
              محاسبه کننده آب مورد نیاز بدن
              <GiWaterBottle />
            </h1>
            <h2 className="water-calculator__info-subtitle">
              چه میزان آب و مایعات در طول روز بنوشیم؟
            </h2>
            <p className="water-calculator__info-text">
              این سوال با اینکه بسیار ساده به نظر می رسد اما پاسخ آن به همین
              راحتی نیست، هیچ فرمول خاصی وجود ندارد که برای همه بدن ها و یا برای
              همه افراد قابل استناد باشد و همه بتوانند از آن پیروی کنند اما با
              دانستن بیشتر در مورد میزان نیاز بدن به آب، میزان مصرفی را تخمین
              بزنیم. هر سلول و ارگان در بدن ما برای اینکه بتواند به درستی کار
              کند نیاز به آب دارد، آب مایعی حیاتی در بدن ما می باشد.
            </p>
            <div className="water-calculator__wrapper">
              <img
                src="./images/water-info.png"
                alt="water"
                className="water-calculator__info-image"
              />
              <form
                className="water-calculator__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  calculateWaterIntake();
                }}
              >
                <label className="water-calculator__form-label">
                  وزن:
                  <input
                    min={0}
                    placeholder="مقدار وزرن خود را به کیلوگرم وارد کنید"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="water-calculator__form-input"
                  />
                </label>

                <label className="water-calculator__form-label">
                  سن:
                  <input
                    min={0}
                    placeholder="سن خود را وارد کنید"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="water-calculator__form-input"
                  />
                </label>

                <label className="water-calculator__form-label">
                  جنسیت:
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="water-calculator__form-select"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                </label>

                <label className="water-calculator__form-label">
                  سطح فعالیت:
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="water-calculator__form-select"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="low">کم</option>
                    <option value="medium">متوسط</option>
                    <option value="high">زیاد</option>
                  </select>
                </label>

                <label className="water-calculator__form-label">
                  شرایط آب و هوایی:
                  <select
                    value={climate}
                    onChange={(e) => setClimate(e.target.value)}
                    className="water-calculator__form-select"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="hot">گرم</option>
                    <option value="temperate">معتدل</option>
                    <option value="cold">سرد</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="water-calculator__btn"
                  disabled={!isFormValid()}
                >
                  محاسبه
                </button>
                <span className="water-calculator__result">
                  میزان آب مورد نیاز شما برابر است با:
                  <span className="water-calculator__result-value">
                    {waterNeed > 0 ? `${waterNeed} میلی‌لیتر` : "___"}
                  </span>
                </span>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WaterCalculator;
