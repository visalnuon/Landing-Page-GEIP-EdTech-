"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const banners = ["/banner/b1.png", "/banner/b2.png"];

export default function Home() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [previousBanner, setPreviousBanner] = useState(banners[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPreviousBanner(banners[currentBannerIndex]);
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentBanner = banners[currentBannerIndex];
  const logo = [
    "/logo/mini.png",
    "/logo/rupp.png",
    "/logo/world.png",
    "/logo/geip.png",
  ];

  return (
    <div>
      <div
        className="banner-container w-full min-h-[90vh] bg-cover bg-center flex items-center transition-all duration-1000"
        style={{ backgroundImage: `url('${currentBanner}')` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left flex-1">
            {/* Logo Group */}
            <div
              className="flex flex-wrap lg:justify-start justify-center gap-4 mb-6"
              data-aos="zoom-in-right"
            >
              {logo.map((item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:scale-105 cursor-pointer"
                >
                  <img
                    src={item}
                    alt={`logo-${index}`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain rounded-full"
                  />
                </div>
              ))}
            </div>

            {/* Headings */}
            <h3 className="typing-text font-fam text-2xl sm:text-4xl md:text-5xl xl:text-6xl text-white p-2">
              កម្មវិធីស្វ័យសិក្សាសន្លឹកកិច្ចការ
            </h3>
            <h3
              className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-white font-bold mt-3"
              data-aos="zoom-in-right"
            >
              GEIP <span className="font-semibold">EDTECH</span>
            </h3>

            {/* Subtitle */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 text-white text-sm sm:text-base md:text-lg"
              data-aos="zoom-in-right"
            >
              <p>GEIP EDTECH education App</p>
              <p>|</p>
              <p>Launch in July 4th 2024</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
              <a
                href="https://apps.apple.com/kh/app/geip-edtech/id6504125594"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-lg w-full sm:w-44 h-12 text-white border-2 border-blue-400 text-base transition hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50 font-fam"
                data-aos="zoom-in-left"
              >
                ទាញយក App Store
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-blue-300/40"></div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.geip.edtech"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button font-fam relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-lg w-full sm:w-44 h-12 text-white border-2 border-blue-400 text-base transition hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50"
                data-aos="zoom-in-left"
              >
                ទាញយក Play Store
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-blue-300/40"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="w-full lg:w-[380px] flex justify-center lg:justify-end mt-8 lg:mt-0"
            data-aos="zoom-in-left"
          >
            <img
              src="/banner/phone.png"
              alt="phone"
              className="w-40 sm:w-56 md:w-72 lg:w-[350px] h-auto zoom-fade-in-out-loop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
