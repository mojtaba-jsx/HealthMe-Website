// *: Modules Import
import React, { useState } from "react";
import "./BmrCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// *: Icons Import
import { IoBodyOutline } from "react-icons/io5";

function BmrCalculator() {
  const [formData, setFormData] = useState({
    gender: "man",
    weight: "",
    age: "",
    height: "",
    activityLevel: "",
  });
  const [bmr, setBmr] = useState(0);
  const [ear, setEar] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "activityLevel" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  // *: BMR Calculator
  const calculateBmr = () => {
    const { gender, weight, age, height, activityLevel } = formData;

    let calculatedBmr = 0;
    if (gender === "man") {
      calculatedBmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "woman") {
      calculatedBmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    const calculatedEar = calculatedBmr * activityLevel;

    setBmr(Math.round(calculatedBmr));
    setEar(Math.round(calculatedEar));
  };

  const isButtonDisabled = !(
    formData.weight &&
    formData.age &&
    formData.height &&
    formData.activityLevel
  );

  return (
    <>
      <div className="bmr">
        <div className="container">
          <Navbar />
          <div className="bmr-main">
            <h1 className="bmr-title">
              محاسبه BMR
              <IoBodyOutline />
            </h1>
            <div className="bmr__info">
              <h2 className="bmr__info-title">BMR چیست ؟</h2>
              <p className="bmr__info-text">
                متابولیسم چیست؟ متابولیسم به معنای میزان سوخت‌وساز است.
                سوخت‌وساز یعنی مقدار انرژی که بدن شما مصرف می‌کند. “BMR = basal
                metabolism rate” یا همان متابولیسم پایه هم به معنی تعداد کالری
                مورد نیاز بدن برای زنده ماندن و انجام فعالیت‌های پایه است. باید
                بدانید که بدن شما حتی هنگام استراحت، با انجام عملکردهای اساسی
                برای حفظ زندگی، کالری می‌سوزاند
              </p>
              <img
                src="./images/bmr.png"
                alt="bmr"
                className="bmr-main__formula"
              />
              <p className="bmr__info-text">
                اگر به دنبال به دست آوردن کالری مورد نیاز خود هستید، باید ضریب
                فعالیت‌تان را در نتیجه بی‌ام‌آر خود ضرب کنید. برای محاسبه این
                مورد باید ابتدا میزان فعالیت فیزیکی‌تان را مشخص کنید و سپس سراغ
                به دست آوردن کالری بروید. ضریب فعالیت فیزیکی یا همان PAL به صورت
                زیر است:
              </p>
              <ul className="bmr__info__list">
                <li className="bmr__info__item">
                  اگر عمدتا در حالت نشسته هستید: ۱/۲
                </li>
                <li className="bmr__info__item">
                  نسبتا فعال هستید (‌۱ تا ۲ بار تمرین در هفته): ۱/۳
                </li>
                <li className="bmr__info__item">
                  فعالیت متوسطی دارید ( ۲ تا ۳ بار تمرین در هفته): ۱/۴
                </li>
                <li className="bmr__info__item">
                  فعال هستید (بیش از ۴ جلسه تمرین در هفته): ۱/۵
                </li>
                <li className="bmr__info__item">
                  بسیار فعال هستید (ورزش سنگین روزانه): ۱/۷
                </li>
              </ul>
              <p className="bmr__info-text">
                همانطور که می‌بینید میزان کالری مورد نیاز روزانه‌تان از طریق
                فرمول زیر به دست می‌آید:
              </p>
              <p className="bmr__info-text bmr__info-text-formul">
                EAR (Estimated Average Requirement) = PAL * BMR
              </p>
            </div>

            <div className="bmr__inputs">
              <label className="bmr__inputs-label">جنسیت</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bmr__inputs-gender"
              >
                <option value="man">مرد</option>
                <option value="woman">زن</option>
              </select>
              <label className="bmr__inputs-label">وزن</label>
              <input
                min={0}
                placeholder="مقدار را به کیلوگرم وارد کنید "
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="bmr__inputs-weight"
              />
              <label className="bmr__inputs-label">سن</label>
              <input
                min={0}
                placeholder="چندسالته ؟"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="bmr__inputs-age"
              />
              <label className="bmr__inputs-label">قد</label>
              <input
                min={0}
                placeholder="مقدار را به سانتی متر وارد کنید"
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="bmr__inputs-height"
              />
              <label htmlFor="" className="bmr__inputs-label">
                میزان فعالیت
              </label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                className="bmr__inputs-select"
              >
                <option value="">انتخاب کنید</option>
                <option value={1.2}>نشسته (بدون ورزش و ورزش خیلی کم)</option>
                <option value={1.3}>فعالیت کم (1 الی 3 ساعت در هفته)</option>
                <option value={1.4}>فعالیت متوسط (3 الی 5 ساعت در هفته)</option>
                <option value={1.5}>بسیار فعال (6 الی 7 ساعت در هفته)</option>
                <option value={1.7}>
                  فعالیت بسیار بالا (فعالیت سخت ورزشی و کاری)
                </option>
              </select>
              <button
                className={`bmr__btn ${isButtonDisabled ? "disabled" : ""}`}
                onClick={calculateBmr}
                disabled={isButtonDisabled}
              >
                محاسبه BMR
              </button>
              <span className="bmr__result">
                میزان BMR شما :<span className="bmr__result-value">{bmr}</span>
              </span>
              <span className="bmr__result">
                کالری مورد نیاز روزانه شما :
                <span className="bmr__result-value">{ear}</span>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BmrCalculator;
