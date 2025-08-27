"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "ប្រវត្តិរូបសង្ខេប",
      description:
        "មើលព័ត៌មានសង្ខេបអំពីប្រវត្តិសិក្សា បទពិសោធន៍ការងារ និងជំនាញពាក់ព័ន្ធរបស់អ្នកប្រើប្រាស់ ឬគ្រឹះស្ថានសិក្សា។",
      image: "/feature/Profile.png",
    },
    {
      id: 2,
      title: "សន្លឹកកិច្ចការកម្រិតអន្តរជាតិ",
      description:
        "ចូលប្រើ និងអនុវត្តសន្លឹកកិច្ចការដែលមានស្តង់ដារអន្តរជាតិ ដើម្បីពង្រីកចំណេះដឹង និងជំនាញឱ្យឈានដល់កម្រិតសកល។",
      image: "/feature/International worksheet.png",
    },
    {
      id: 3,
      title: "សន្លឹកកិច្ចការកម្រិតជាតិ",
      description:
        "ស្វែងរក និងអនុវត្តសន្លឹកកិច្ចការដែលត្រូវបានរៀបចំស្របតាមកម្មវិធីសិក្សា និងស្តង់ដារជាតិ។",
      image: "/feature/National Worksheet.png",
    },
    {
      id: 4,
      title: "បណ្ណាល័យឌីជីថល",
      description:
        "ស្វែងរក ចូលមើល និងទាញយកធនធានអប់រំឌីជីថលជាច្រើនប្រភេទ ដូចជាសៀវភៅ អត្ថបទ វីដេអូ និងឯកសារពាក់ព័ន្ធផ្សេងៗទៀត។",
      image: "/feature/School Profile.png",
    },
    {
      id: 5,
      title: "កម្មវិធីប្រកួតប្រជែង",
      description:
        "ចូលរួមក្នុងកម្មវិធីប្រកួតប្រជែងផ្សេងៗ ដើម្បីសាកល្បងសមត្ថភាព ទេពកោសល្យ និងដណ្តើមយករង្វាន់។",
      image: "/feature/championdesign_.png",
    },
    {
      id: 6,
      title: "ហ្វឹកហាត់សាកល្បង",
      description:
        "អនុវត្តលំហាត់ និងកិច្ចការសាកល្បង ដើម្បីពង្រឹងចំណេះដឹង ជំនាញ និងត្រៀមខ្លួនសម្រាប់ការប្រឡង ឬការវាយតម្លៃផ្សេងៗ។",
      image: "/feature/Training.png",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#c8e1f3] py-10 px-6 md:px-30 font-fam text-[#2579b3]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5" data-aos="fade-left" >អ្វីដែលយើងធ្វើ</h1>
        <h2 className="text-xl font-bold mb-8 text-center font-kantumry" data-aos="fade-right" >
          GEIP EDtech Cambodia៖ កម្មវិធីបច្ចេកវិទ្យាអប់រំឈានមុខ
          បង្កើតឱកាសសិក្សាឌីជីថល តាមរយៈមុខងារពិសេសៗចំនួន ៦៖ ប្រវត្តិរូបសង្ខេប,
          សន្លឹកកិច្ចការកម្រិតអន្តរជាតិ & ជាតិ, បណ្ណាល័យឌីជីថល,
          កម្មវិធីប្រកួតប្រជែង, និងហ្វឹកហាត់សាកល្បងដ៏សម្បូរបែប។
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-kantumry">
        {features.map((feature) => (
          <div
            key={feature.id}
            data-aos="fade-up"
            className="group border-4 border-white bg-white rounded-2xl shadow px-6 py-10 text-center transition-all duration-300 hover:bg-[#2579b4] relative overflow-hidden"
          >
            <div className="flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg text-[#2579b3] group-hover:text-white mb-2 py-3 relative z-10 font-bold">
              {feature.title}
            </h3>
            <p className="text-sm text-[#2579b3] group-hover:text-white group-hover:opacity-100 transition-opacity duration-300 z-0">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
