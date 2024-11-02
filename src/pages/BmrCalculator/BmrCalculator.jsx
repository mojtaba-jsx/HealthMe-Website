import React from "react";
import "./BmrCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
function BmrCalculator() {
  return (
    <>
      <div className="bmr">
        <div className="container">
          <Navbar />
          <div className="bmr-main">
            <h1 className="bmr-title">محاسبه BMR</h1>
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
              <div className="bmr__formula">
                <span className="bmr__formula-title">بانوان</span>
                <span className="bmr__formula-text">
                  ۴۴۷/۵۹۳ + (۴/۳۳۰ x سن) – (x ۹/۲۴۷ وزن به کیلوگرم) + (۳/۰۹۸ x
                  قد به سانتی متر) = BMR
                </span>
                <span className="bmr__formula-title">آقایان</span>
                <span className="bmr__formula-text">
                  ۸۸/۳۶۲ + (۵/۶۷۷ x سن) – (x ۱۳/۳۹۷ وزن به کیلوگرم) + (۴/۷۹۹ x
                  قد به سانتی‌متر) = BMR
                </span>
              </div>
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
              <p className="bmr__info-text">
                EAR (Estimated Average Requirement) = PAL * BMR
              </p>
            </div>

            <div className="bmr__inputs">
              {/* ! Row1 */}
              <div className="bmr__inputs__row1">
                <div className="bmr__inputs__row1-col1">
                  <label className="bmr__inputs__row1-col1-label">جنسیت</label>
                  <select className="bmr__inputs__row1-col1-gender">
                    <option value="man">مرد</option>
                    <option value="woman">زن</option>
                  </select>
                </div>

                <div className="bmr__inputs__row1-col2">
                  <label className="bmr__inputs__row1-col2-label">
                    وزن به کیلوگرم
                  </label>
                  <input
                    type="number"
                    className="bmr__inputs__row1-col2-weight"
                    value={30}
                  />
                </div>
              </div>
              {/* ! Row2 */}
              <div className="bmr__inputs__row2">
                <div className="bmr__inputs__row2-col1">
                  <label className="bmr__inputs__row2-col1-label">سن</label>
                  <input type="number" className="bmr__inputs__row2-col1-age" />
                </div>

                <div className="bmr__inputs__row2-col2">
                  <label className="bmr__inputs__row2-col2-label">
                    قد به سانتی متر
                  </label>
                  <input
                    type="number"
                    className="bmr__inputs__row2-col2-height"
                  />
                </div>
              </div>
              {/* ! Row3 */}
              <div className="bmr__inputs__row3">
                <label htmlFor="" className="bmr__inputs__row3-label">
                  میزان فعالیت
                </label>
                <select className="bmr__inputs__row3-select">
                  <option value="1/2">نشسته (بدون ورزش و ورزش خیلی کم)</option>

                  <option value="1/3">فعالیت کم (1 الی 3 ساعت در هفته)</option>

                  <option value="1/4">
                    فعالیت متوسط (3 الی 5 ساعت در هفته)
                  </option>

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
        </div>
      </div>
    </>
  );
}

export default BmrCalculator;
