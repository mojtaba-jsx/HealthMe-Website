import React from "react";
import "./LastArticles.css";
import LastArticlesSlide from "../LastArticlesSlide/LastArticlesSlide";
// ! Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function LastArticles() {
  return (
    <>
      <div className="last-articles">
        <h1 className="last-articles__title">آخرین مقالات</h1>
        <div className="last-articles__slider">
          <Swiper
          className="last-articles-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            autoHeight={true}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide">
                Slide 1
              </LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide">
                Slide 1
              </LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide">
                Slide 1
              </LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide">
                Slide 1
              </LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide">
                Slide 1
              </LastArticlesSlide>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
              <LastArticlesSlide className="custom-slide">
                Slide 1
              </LastArticlesSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default LastArticles;
