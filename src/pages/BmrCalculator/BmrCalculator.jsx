import React from "react";
import "./BmrCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { IoBodyOutline } from "react-icons/io5";
function BmrCalculator() {
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
              <select className="bmr__inputs-gender">
                <option value="man">مرد</option>
                <option value="woman">زن</option>
              </select>
              <label className="bmr__inputs-label">وزن به کیلوگرم</label>
              <input type="number" className="bmr__inputs-weight" value={30} />
              <label className="bmr__inputs-label">سن</label>
              <input value={30} type="number" className="bmr__inputs-age" />
              <label className="bmr__inputs-label">قد به سانتی متر</label>
              <input type="number" value={30} className="bmr__inputs-height" />
              <label htmlFor="" className="bmr__inputs-label">
                میزان فعالیت
              </label>
              <select className="bmr__inputs-select">
                <option value="1/2">نشسته (بدون ورزش و ورزش خیلی کم)</option>

                <option value="1/3">فعالیت کم (1 الی 3 ساعت در هفته)</option>

                <option value="1/4">فعالیت متوسط (3 الی 5 ساعت در هفته)</option>

                <option value="1/5">بسیار فعال (6 الی 7 ساعت در هفته)</option>

                <option value="1/7">
                  فعالیت بسیار بالا (فعالیت سخت ورزشی و کاری)
                </option>
              </select>
              <button className="bmr__btn">محاسبه BMR</button>
              <span className="bmr__result">
                میزان BMR شما :<span className="bmr__result-value">30</span>
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
