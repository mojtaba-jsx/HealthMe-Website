import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactUs.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 2200, // مدت زمان انیمیشن‌ها به میلی‌ثانیه
      once: false, // فقط یکبار انیمیشن اجرا می‌شود
    });
  }, []);
  return (
    <>
      <div className="contact-us">
        <div className="container">
          <Navbar />
          <div className="contact-us__info">
            <div className="contact-us__info__right">
              <img
                data-aos="zoom-in"
                src="./images/contact-us.png"
                alt="ContactUs"
                className="contact-us__info__right-image"
              />
            </div>
            <div className="contact-us__info__left">
              <div className="contact-us__info__left__maninfo__place">
                <span className="contact-us__info__left__maninfo__place-title">
                  کجا هستیم ؟
                  <FaLocationDot className="contact-us__info__left__maninfo__place-icon" />
                </span>
                <p className="contact-us__info__left__maninfo__place-text">
                  استان اصفهان - شهرستان زیبا و خوش آب و هوای نطنز
                </p>
              </div>
              <div className="contact-us__info__left__socials">
                <Link
                  data-aos="fade-right"
                  to={"https://github.com/mojtaba-jsx"}
                  className="contact-us__info__left__socials-github"
                  target="_blank"
                >
                  <FaGithub className="contact-us__info__left__socials-github-icon" />
                </Link>

                <Link
                  data-aos="fade-right"
                  className="contact-us__info__left__socials-telegram"
                  to={"https://t.me/Mojtaba_jsx"}
                  target="_blank"
                >
                  <FaTelegram className="contact-us__info__left__socials-telegram-icon" />
                </Link>

                <Link
                  data-aos="fade-right"
                  to={"https://www.instagram.com/mojtaba.jsx"}
                  className="contact-us__info__left__socials-instagram"
                  target="_blank"
                >
                  <FaInstagram className="contact-us__info__left__socials-instagram-icon" />
                </Link>

                <Link
                  data-aos="fade-right"
                  to={"mailto:mojtaba.jsx@gmail.com"}
                  className="contact-us__info__left__socials-gmail"
                  target="_blank"
                >
                  <BiLogoGmail className="contact-us__info__left__socials-gmail-icon" />
                </Link>
              </div>
              <span className="contact-us__info__text">با ما همراه باشید </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
