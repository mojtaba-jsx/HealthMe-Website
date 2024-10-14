import React from "react";
import "./LastArticles.css";
import LastArticlesSlide from "../LastArticlesSlide/LastArticlesSlide";
// ! Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function LastArticles() {
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
              // وقتی صفحه از 640px بیشتر می‌شود
              640: {
                slidesPerView: 1, // 2 اسلاید در هر نما
                spaceBetween: 20, // فاصله بین اسلایدها
              },
              // وقتی صفحه از 768px بیشتر می‌شود
              768: {
                slidesPerView: 3, // 3 اسلاید در هر نما
                spaceBetween: 30, // فاصله بین اسلایدها
              },
              // وقتی صفحه از 1024px بیشتر می‌شود
              1024: {
                slidesPerView: 4, // 4 اسلاید در هر نما
                spaceBetween: 40, // فاصله بین اسلایدها
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next", // اتصال دکمه‌های سفارشی
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide"></LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide"></LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide"></LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide"></LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide"></LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide"></LastArticlesSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default LastArticles;
