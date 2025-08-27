"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroBanner() {
  const backgroundImageUrl = "/img/banner.jpg";

  const headingText = "តារាងចំណាត់ថ្នាក់";
  const paragraphText =
    "យើងពិតជាមានមោទនភាពដែលបានឃើញការលូតលាស់និងការអភិវឌ្ឍចំណេះដឹងរបស់ប្អូនៗតាមរយៈការប្រើប្រាស់កម្មវិធីដ៏ល្អមួយនេះ។ការសិក្សាដោយខ្លួនឯងទាមទារនូវវិន័យនិងការលើកទឹកចិត្តខ្ពស់ហើយប្អូនៗបានបង្ហាញយ៉ាងច្បាស់ថាប្អូនៗពិតជាយុវជនដ៏ឆ្នើមរបស់កម្ពុជា។សូមបន្តរក្សាស្មារតីសិក្សានេះតទៅមុខទៀត GEIP EdTECH App នឹងនៅតែជាដៃគូដ៏ល្អរបស់ប្អូនៗជានិច្ចក្នុងការធ្វើស្វ័យសិក្សាគ្រប់ពេលវេលាគ្រប់ទីកន្លែង។";
  const buttonText = "មើលការណែនាំនៃការដោនឡូត";

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <>
      <div
        className="relative w-full bg-cover bg-center shadow-lg flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          minHeight: "650px",
        }}
        role="banner"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-500 to-black opacity-70 mix-blend-multiply"></div>

        {/* Content Container */}
        <div
          className="relative z-10 text-white text-center px-6 md:px-10 max-w-4xl"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-fam">
            {headingText}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto font-fam">
            {paragraphText}
          </p>
          <button
            type="button"
            className="text-black bg-blue-300 hover:bg-black hover:text-white font-semibold py-2.5 px-8 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-[1.2] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 font-fam"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
