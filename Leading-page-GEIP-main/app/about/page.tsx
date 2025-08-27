"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Kantumruy_Pro } from "next/font/google";

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const leader = [
  {
    name: "លោក រ័ត្ន សំណាងវិសុទ្ធិពង្ស",
    title: "GEIP Edtech App",
    position: "អ្នកសម្រប.ស. ការផលិត. Apps",
    image: "/Staff/b pong.jpg",
  },
];

const teamMembers = [
  {
    name: "លោក នួន​ វិសាល",
    title: "GEIP Edtech App",
    position: "និស្សិតហាត់ការ GEIP Edtech App",
    image: "/Staff/visal.jpg",
  },
  {
    name: "លោក ជុំ ទិតស័ក្ដា",
    title: "GEIP Edtech App",
    position: "និស្សិតហាត់ការ GEIP Edtech App",
    image: "/Staff/sak.jpg",
  },
  {
    name: "លោក ភ័ណ្ឌ លីហ៊ុយ",
    title: "GEIP Edtech App",
    position: "និស្សិតហាត់ការ GEIP Edtech App",
    image: "/Staff/lyhuy.jpg",
  },
  {
    name: "លោក​​ ពេជ្រ​​ លីហ៊ាង",
    title: "GEIP Edtech App",
    position: "មន្រ្តីផ្នែកការផលិត​ និង គ្រប់គ្រង App",
    image: "/Staff/b lyheang.jpg",
  },
  {
    name: "លោក ​រ៉ី សុខ",
    title: "GEIP Edtech App",
    position: "ហាត់ការ GEIP Edtech App",
    image: "/Staff/sok.jpg",
  },
];

export default function MeetOurTeam() {
    useEffect(() => {
      AOS.init({
        duration: window.innerWidth < 640 ? 1000 : 1000,
        once: true,
      });
    }, []);
  return (
    <>
    <div className={`${kantumruy.className} bg-[url('/banner/Backabout.jpg')] bg-cover bg-center`}>
      <div className="min-h-screen  bg-opacity-60 text-white text-center px-4 py-12">
        <h2 data-aos="fade-left" className="text-4xl font-bold mb-2 p-5">អ្នកអភិវឌ្ឍន៍ ក្រុមរបស់យើង</h2>
        <p  data-aos="fade-right" className="text-lg mb-10">
          ស្វែងយល់ពីបណ្តុំធនធានអប់រំដ៏ទូលំទូលាយជាមួយ GEIP EdTech
          ដែលជាវេទិកាផ្លូវការរបស់ក្រសួងអប់រំ យុវជន <br />
          និងកីឡានៃព្រះរាជាណាចក្រកម្ពុជា។ រចនាឡើងដើម្បីគាំទ្រសិស្សានុសិស្ស
          និងគ្រូបង្រៀនទូទាំងប្រទេស។
        </p>

        <div className="grid grid-cols-1">
          {leader.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={340}
                height={120}
                className="rounded-[100%] border-4 border-white mb-5 transition-transform duration-200 ease-in-out hover:scale-105"
                data-aos="zoom-in"
              />
              <h3 data-aos="zoom-in" className="font-bold text-lg">{member.name}</h3>
              <p data-aos="zoom-in" className="italic text-sm">{member.title}</p>
              <p data-aos="zoom-in" className="text-sm">{member.position}</p>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-10 max-w-7xl mx-auto">
            {teamMembers.slice(3).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={340}
                  height={120}
                  className="rounded-[100%] mb-4 border-4 border-white transition-transform duration-500 ease-in-out hover:scale-105"
                  data-aos="zoom-in"
                />
                <h3 data-aos="zoom-in" className="font-bold text-lg">{member.name}</h3>
                <p data-aos="zoom-in" className="italic text-sm">{member.title}</p>
                <p data-aos="zoom-in" className="text-sm">{member.position}</p>
              </div>
            ))}
          </div>


          <div className="text-white py-12 px-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={340}
                    height={120}
                    className="rounded-[100%] mb-4 border-4 border-white transition-transform duration-500 ease-in-out hover:scale-105"
                    data-aos="zoom-in"
                  />
                  <h3 data-aos="zoom-in" className="font-bold text-lg">{member.name}</h3>
                  <p data-aos="zoom-in" className="italic text-sm">{member.title}</p>
                  <p data-aos="zoom-in" className="text-sm">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="font-fam">
    </div>
  </>
  );
}
