import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Process from "../../../Process/Process";
// import Review from "../../../Review/Review";
import BeInstructor from "../../Be-Instructor/BeInstructor";
import Blogs from "../../Blogs/Blogs";
import PopularCourse from "../../Courses/PopularCourse";
import Banner from "../Banner/Banner1";
import ContactForm from "../ContactForm/ContactForm";
import HeroSection from "../HeroSection/HeroSection";
import ReviewCourses from "../../AllPremiumCourses/ReviewCourses";
import SideIcons from "./Side";

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    localStorage.setItem("popupShown", "true");
  };

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
      const delay = 2000; // 2 seconds

      const timer = setTimeout(() => {
        openPopup();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, []);

  // useEffect(() => {
  //   const delay = 2000; // 2 seconds

  //   const timer = setTimeout(() => {
  //     openPopup();
  //   }, delay);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="">
      {/* Set the page title and meta tags */}
      <Helmet>
        <title>ELearner</title>
      </Helmet>
      <SideIcons />
      <Banner />
      <HeroSection />
      <BeInstructor></BeInstructor>
      <PopularCourse></PopularCourse>
      <Process />

      {/* Popup */}
      <div
        className={`popup ${isPopupOpen ? "open" : ""}`}
        onClick={closePopup}
      >
        {/* Popup */}
        <div
          className={`popup ${isPopupOpen ? "open" : ""}`}
          onClick={closePopup}
        >
          <div className="popup-content bg-gradient-to-b from-blue-400 to-blue-600 p-4 md:p-6 rounded-xl shadow-xl text-white text-center">
            <h2 className="text-xl md:text-3xl font-semibold mb-3">
              🚀 Welcome to Our Spoken English Website! 🚀
            </h2>
            <p className="text-lg md:text-xl mb-4">
              We're here to help you become a confident English speaker.
            </p>
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Premium Courses
              </h3>
              <p className="text-lg md:text-xl">
                Explore our premium courses for immersive language learning with
                expert instructors.
              </p>
            </div>
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Free Resources
              </h3>

              <ul className="text-lg md:text-xl text-left ml-4 mt-2 flex align-middle gap-5 justify-center">
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Videos
                </li>
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Exercises
                </li>
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Quizzes
                </li>
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Voice To Text
                </li>
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Translator
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Additional Resources
              </h3>
              <ul className="text-lg md:text-xl text-left ml-4 mt-2 flex align-middle md:gap-5 justify-center">
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Conversation
                  Practice
                </li>
                <li className="mb-1">
                  <span className="text-yellow-500">✓</span> Vocabulary Builder
                </li>
              </ul>
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 md:py-3 px-4 md:px-6 rounded-full text-lg md:text-xl font-semibold"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* <Review /> */}
      <Blogs />
      <ReviewCourses />
      <div className="md:hidden my-20 px-2 mx-2">
        <ContactForm />
      </div>

      <style>
        {`
          /* CSS for the Popup */
          .popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .popup.open {
            display: flex;
          }

          .popup-content {
            background-color: white;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
