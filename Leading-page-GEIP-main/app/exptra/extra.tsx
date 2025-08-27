"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const point = [
  {
    id: "១",
    text: "កម្មវិធីទូរសព្ទដៃសម្រាប់សិស្សអាចស្វ័យសិក្សា ពីថ្នាក់ទី៣ដល់ទី១២",
  },
  {
    id: "២",
    text: "ប្រើប្រាស់សន្លឹកកិច្ចការនិងការប្រឡងសំណួរតេស្តដើម្បីបង្រៀននិងរៀនតាមរយៈវេទិកាឌីជីថល",
  },
  {
    id: "៣",
    text: "មានមុខងារសំខាន់ៗជាច្រើនដែលអាចជួយដល់សិស្សានុសិស្សចាប់អារម្មណ៍ក្នុងការរៀនសូត្រ",
  },
  {
    id: "៤",
    text: `បង្កើតឡើងដោយមហាវិទ្យាល័យអប់រំដោយមានការចូលរួមប្រឹក្សាយោបល់ពីក្រុមការងារ GEIP, PED និង EQUID ដើម្បីធានានូវគុណភាពនៃសំណួរតេស្ត, ការគ្រប់គ្រងទិន្នន័យដ៏រឹងមាំ និងស្ថេរភាពនៃប្រព័ន្ធបច្ចេកវិទ្យាទំនើប`,
  },
];

const Extra = () => {
  useEffect(() => {
    AOS.init({
      duration: window.innerWidth < 640 ? 1000 : 3000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 font-fam">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="zoom-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#2579b3] mb-12 sm:mb-10 md:mb-12 leading-snug">
            តើកម្មវិធី GEIP EDTECH ជាអ្វី?
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
          {/* Right List */}
          <div
            className="w-full lg:w-1/2 flex flex-col gap-6 text-sm sm:text-base md:text-lg text-gray-800 p-4 lg:p-6 border-b-4 lg:border-r-4 border-blue-400 rounded-[2rem]"
            data-aos="fade-up"
          >
            {point.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4"
                data-aos="fade-right"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold shrink-0">
                  {item.id}
                </div>
                <div
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>

          {/* Left Circle Image */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2">
            {/* Larger blue background circle */}
            <div
              className="w-50 h-50 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-blue-500 absolute z-0 border-4 border-black zoom-fade-in-out-loop"
              data-aos="fade-left"
              role="presentation"
              aria-hidden="true"
            />

            {/* Phone image on top */}
            <img
              src="/banner/phone-3.png"
              alt="3 Phone"
              className="relative z-10 w-30 h-36 sm:w-38 sm:h-48 md:w-42 md:h-52 border-b-4 border-black rounded-0 zoom-fade-in-out-loop"
              data-aos="zoom-in-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
