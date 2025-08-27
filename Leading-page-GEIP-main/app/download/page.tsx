import React from 'react';


const MobileAppDownloadGuide = () => {
  const steps = [
    {
      number: '១',
      title: 'ជំហានទី ១',
      description: 'ចូលទៅកាន់កម្មវិធី Play Store & App Store',
      image: '/Phone/phone1.jpg',
    },
    {
      number: '២',
      title: 'ជំហានទី ២',
      description: 'ប្រើប្រាស់របារស្វែងរក ហើយវាយពាក្យ "GEIP EdTech"។',
      image: '/Phone/phone2.jpg',
    },
    {
      number: '៣',
      title: 'ជំហានទី ៣',
      description: 'រកមើលរូបតំណាងកម្មវិធី GEIP EdTech ដែលមានឡូហ្គោ GEIP រួចចុចលើប៊ូតុង "Install" ដើម្បីចាប់ផ្តើមការដំឡើងកម្មវិធី។',
      image: '/Phone/phone3.png',
    },
    {
      number: '៤',
      title: 'ជំហានទី ៤',
      description: 'ចុឈ្មោះឬ​ចុចតាមគណនីតាមប្រព័ន្ធទៀត។',
      image: '/Phone/phone4.jpg',
    },
    {
      number: '៥',
      title: 'ជំហានទី ៥',
      description: 'ចុច Continue',
      image: '/Phone/phone5.jpg',
    },
    {
      number: '៦',
      title: 'ជំហានទី ៦',
      description: 'ជ្រើសរើសគណនី',
      image: '/Phone/phone6.png',
    },
    {
      number: '៧',
      title: 'ជំហានទី ៧',
      description: 'ចុចប៊ូតុង​ Continue',
      image: '/Phone/phone7.jpg',
    },
    {
      number: '៨',
      title: 'ជំហានទី ៨',
      description: 'បំពេញព័ត៍មានផ្ទាល់ខ្លួន',
      image: '/Phone/phone8.jpg',
    },
    {
      number: '៩',
      title: 'ជំហានទី ៩',
      description: 'បំពេញព័ត៍មានទូទៅ',
      image: '/Phone/phone9.png',
    },
    {
      number: '១០',
      title: 'ជំហានទី ១០',
      description: 'បំពេញព័ត៍មានបន្ថែម',
      image: '/Phone/phone10.png',
    },
    {
      number: '១១',
      title: 'ជំហានទី ១១',
      description: 'ជ្រើសរើសរូបភាពលេខទូរសព្ទនិងចូលតេឡេក្រាមរួចចុចបញ្ចូន',
      image: '/Phone/phone11.png',
    },
    {
      number: '១២',
      title: 'ជំហានទី ១២',
      description: 'ចូលគណនីបានជោគជ័យ',
      image: '/Phone/phone12.png',
    },
  ];

  
  return (
    <div
      className="bg-cover bg-center bg-no-repeat font-fam p-4 md:p-8 lg:p-12 min-h-screen"
      style={{ backgroundImage: "url('')" }} // <-- background image here
    >
      <div className="bg-opacity-80 rounded-lg p-4 md:p-8 lg:p-12 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2579b3] text-center mb-6 md:mb-8">
          របៀបទាញយកកម្មវិធី GEIP EdTech & ចុះឈ្មោះជាមួយកម្មវិធី ឲ្យបានត្រឹមត្រូវ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ step }: { step: { number: string; title: string; description: string; image: string } }) => {
  return (
    <div className="text-center font-fam rounded-md p-4 ">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-sm md:text-lg font-bold">{step.number}</span>
      </div>
      <h2 className="text-[#2579b3] mb-2 text-lg md:text-xl">{step.title}</h2>
      <p className="text-[#2579b3] text-sm md:text-base mb-4">{step.description}</p>
      <div className="flex justify-center">
        <div className="w-48 md:w-60">
          <img src={step.image} alt={step.title} className="w-full h-auto rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default MobileAppDownloadGuide;
