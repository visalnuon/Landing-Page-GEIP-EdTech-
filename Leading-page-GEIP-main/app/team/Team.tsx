"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Kantumruy_Pro } from "next/font/google";
import FooterPage from "../Footer/Footer";

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const documents = [
  {
    name: "លោក រ័ត្ន សំណាងវិសុទ្ធិពង្ស",
    description: "GEIP Edtech App",
    position: "អ្នកសម្រប.ស. ការផលិត. Apps",
    img: "/Staff/b pong.jpg",
  },

  {
    name: "លោក ពេជ្រ លីហ៊ាង",
    description: "GEIP Edtech App",
    position: "មន្រ្តីផ្នែកការផលិត និង គ្រប់គ្រង App",
    img: "/Staff/b lyheang.jpg",
  },
  {
    name: "លោក រ៉ី សុខ",
    description: "GEIP Edtech App",
    position: "ហាត់ការ GEIP Edtech App",
    img: "/Staff/sok.jpg",
  },
  {
    name: "លោក ជុំ ទិតស័ក្ដា",
    description: "GEIP Edtech App",
    position: "ហាត់ការ GEIP Edtech App",
    img: "/Staff/sak.jpg",
  },
  {
    name: "លោក នួន វិសាល",
    description: "GEIP Edtech App",
    position: "ហាត់ការ GEIP Edtech App",
    img: "/Staff/visal.jpg",
  },
  {
    name: "លោក ភ័ណ្ឌ លីហ៊ុយ",
    description: "GEIP Edtech App",
    position: "ហាត់ការ GEIP Edtech App",
    img: "/Staff/lyhuy.jpg",
  },
];

export default function NewsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        // If we've reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={kantumruy.className}>
        <div className="w-full py-10 px-4 bg-blue-50 text-blue-900">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              data-aos="fade-up"
            >
              អ្នកអភិវឌ្ឍន៍ ក្រុមរបស់យើង
            </h2>
            <p
              className="text-center mb-8 text-sm md:text-base leading-relaxed"
              data-aos="fade-up"
            >
              ស្វែងយល់ពីបណ្តុំធនធានអប់រំដ៏ទូលំទូលាយជាមួយ GEIP EdTech
              ដែលជាវេទិកាផ្លូវការរបស់ក្រសួងអប់រំ យុវជន <br />
              និងកីឡានៃព្រះរាជាណាចក្រកម្ពុជា។ រចនាឡើងដើម្បីគាំទ្រសិស្សានុសិស្ស
              និងគ្រូបង្រៀនទូទាំងប្រទេស។
            </p>

            <div className="carousel-container">
              <div className="carousel-track">
                <div
                  ref={sliderRef}
                  className="flex space-x-3 p-4 snap-x snap-mandatory overflow-hidden pointer-events-none"
                >
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="min-w-[250px] md:min-w-[200px] snap-start bg-white rounded-2xl shadow-md p-4 flex-shrink-0 text-center hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
                      data-aos="fade-up"
                    >
                      <div className="w-65 h-80 relative mb-5 rounded-x1 overflow-hidden">
                        <Image
                          src={doc.img}
                          alt={doc.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-blue-900">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-blue-700 mt-1">
                        {doc.description}
                      </p>
                      <p className="text-sm text-blue-700 mt-1">
                        {doc.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
