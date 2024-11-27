// *: Modules Import
import React, { useEffect, useState } from "react";
import "./LastArticles.css";
import LastArticlesSlide from "../LastArticlesSlide/LastArticlesSlide";
// *: Swiper Js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// *: Icons Import
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function LastArticles() {
  // *: Get Articles Data Form Server
  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((res) => res.json())
      .then((articles) => {
        setArticlesData(articles);
      });
  }, []);

  const [articlesData, setArticlesData] = useState([]);
  console.log(articlesData);

  // *: Short Text For Show In Article Card
  const getShortBody = (text, maxLength = 100) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <div className="last-articles">
        <h1 className="last-articles__title">آخرین مقالات</h1>
        <div className="swiper-navigation">
          <div className="swiper-button-next">
            <IoIosArrowForward className="swiper-navigation-icon" />
          </div>
          <div className="swiper-button-prev">
            <IoIosArrowBack className="swiper-navigation-icon" />
          </div>
        </div>
        // *: LastArticles Slider Swiper
        <div className="last-articles__slider">
          <Swiper
            className="last-articles-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            autoHeight={true}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next", // اتصال دکمه‌های سفارشی
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {articlesData.slice(0, 5).map((article) => (
              <SwiperSlide key={article.id} className="custom-slide">
                <LastArticlesSlide
                  title={article.title}
                  image={article.image}
                  id={article.id}
                  body={getShortBody(article.body)}
                  className="custom-slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default LastArticles;
