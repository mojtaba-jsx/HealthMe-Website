import React, { useState } from "react";
import "./Index.css";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import MainFeatures from "../../components/MainFeatures/MainFeatures";
import LastArticles from "../../components/LastArticles/LastArticles";
import HealthUp from "../../components/HealthUp/HealthUp";
import Footer from "../../components/Footer/Footer";
function Index() {
  const [MainFeatureInfos, setMainFeatureInfos] = useState([
    {
      id: 1,
      title: "به راحتی BMI خود را محاسبه کنید",
      text: "شاخص توده بدنی یا بی‌ام‌آی (به انگلیسی: body mass index، مخفف BMI) سنجشی آماری برای مقایسه وزن و قد یک فرد است. در واقع این سنجش میزان چاقی را اندازه‌گیری نمی‌کند بلکه ابزاری مناسب است تا سلامت وزن فرد با توجه به قدش تخمین زده شود. این شاخص در بین سال‌های ۱۸۳۰ تا ۱۸۵۰ توسط آدولف کوتله دانشمند بلژیکی ابداع شد",
      image: "./images/bmi-feature.png",
      flex: "row",
      icon: "GiBodyBalance",
      featurePath: "/bmi",
      featureBtnText: "محاسبه BMI",
    },
    {
      id: 2,
      title: "BMR بدن خود را در چند ثانیه بسنجید",
      text: "تا به حال به این فکرده‌اید که بدن شما بدون هیچ تلاش آگاهانه‌ای نیز نیاز به سوزاندن انرژی دارد. هنگامی که تلویزیون نگاه می‌کنید یا زمانی که با تلفن صحبت می‌کنید. حتی وقتی پلک می‌زنید و انگشت خود را تکان می‌دهید، بدن مدام در حال سوزاندن انرژی است. به این میزان کالری که بدن برای حفظ اعمال پایه مصرف می‌کند، BMR یا Basal Metabolic Rate می‌گویند.",
      image: "./images/bmr-feature.png",
      flex: "row-reverse",
      icon: "IoBodyOutline",
      featurePath: "/bmr",
      featureBtnText: "محاسبه BMR",
    },
    {
      id: 2,
      title: "چقدر آب برای بدن کافی است ؟ ",
      text: "همان طور که می دانید ۶۰ درصد از بدن هر انسانی را آب تشکیل داده است، این نشان دهنده این است که آب کافی نقش بسیار مهمی را در سلامتی بدن ایفا می کند ، بعد از اکسیژن آب دومین ماده حیاتی بدن است که بدن بدون آن دوام نمی آورد و منجر به مرگ انسان خواهد شد پس کمبود این ماده حیاتی می تواند سلامتی و زندگی شما را به خطر بیاندازد. بله!!",
      image: "./images/water.png",
      flex: "row",
      icon: "IoBodyOutline",
      featurePath: "/water",
      featureBtnText: "محاسبه آب",
    },
  ]);

  return (
    <>
      <div className="home-page">
        <div className="container">
          <Navbar />
          <Landing />
          {MainFeatureInfos.map((info) => (
            <MainFeatures
              key={info.id}
              title={info.title}
              text={info.text}
              image={info.image}
              featurePath={info.featurePath}
              featureBtnText={info.featureBtnText}
              flex={info.flex}
            />
          ))}
          <LastArticles />
        </div>
        <HealthUp />
        <Footer />
      </div>
    </>
  );
}

export default Index;
