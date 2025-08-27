"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Kantumruy_Pro } from "next/font/google";

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type Logo = {
  src: string;
  label?: string;
  width?: number;
  height?: number;
  textClass?: string;
};

export default function Partner() {
  useEffect(() => {
    AOS.init({
      duration: window.innerWidth < 640 ? 1000 : 1000,
      once: true,
    });
  }, []);
  const logos: Logo[] = [
    { src: "/logo/mini.png" },
    { src: "/logo/foe.png" },
    { src: "/logo/foed.png" },
    { src: "/logo/world.png" },
    { src: "/logo/geip.png" },
  ];

  return (
    <section
      className={`bg-white py-12 px-4 text-center ${kantumruy.className}`}
    >
      <h2
        data-aos="fade-left"
        className="text-4xl font-extrabold text-blue-800 mb-2"
      >
        ដៃគូសហការ
      </h2>
      <p
        data-aos="fade-left"
        className="text-md text-gray-700 max-w-3xl mx-auto mb-10"
      >
        ជាដៃគូសហការដ៏សំខាន់ក្នុងការជួយគាំទ្រដល់ការអភិវឌ្ឍន៍បច្ចេកវិទ្យាឌីជីថលនៅកម្ពុជា
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map(
          (
            {
              src,
              label,
              width = 100,
              height = 100,
              textClass = "text-sm text-black",
            },
            i
          ) => (
            <div
              key={i}
              className="mb-6 flex flex-col items-center transform transition duration-1000 hover:scale-102 ease-in-out"
              data-aos="fade-right"
            >
              <Image
                src={src}
                alt={label || "Logo"}
                width={width}
                height={height}
                loading="lazy"
                className="object-contain"
              />
              {label && <span className={`mt-2 ${textClass}`}>{label}</span>}
            </div>
          )
        )}
      </div>
    </section>
  );
}
