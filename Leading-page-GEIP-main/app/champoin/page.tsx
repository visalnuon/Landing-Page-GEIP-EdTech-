"use client";
import { useState } from "react";

import "aos/dist/aos.css";
import HeroBanner from "./banner";
import AOS from "aos";
import { useEffect } from "react";
// Assuming TopStudentDisplay is a component you want to keep, otherwise remove or adjust
// import TopStudentDisplay from "./TopstudentDisplay";

// Define a type for your card data for better type safety in TypeScript
interface CardData {
  id: number;
  img: string;
  title: string;
  description: string;
  deltail: string;
}

function Champion() {
  const [selectedItemDetail, setSelectedItemDetail] = useState<string | null>(
    null
  );

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  // Combined data and explicitly marking Top 1
  const allCardData: CardData[] = [
    {
      id: 1,
      img: "/img/1.png",
      title: "ព័ត៌មានលម្អិត", // Top 1
      description:
        "លេខ​ ១​ បានទៅសិស្សឈ្មោះ សាំ សសារុន ជាសិស្សវិទ្យាល័យ ហស.ស្វាយរំពារ ស្រុកស្វាយទាប ខេត្តស្វាយរៀង ",
      deltail:
        "សិស្សឈ្មោះ សាំ សសារុន ភេទ ប្រុស ជាសិស្សវិទ្យាល័យ ហស.ស្វាយរំពារ ស្រុកស្វាយទាប ខេត្តស្វាយរៀង​​​ ថ្នាក់ទី​​ 12 ចំណាត់ថ្នាក់លេខ​ 1 ពិន្ទុសរុប​ 128,884 ចំនួនសំណួរសរុបបានធ្វើ 36,659 ចំនួនចម្លើយត្រឹមត្រូវ 34,467 ចំនួនចម្លើយមិនត្រឹមត្រូវ 2,192។",
    },
    {
      id: 2,
      img: "/img/2.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ២ បានទៅសិស្សឈ្មោះ ប៉ោ ប៊ុណ្ណារត្ន័ ជាសិស្សអនុវិទ្យាល័យ សំប៉ាន​ ស្រុក កោះធំ ខេត្តកណ្តាល​​​",
      deltail:
        "សិស្សឈ្មោះ ប៉ោ ប៊ុណ្ណារត្ន័ ភេទ ប្រុស ជាសិស្សវិទ្យាល័យ អ.ន សំប៉ាន ស្រុក កោះធំ ខេត្តកណ្តាល​​​ ថ្នាក់ទី​​​ ១០ ‘’A‘’ ចំណាត់ថ្នាក់លេខ​ 2 ពិន្ទុសរុប​  107,530 ចំនួនសំណួរសរុបបានធ្វើ  37,387 ចំនួនចម្លើយត្រឹមត្រូវ 27,209 ចំនួនចម្លើយមិនត្រឹមត្រូវ  10,178",
    },
    {
      id: 3,
      img: "/img/3.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ៣ បានទៅសិស្សឈ្មោះ ហុង សុីដាណា ជាសិស្សអនុវិទ្យាល័យ សំប៉ាន ស្រុកកោះធំ ខេត្តកណ្តាល​​​",
      deltail:
        "សិស្សឈ្មោះ ហុង សុីដាណា ភេទ ស្រី ជាសិស្សវិទ្យាល័យ អ.ន សំប៉ាន ស្រុកកោះធំ ខេត្តកណ្តាល​​​ ថ្នាក់ទី​​ ៩  ‘’A‘’ ចំណាត់ថ្នាក់លេខ​ 3 ពិន្ទុសរុប​ 99,728 ចំនួនសំណួរសរុបបានធ្វើ 34,369 ចំនួនចម្លើយត្រឹមត្រូវ 24,950 ចំនួនចម្លើយមិនត្រឹមត្រូវ  9,419 ។",
    },
    {
      id: 4,
      img: "/img/4.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ៤​ បានទៅសិស្សឈ្មោះ សូ សាខី ជាសិស្សវិទ្យាល័យ ថ្មតាព្រហ្ម ស្រុកសៀមបូក ខេត្តស្ទឹងត្រែង",
      deltail:
        "សិស្សឈ្មោះ សូ សាខី  ភេទ ប្រុស ជាសិស្សវិទ្យាល័យ ថ្មតាព្រហ្ម ស្រុកសៀមបូក  ខេត្តស្ទឹងត្រែង ថ្នាកទី ១០ ‘’A‘’ ចំណាត់ថ្នាក់លេខ​ 4 ពិន្ទុសរុប​ 86,393 ចំនួនសំណួរសរុបបានធ្វើ  42,478 ចំនួនចម្លើយត្រឹមត្រូវ 30,638 ចំនួនចម្លើយមិនត្រឹមត្រូវ  11,840។",
    },
    {
      id: 5,
      img: "/img/5.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ៥​ បានទៅសិស្សឈ្មោះ សុច ហាក់ហួ ជាសិស្សអនុវិទ្យាល័យ ថ្មតាព្រហ្ម ស្រុកសៀមបូក ខេត្តស្ទឹងត្រែង ",
      deltail:
        "សិស្សឈ្មោះ សុច ហាក់ហួ ភេទ ប្រុស ជាសិស្សអនុវិទ្យាល័យ ថ្មតាព្រហ្ម ស្រុកសៀមបូក ខេត្តស្ទឹងត្រែង  ថ្នាក់ទី​​ ៨ ‘’A‘’  ចំណាត់ថ្នាក់លេខ​  5 ពិន្ទុសរុប​ 75,140 ចំនួនសំណួរសរុបបានធ្វើ  35,431 ចំនួនចម្លើយត្រឹមត្រូវ 23,787 ចំនួនចម្លើយមិនត្រឹមត្រូវ 11,644",
    },
    {
      id: 6,
      img: "/img/6.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ៦​ បានទៅសិស្សឈ្មោះ សាំង លីជិញ ជាសិស្សវិទ្យាល័យស្លាបលែង ស្រុកបរសេដ្ឋ ខេត្តកំពង់ស្ពឺ​​​ ",
      deltail:
        "សិស្សឈ្មោះ សាំង លីជិញ ភេទ ប្រុស ជាសិស្សវិទ្យាល័យ ស្លាបលែង ខេត្តកំពង់ស្ពឺ​​​ ថ្នាក់ទី​​ ១០ ‘’D‘’ ចំណាត់ថ្នាក់លេខ​ 6 ពិន្ទុសរុប​ 66,112 ចំនួនសំណួរសរុបបានធ្វើ  20,234 ចំនួនចម្លើយត្រឹមត្រូវ 18,514 ចំនួនចម្លើយមិនត្រឹមត្រូវ  1,720។",
    },
    {
      id: 7,
      img: "/img/7.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ៧​ បានទៅសិស្សឈ្មោះ ធីត វង្សា ជាសិស្សអនុវិទ្យាល័យ ថ្មតាព្រហ្ម ស្រុកសៀមបូកខេត្តស្ទឹងត្រែង​​​ ",
      deltail:
        "សិស្សឈ្មោះ ធីត វង្សា ភេទ ប្រុស ជាសិស្សអនុវិទ្យាល័យ ថ្មតាព្រហ្ម ខេត្តស្ទឹងត្រែង​​​ ថ្នាក់ទី​​ ៨ ‘’A‘’ ចំណាត់ថ្នាក់លេខ​ 7 ពិន្ទុសរុប​ 65,979 ចំនួនសំណួរសរុបបានធ្វើ  46,033 ចំនួនចម្លើយត្រឹមត្រូវ 28,103 ចំនួនចម្លើយមិនត្រឹមត្រូវ  17,930។",
    },
    {
      id: 8,

      img: "/img/8.png",
      title: "ព័ត៌មានលម្អិត",
      description:
        "លេខ​ ៨​ បានទៅសិស្សឈ្មោះ វិន វ៉ាឃីម ជាសិស្សអនុវិទ្យាល័យ ស្រុកចំការចេក ខេត្តសៀមរាប",
      deltail:
        "សិស្សឈ្មោះ វិន វ៉ាឃីម ភេទ ស្រី ជាសិស្សអនុវិទ្យាល័យ ចំការចេក ខេត្តសៀមរាប​​​ ថ្នាក់ទី​​ ៩ ‘’B‘’ ចំណាត់ថ្នាក់លេខ​ 8 ពិន្ទុសរុប​ 65,140 ចំនួនសំណួរសរុបបានធ្វើ  48,982 ចំនួនចម្លើយត្រឹមត្រូវ 30,042 ចំនួនចម្លើយមិនត្រឹមត្រូវ  18,940។",
    },
    {
      id: 9,
      img: "/img/9.png",
      title: "ព័៍ត៍មានលម្អិត",
      description:
        "លេខ​ ៩​ បានទៅសិស្សឈ្មោះ ហ៊ង វួចលាង ជាសិស្សអនុវិទ្យាល័យ សំប៉ាន​​ ស្រុកកោះធំ​ ខេត្តកណ្តាល",
      deltail:
        "សិស្សឈ្មោះ ហ៊ង វួចលាង ភេទ ស្រី ជាសិស្សអនុវិទ្យាល័យ សំប៉ាន ខេត្តកណ្តាល​​​ ថ្នាក់ទី​​ ៩ ‘’A‘’ ចំណាត់ថ្នាក់លេខ​ 9 ពិន្ទុសរុប 60,776 ចំនួនសំណួរសរុបបានធ្វើ  25,109 ចំនួនចម្លើយត្រឹមត្រូវ 18,920 ចំនួនចម្លើយមិនត្រឹមត្រូវ 6,189។",
    },
    {
      id: 10,
      img: "/img/10.png",
      title: "ព័៍ត៍មានលម្អិត",
      description:
        "លេខ​ ១០​ បានទៅសិស្សឈ្មោះ មី រ៉ាវុធ ជាសិស្សវិទ្យាល័យ​ កំពង់សំរោង ស្រុករំដួល ខេត្តស្វាយរៀង",
      deltail:
        "សិស្សឈ្មោះ មី រ៉ាវុធ ភេទ ប្រុស ជាសិស្សវិទ្យាល័យ កំពង់សំរោង។ ខេត្តស្វាយរៀង ថ្នាក់ទី​​ ១០ ‘’D‘’ ចំណាត់ថ្នាក់លេខ​ 10 ពិន្ទុសរុប​ 58,542 ចំនួនសំណួរសរុបបានធ្វើ  75,737 ចំនួនចម្លើយត្រឹមត្រូវ 58,542 ចំនួនចម្លើយមិនត្រឹមត្រូវ 17,195។",
    },
  ];

  // Separate the top 1 student
  const top1Student = allCardData.find((item) => item.id === 1); // Assuming ID 1 is always top 1

  // Get the rest of the students (excluding top 1)
  const otherStudents = allCardData.filter((item) => item.id !== 1);

  // Function to handle opening the modal and setting the selected item's detail
  const handleOpenModal = (detail: string) => {
    setSelectedItemDetail(detail);
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.showModal();
  };

  // Function to handle closing the modal and clearing the selected item's detail
  const handleCloseModal = () => {
    setSelectedItemDetail(null);
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  };

  return (
    <>
      <HeroBanner />
      {/* <TopStudentDisplay /> Keep or remove based on whether you need this component */}

      {/* Top 1 Section - Centered */}

      <div className="bg-white  bg-[url('/img/background2.jpg')] bg-cover ">
        {top1Student && ( // Only render if top1Student exists
          <div className="mainforbg w-full h-auto bg-no-repeat flex justify-center font-fam ">
            {" "}
            {/* Added flex and justify-center for centering */}
            <div
              key={top1Student.id}
              data-aos="fade-up" // Different animation for emphasis
              data-aos-duration="1000"
              className=" md:w-90 w-86" // Control max width for the single card
            >
              <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.05] hover:shadow-2xl  flex flex-col mt-10">
                {" "}
                {/* Added gold border for distinction */}
                <img
                  src={top1Student.img}
                  alt={top1Student.title}
                  className="w-full h-auto object-cover flex-grow"
                />
                <div className="p-2">
                  <div className="main-btn flex justify-center items-center m-4  ">
                    <button
                      className="h-auto font-fam btn btn-outline btn-info " // Changed button color for distinction
                      onClick={() => handleOpenModal(top1Student.deltail)}
                    >
                      <h2 className="text-2xl font-semibold text-gray-900 m-2 text-accent justify-center item-center text-black cursor-pointer">
                        {top1Student.title}
                      </h2>
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 font-fam text-center ">
                    {" "}
                    {/* Centered description */}
                    {top1Student.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Top 1 Section - Centered */}
        {/* Other Students Section - Grid */}
        <div className="mainforbg w-full h-auto bg-cover bg-center bg-cover  ">
          <div className="max-w-7xl mx-auto px-2 sm:px-30 lg:px-8 py-7">
            {" "}
            {/* Added some padding top */}
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4 cursor-pointer p-2">
              {" "}
              {/* Adjusted grid for 3 columns on md and larger */}
              {otherStudents.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up" // Different animation for the grid items
                  data-aos-delay={index * 4} // Add a slight delay for staggered effect
                  data-aos-duration="400"
                >
                  <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-xl border-2 border-gray-100 rounded-lg shadow-md flex flex-col m-4 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto object-cover flex-grow"
                    />
                    <div className="p-4">
                      <div className="main-btn flex justify-center items-center m-4">
                        <button
                          className="h-auto font-fam btn btn-outline btn-info cursor-pointer"
                          onClick={() => handleOpenModal(item.deltail)}
                        >
                          <h2 className="text-2xl font-semibold text-gray-900 m-2 text-accent justify-center item-center text-black cursor-pointer">
                            {item.title}
                          </h2>
                        </button>
                      </div>
                      <p className="text-sm text-gray-700 font-fam">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Modal remains the same */}
        <dialog id="my_modal_1" className="modal font-fam text-black text-2xl ">
          <div className="modal-box">
            <h4 className="font-bold text-3xl text-center ">
              ព័ត៌មានលម្អិតនៃសិស្ស
            </h4>
            <p className="py-38 px-10">{selectedItemDetail}</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn bg-red-600 text-white"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
export default Champion;
