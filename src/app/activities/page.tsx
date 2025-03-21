"use client";

import Image from "next/image";

export default function Activities() {
  return (
    <main className="container mx-auto px-6 py-16 space-y-24">
      {/* Page Title */}

      {/* Annual General Meeting */}
      <section className="bg-white p-10 rounded-3xl shadow-lg space-y-8 border-l-8 border-blue-500">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-blue-800">Annual General Meeting</h2>
          <p className="text-gray-600 text-lg">📅 Date: August 24, 2024 (8th of Bhadra 2081)</p>
        </div>

        {/* Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/tribute1.jpg"
            alt="AGM Image 1"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/tribute3.jpg"
            alt="AGM Image 2"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Exact Text Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
          <p>
            On the 8th of Bhadra, 2081, the annual general meeting of the Academy was held, during which the progress report for the fiscal year 80/81 and the proposed programs for the upcoming year, presented by Secretary Uddhab Prasad Pyakurel, were unanimously approved. The financial report and audit report, presented by Treasurer Nawaraj Sapkota, were also passed without objections.
          </p>
          <p>
            In recognition of academic excellence, students who achieved outstanding results in mathematics from the Central Department of Mathematics, Tribhuvan University, during the 2076 and 2077 academic sessions were rewarded. Additionally, student awards were distributed to those who excelled in the SEE from Bagh Bhairab School and at the basic education level from Kalika School. In the field of literature, Dr. Nawaraj Lamsal was honored with the Professor Dr. Urmila Pyakurel Literary Award for his contributions.
          </p>
          <p>
            The event featured insightful speeches from Shiva Prasad Neupane, Dr. Nawaraj Lamsal, Rudra Hari Gyanwali, and the chief guest, Professor Dr. Rajendra Prasad Baral, highlighting the institution’s dedication to fostering academic excellence, cultural enrichment, and intellectual development within the community. According to Shiva Prasad Neupane, Urmila was brilliant from childhood and always ranked at the top. Dr. Rajendra Prasad Baral noted that Urmila was highly dedicated to her work and passionate about her field. Dr. Nawaraj Lamsal highlighted her exceptional talent in literature.
          </p>
          <p>
            During the meeting, Professor Dr. Tanka Nath Dhamala, chairperson of the Academy and the doctoral advisor of Urmila, expressed his views, emphasizing her significant and continuous contributions to her field of expertise. He also assured that the Academy and his research group would continue to support Urmila’s research aspirations. The program was conducted by EC member Rajendra Prasad Pyakurel, who provided an overview of her journey from childhood to the present.
          </p>
          <p>
            To honor Urmila’s legacy, Rudra Hari Gyanwali handed over to the Academy the recognition awarded to her by the Nepal Mathematical Trust.
          </p>
        </div>
      </section>

      {/* Tribute Ceremony */}
      <section className="bg-white p-10 rounded-3xl shadow-lg space-y-8 border-l-8 border-blue-500">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-blue-800">Tribute Ceremony on the 45th Memorial Day of Professor Dr. Urmila Pyakurel</h2>
          <p className="text-gray-600 text-lg">📅 Date: May 27, 2023 (13th of Jestha 2080)</p>
        </div>

        <Image
          src="/tribute2.jpg"
          alt="Tribute Ceremony"
          width={900}
          height={500}
          className="rounded-xl shadow-lg"
        />

        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
          <p>
            On the 45th day of the untimely passing of Professor Dr. Urmila Pyakurel, a heartfelt condolence ceremony was held in the presence of her family, friends, teachers, students, and well-wishers. Born on 6th Asar 2037 in Kalika Ukhubari, Sunkoshi Municipality-3, as the youngest daughter of the late Shri Devinath Pyakurel and the late Manamaya Pyakurel, Dr. Pyakurel’s immense contributions to academia and society were deeply remembered and honored.
          </p>
          <p>
            To preserve her extraordinary legacy, the Professor Dr. Urmila Pyakurel Madhushree Foundation was officially announced during the ceremony. Several distinguished speakers, including Professor Dr. Tanka Nath Dhamala, Professor Dr. Rajendra Prasad Baral, Arun Nepal, Subodh Sapkota, Uddhab Prasad Pyakurel, Rajendra Prasad Pyakurel, Tapendra Timilsina, and Jayanti Saud, shared their heartfelt words, reflecting on her life, achievements, and the profound loss felt by all. In this moment of remembrance and condolence, attendees expressed their commitment to carrying forward her unfinished work while also offering their prayers for the eternal peace of her soul.
          </p>
        </div>
      </section>
    </main>
  );
}
