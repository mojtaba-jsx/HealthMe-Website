import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ArticleInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
  const { id } = useParams(); // Get post ID from URL
  const [articleInfo, setArticleInfo] = useState([]);
  const [comments, setComments] = useState([]); // State for comments
  const [newComment, setNewComment] = useState({
    username: "",
    email: "",
    text: "",
  }); // State for new comment form

  useEffect(() => {
    // Fetch article info
    fetch(`http://localhost:3000/articles?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticleInfo(data);
      });

    // Fetch comments for this post
    fetch(`http://localhost:3000/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [id]); // Dependency array ensures this runs when `id` changes

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const commentToPost = {
      ...newComment,
      postId: id, // Attach post ID
    };

    fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentToPost),
    })
      .then((res) => res.json())
      .then((savedComment) => {
        // Add the new comment at the beginning of the comments array
        setComments((prev) => [...prev, savedComment]);

        // Clear form inputs
        setNewComment({ username: "", email: "", text: "" });
      })
      .catch((err) => console.error("Error posting comment:", err));
  };

  // Check if the form is valid
  const isFormValid =
    newComment.username.trim() !== "" &&
    newComment.email.trim() !== "" &&
    newComment.text.trim() !== "";

  return (
    <>
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
                disabled={!isFormValid} // Disable button if form is invalid
              >
                ثبت نظر
                <IoCheckboxOutline className="articles__add-comment__form__btn-icon" />
              </button>
            </form>
          </div>

          <div className="articles__comments-header">
            <h2 className="articles__comments__title">
              نظرات
              <FaRegComment className="articles__comments__title-icon" />
            </h2>
          </div>
          <div className="articles__comments">
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
      <Footer />
    </>
  );
}

export default ArticleInfo;
