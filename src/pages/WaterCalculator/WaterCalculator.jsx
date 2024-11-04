import React from "react";
import "./WaterCalculator.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function WaterCalculator() {
  return (
    <>
      <div className="water-calculator">
        <div className="container">
          <Navbar />
          <div className="water-calculator__info">
            <h1 className="water-calculator__info-title">
              محاسبه کننده آب مورد نیاز بدن
            </h1>
            <h2 className="water-calculator__info-subtitle">
              چه میزان آب و مایعات در طول روز بنوشیم؟
            </h2>
            <p className="water-calculator__info-text">
              این سوال با اینکه بسیار ساده به نظر می رسد اما پاسخ آن به همین
              راحتی نیست، هیچ فرمول خاصی وجود ندارد که برای همه بدن ها و یا برای
              همه افراد قابل استناد باشد و همه بتوانند از آن پیروی کنند اما با
              دانستن بیشتر در مورد میزان نیاز بدن به آب ، میزان مصرفی را تخمین
              بزنیم.هر سلول و ارگان در بدن ما برای اینکه بتواند به درستی کار کند
              نیاز به آب دارد، آب مایعی حیاتی در بدن ما می باشد .
            </p>
            <img
              src="./images/water-info.png"
              alt="water"
              className="water-calculator__info-image"
            />
            <form className="water-calculator__form">
              <label className="water-calculator__form-label">
                وزن (کیلوگرم):
                <input
                  type="number"
                  value={80}
                  className="water-calculator__form-input"
                />
              </label>

              <label className="water-calculator__form-label">
                سن:
                <input
                  type="number"
                  value={30}
                  className="water-calculator__form-input"
                />
              </label>

              <label className="water-calculator__form-label">
                جنسیت:
                <select className="water-calculator__form-select">
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
              </label>

              <label className="water-calculator__form-label">
                سطح فعالیت:
                <select className="water-calculator__form-select">
                  <option value="low">کم</option>
                  <option value="medium">متوسط</option>
                  <option value="high">زیاد</option>
                </select>
              </label>

              <label className="water-calculator__form-label">
                شرایط آب و هوایی:
                <select className="water-calculator__form-select">
                  <option value="hot">گرم</option>
                  <option value="temperate">معتدل</option>
                  <option value="cold">سرد</option>
                </select>
              </label>

              <button className="water-calculator__btn">محاسبه</button>
              <span className="water-calculator__result">
                میزان آب مورد نیاز شما برابر است با :
                <span className="water-calculator__result-value">40</span>
              </span>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WaterCalculator;
