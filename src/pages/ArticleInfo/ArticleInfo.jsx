import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ArticleInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
//  Icons Import
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

function ArticleInfo() {
  const { id } = useParams();
  const [articleInfo, setArticleInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    username: "",
    email: "",
    text: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    //  Get Article Data By ID
    fetch(`https://health-me.liara.run/articles?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticleInfo(data);
      });
    //  Get Comments By Post ID
    fetch(`https://health-me.liara.run/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const commentToPost = {
      ...newComment,
      postId: id,
    };

    //  Send New Comment To Server
    fetch(`https://health-me.liara.run/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentToPost),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error posting comment");
        }
        return res.json();
      })
      .then((savedComment) => {
        // اضافه کردن کامنت جدید به آرایه کامنت‌ها بدون نیاز به رفرش صفحه
        setComments((prev) => [...prev, savedComment]);
        setNewComment({ username: "", email: "", text: "" });
      })
      .catch((err) => {
        console.error("Error posting comment:", err);
      });
  };

  //  Form Validation
  const isFormValid =
    newComment.username.trim() !== "" &&
    newComment.email.trim() !== "" &&
    newComment.text.trim() !== "";



  return (
    <>
      {loading ? (
        <div className="loader-articleinfo"></div>
      ) : (
        <div className="article-info">
          <div className="container">
            <Navbar />
            {articleInfo.map((article) => (
              <div className="article-info__wrapper" key={article.id}>
                <div className="article-info__top">
                  <img
                    src={article.image}
                    alt="article"
                    className="article-info__top-image"
                  />
                  <div className="article-info__top__texts">
                    <h1 className="article-info__top__texts-title">
                      <FaPencilAlt className="article-info__top__texts-title-icon" />
                      {article.title}
                    </h1>
                    <span className="article-info__top__texts-date">
                      <MdOutlineCalendarMonth className="article-info__top__texts-date-icon" />
                      {article.releaseDate}
                    </span>
                    <span className="article-info__top__texts-time">
                      <IoMdTime className="article-info__top__texts-time-icon" />
                      زمان مطالعه : {article.readTime} دقیقه
                    </span>
                    <span className="article-info__top__texts-category">
                      # {article.category}
                    </span>
                  </div>
                </div>

                <div className="article-info__bottom">
                  <p className="article-info__bottom-text">{article.body}</p>
                </div>
              </div>
            ))}

            <div className="article-info__share">
              <div className="article-info__share__left">
                از مقاله خوشت اومد ؟ برای دوستانت بفرست
                <FaRegShareSquare className="article-info__share__left-icon" />
              </div>

              <div className="article-info__share__right">
                <Link to={"https://telegram.org/"}>
                  <FaTelegram className="article-info__share__right-icon telegram" />
                </Link>
                <Link to={"https://twitter.com"}>
                  <FaSquareXTwitter className="article-info__share__right-icon x" />
                </Link>
                <Link to={"https://www.linkedin.com"}>
                  <FaLinkedin className="article-info__share__right-icon linkedin" />
                </Link>
              </div>
            </div>

            <div className="articles__add-comment">
              <form
                className="articles__add-comment__form"
                onSubmit={handleFormSubmit}
              >
                <h3 className="articles__add-comment__form__title">
                  ثبت نظر
                  <FaPen className="articles__add-comment__form__title-icon" />
                </h3>
                <label className="articles__add-comment__form__name">
                  نام و نام خانوادگی :
                  <input
                    placeholder="نام و نام خانوادگی خود را وارد کنید "
                    type="text"
                    name="username"
                    className="articles__add-comment__form__name-input"
                    value={newComment.username}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="articles__add-comment__form__email">
                  ایمیل :
                  <input
                    placeholder="ایمیل خود را وارد کنید"
                    type="email"
                    name="email"
                    className="articles__add-comment__form__email-input"
                    value={newComment.email}
                    onChange={handleInputChange}
                  />
                </label>
                <textarea
                  name="text"
                  placeholder="متن نظر را وارد کنید ..."
                  className="articles__add-comment__form__text"
                  value={newComment.text}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  className="articles__add-comment__form__btn"
                  disabled={!isFormValid}
                >
                  ثبت نظر
                  <IoCheckboxOutline className="articles__add-comment__form__btn-icon" />
                </button>
                <span className="articles__add-comment__form-alert">
                  اگر کامنت شما نمایش داده نشد صفحه را رفرش کنید . 
                </span>
              </form>
            </div>

            <div className="articles__comments-header">
              <h2 className="articles__comments__title">
                نظرات
                <FaRegComment className="articles__comments__title-icon" />
              </h2>
            </div>
            <div className="articles__comments" id="comments-section">
              {comments.map((comment) => (
                <div className="articles__comment" key={comment.id}>
                  <span className="articles__comment__name">
                    <FaRegUser className="articles__comment__name-icon" />
                    {comment.username}
                  </span>
                  <p className="articles__comment-body">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {loading ? null : <Footer />}
    </>
  );
}

export default ArticleInfo;
