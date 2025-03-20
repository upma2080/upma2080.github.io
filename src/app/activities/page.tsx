"use client";

import Image from "next/image";

export default function ActivitiesPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">
        Tribute Ceremony
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <strong>Date:</strong> May 27, 2023 (13th of Jestha 2080)
      </p>

      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        On the 45th day of the untimely passing of Professor Dr. Urmila Pyakurel,
        a heartfelt condolence ceremony was held in the presence of her family, 
        friends, teachers, students, and well-wishers. Born on 6th Asar 2037 in 
        Kalika Ukhubari, Sunkoshi Municipality-3, as the youngest daughter of the late 
        Shri Devinath Pyakurel and the late Manamaya Pyakurel, Dr. Pyakurel’s immense 
        contributions to academia and society were deeply remembered and honored.
      </p>

      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        To preserve her extraordinary legacy, the <span className="font-semibold text-purple-700">Professor Dr. Urmila Pyakurel Madhushree Foundation</span> was officially announced during the ceremony. Several distinguished speakers, including Professor Dr. Tanka Nath Dhamala, Professor Dr. Rajendra Prasad Baral, Arun Nepal, Subodh Sapkota, Uddhab Prasad Pyakurel, Rajendra Prasad Pyakurel, Tapendra Timilsina, and Jayanti Saud, shared their heartfelt words, reflecting on her life, achievements, and the profound loss felt by all.
      </p>

      <p className="text-gray-800 text-lg leading-relaxed mb-8">
        In this moment of remembrance and condolence, attendees expressed their 
        commitment to carrying forward her unfinished work while also offering 
        their prayers for the eternal peace of her soul.
      </p>

      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Ceremony Highlights</h2>

      {/* Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/tribute1.jpg" // Replace with your actual image path
            alt="Tribute Ceremony Photo 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/tribute2.jpg" // Replace with your actual image path
            alt="Tribute Ceremony Photo 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/tribute3.jpg" // Replace with your actual image path
            alt="Tribute Ceremony Photo 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
