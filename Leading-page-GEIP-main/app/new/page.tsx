import React from "react";
import Image from "next/image";

export default function GEIPEdtechPoster() {
  return (
    <div className="bg-base-300 min-h-screen text-white font-sans  p-15 ">
      {/* section1 */}
      <div className="max-w-5xl mx-auto bg-green-600 rounded-2xl shadow-lg overflow-hidden font-fam bg-red-900  ">
        <div className="grid md:grid-cols-2  ">
          {/* Right Side */}
          <div className="flex flex-col items-center justify-center bg-blue-900 p-6 space-y-10 space-x-4">
            <Image
              src="/logo/PLM.png"
              alt="SEA-PLM Logo"
              width={200}
              height={80}
            />
            <Image
              src="/logo/pisa.png"
              alt="PISA Logo"
              width={200}
              height={100}
            />
          </div>
          {/* Left Side */}
          <div className="p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo/foe.png"
                alt="SEA_PLM Logo"
                width={60}
                height={60}
              />
              <h1 className="text-xl font-semibold">Faculty of Education</h1>
            </div>
            <h2 className="text-3xl font-bold">ខ្លះៗអំពី PISA TEST</h2>
            <p className="text-base leading-relaxed">
              មុខងារ PISA និង SEAPLM ដែលយេីងបានបញ្ចូលទៅក្នុង APP
              ពិតជាមាន​សារៈសំខាន់​យ៉ាង​ខ្លាំង​សម្រាប់​ការ​អភិវឌ្ឍ​វិស័យ​អប់រំ​នៅ​កម្ពុជា
              ហើយ​ការ​ដាក់​បញ្ចូល​សំណួរ​គំរូ​តាម​ទម្រង់​នៃ​ការ​វាយតម្លៃ​ទាំង​នេះ​ទៅ​ក្នុង​កម្មវិធី
              GEIP Edtech ដែល​ជា​កម្មវិធី​ស្វ័យ​សិក្សា​សន្លឹក​កិច្ចការ
              ពិត​ជា​ផ្ដល់​អត្ថប្រយោជន៍​ច្រើន​ដល់​សិស្សានុសិស្ស។សារៈសំខាន់​នៃ​កម្មវិធី​វាយតម្លៃ​សិស្ស​អន្តរជាតិ
              (PISA - Programme for International Student Assessment)
              វាស់វែង​សមត្ថភាព​ក្នុង​បរិបទ​ពិភពលោក ផ្ដោត​លើ​ការ​អនុវត្ត​ចំណេះដឹង
              លើក​កម្ពស់​គុណភាព​អប់រំ
              សារៈសំខាន់​នៃ​កម្មវិធី​វាយតម្លៃ​លទ្ធផល​សិក្សា​សម្រាប់​សិស្ស​បឋមសិក្សា​នៅ​អាស៊ីអាគ្នេយ៍{" "}
              <br />
              -(SEAPLM - Southeast Asia Primary Learning Metrics)
              វាស់វែង​សមត្ថភាព​ក្នុង​បរិបទ​តំបន់ ផ្ដោត​លើ​ជំនាញ​គ្រឹះ
              កំណត់​តម្រូវការ​អន្តរាគមន៍​ទាន់​ពេល
              ជំរុញ​កិច្ច​សហប្រតិបត្តិការ​ក្នុង​តំបន់
            </p>
            <div className="border-t border-white pt-4">
              <p>យេីងបានបញ្ជុល PISA TEST នៅក្នុង APP រួចរាល់ហេីយ</p>
              <p>អ្នកអាចសាកល្បងបាននៅក្នុង APP GEIP Edtech បានសូមអរគុណ</p>
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="max-w-5xl mx-auto bg-[#023259]  rounded-2xl shadow-lg overflow-hidden font-fam  mt-15">
        <div className="grid md:grid-cols-2">
          {/* Right Side */}

          <div className="flex flex-col items-center justify-center bg-green-900">
            <div className="w-full h-full">
              <Image
                src="/logo/coming.jpg"
                alt="GEIP EDTECH App"
                layout="responsive"
                width={700}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Left Side */}
          <div className="p-8 space-y-10 pt-26">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo/geip.png"
                alt="SEA_PLM Logo"
                width={60}
                height={60}
              />
              <h1 className="text-xl font-semibold">GEIP Edtech </h1>
            </div>
            <h2 className="text-3xl font-bold">GEIP EDTECH</h2>
            <p className="text-base leading-relaxed">
              កម្មវិធីអប់រំ GEIP EDTECH កំណែប្រែទី២ នឹងមកដល់ឆាប់ៗនេះ!
              រង់ចាំមុខងារបន្ថែមថ្មីៗ និងបទពិសោធន៍សិក្សាកាន់តែប្រសើរ! GEIP
              EdTech បង្កើតឡើងដោយ មហាវិទ្យាល័យអប់រំ
              នៃសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
            </p>
            <div className="border-t border-white pt-4">
              <p className="text-4xl font-bold pt-6">ក្នុងពេលឆាប់ៗខាងមុខនេះ </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
