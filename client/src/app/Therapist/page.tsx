"use client";

import React, { useState } from 'react';

// Dummy data for therapist cards
const therapists = [
  {
    id: 1,
    name: "Dr. Elena Rodriguez",
    qualification: "Licensed Clinical Psychologist, PhD",
    img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321579.jpg?t=st=1751109933~exp=1751113533~hmac=bd127632ce68c695704ce3944c71cebb6523d9afad826cb594840f6bfa6fa169&w=1380" // Placeholder image
  },
  {
    id: 2,
    name: "Mr. David Hamilton",
    qualification: "Certified Counselor, MA in Counseling",
    img: "https://img.freepik.com/free-photo/man-with-problems_23-2147990538.jpg?t=st=1751110118~exp=1751113718~hmac=64b1d58af15bf217364e182593f9510f1ed9d028b8d478d3d5bdc1a9231092f2&w=1380" // Placeholder image
  },
  {
    id: 3,
    name: "Ms. Sarah Miller",
    qualification: "Family Therapist, MSW",
    img: "https://img.freepik.com/free-photo/man-sitting-psychologist-s-office-talking-about-problems_1157-28372.jpg?t=st=1751110186~exp=1751113786~hmac=3dbe29e0633fec0bef0e21114222fdee9e96089c8a31ec0dd384d87b1b453054&w=1380" // Placeholder image
  },
  {
    id: 4,
    name: "Dr. James Lee",
    qualification: "Cognitive Behavioral Therapist, PsyD",
    img: "https://img.freepik.com/free-photo/front-view-male-nurse-hospital_23-2150796760.jpg?t=st=1751109860~exp=1751113460~hmac=41d21b106e2e378982c30b5e1bfe00e0967b8f9a068eb2f6e31ae46cbcbbc672&w=1380" // Placeholder image
  },
  {
    id: 5,
    name: "Prof. Aisha Khan",
    qualification: "Developmental Psychologist, PhD",
    img: "https://img.freepik.com/free-photo/muslim-woman-black-hijab-working-hospital_651396-1771.jpg?t=st=1751110389~exp=1751113989~hmac=01211478b9bc68c22351b6137f9c68a0b4679a48b2c262c29644a11121ae1a50&w=1380" // Placeholder image
  },
  {
    id: 6,
    name: "Dr. Ben Carter",
    qualification: "Child & Adolescent Specialist, MD",
    img: "https://img.freepik.com/free-photo/confident-male-psychologist-sitting-chair-front-her-female-patient_23-2148036549.jpg?t=st=1751109672~exp=1751113272~hmac=78852fc12b47e76cf361ccfd98f48762860c7ab709ad2d69ee24360ff4402372&w=1380" // Placeholder image
  },
];

const page = () => {
  // State to keep track of booked therapists by their IDs
  const [bookedTherapistIds, setBookedTherapistIds] = useState(new Set());

  // Function to handle booking a therapist
  const handleBookNow = (therapistId: number) => {
    setBookedTherapistIds((prevIds) => new Set(prevIds.add(therapistId)));
    // In a real application, you would typically trigger an API call here
    // to process the booking and handle success/failure.
    console.log(`Therapist with ID ${therapistId} booked!`);
  };

  return (
    // Main container for the page: fills screen, light gradient background
    <div className='min-h-screen w-screen bg-gradient-to-br from-blue-50 to-white font-sans text-gray-800 p-4 sm:p-8'>
      {/* Content wrapper for centering and max-width */}
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 py-10'>

        {/* Left Section: Text Content (Qualifications and How They Help) */}
        <div className='lg:w-1/2 flex flex-col p-6 rounded-2xl bg-white shadow-xl border border-blue-100'>
          <h1 className='text-4xl sm:text-5xl font-extrabold text-sky-700 mb-6 leading-tight'>
            Find Your Path to Well-being
          </h1>
          <p className='text-lg text-gray-700 mb-4'>
            Our highly qualified therapists are dedicated to supporting you on your journey towards mental health and emotional balance.
            They adhere to stringent professional standards, ensuring you receive the best care.
          </p>

          <h2 className='text-2xl sm:text-3xl font-bold text-sky-600 mb-4 mt-6'>
            Minimum Qualifications & Expertise
          </h2>
          <ul className='list-disc list-inside text-base text-gray-700 mb-6 space-y-2'>
            <li>
              **Advanced Degrees:** All therapists hold a Master's or Doctorate degree (e.g., MA, MSW, PsyD, PhD) in fields such as Clinical Psychology, Counseling, Social Work, or Marriage and Family Therapy.
            </li>
            <li>
              **Licensure:** Fully licensed by state or national boards, ensuring they meet strict professional and ethical standards.
            </li>
            <li>
              **Specialized Training:** Many have additional certifications in specific modalities like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), EMDR, or Family Systems Therapy.
            </li>
            <li>
              **Years of Experience:** Our team brings diverse backgrounds and extensive experience in addressing a wide range of mental health concerns.
            </li>
          </ul>

          <h2 className='text-2xl sm:text-3xl font-bold text-sky-600 mb-4 mt-6'>
            How Our Therapists Can Help You
          </h2>
          <p className='text-base text-gray-700 mb-4'>
            Therapy offers a safe and confidential space to explore your thoughts, feelings, and behaviors without judgment. Our therapists can help you:
          </p>
          <ul className='list-disc list-inside text-base text-gray-700 space-y-2'>
            <li>Develop coping strategies for stress, anxiety, and depression.</li>
            <li>Improve communication skills and strengthen relationships.</li>
            <li>Navigate life transitions, grief, or trauma.</li>
            <li>Gain self-awareness and foster personal growth.</li>
            <li>Manage chronic conditions or emotional challenges.</li>
            <li>Set and achieve meaningful personal goals.</li>
          </ul>
        </div>

        {/* Right Section: Therapist Cards Grid */}
        <div className='lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {therapists.map((therapist) => {
            const isBooked = bookedTherapistIds.has(therapist.id);
            return (
              <div
                key={therapist.id}
                className='bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden flex flex-col group cursor-pointer
                           transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out'
              >
                <div className='relative h-48 w-full overflow-hidden'>
                  <img
                    src={therapist.img}
                    alt={therapist.name}
                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div> {/* Dark overlay for text contrast */}
                </div>

                <div className='p-5 flex flex-col flex-grow items-center text-center'>
                  <h3 className='text-xl font-bold text-sky-800 mb-2'>{therapist.name}</h3>
                  <p className='text-md text-gray-600 mb-4 flex-grow'>{therapist.qualification}</p>
                  <button
                    onClick={() => handleBookNow(therapist.id)}
                    disabled={isBooked} // Disable button if already booked
                    className={`w-full py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2
                               transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                               ${isBooked
                                  ? 'bg-green-500 text-white cursor-not-allowed focus:ring-green-400 focus:ring-offset-white'
                                  : 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400 focus:ring-offset-2'
                                }`}
                  >
                    {isBooked ? (
                      <>
                        Booked
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </>
                    ) : (
                      'Book Now'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;