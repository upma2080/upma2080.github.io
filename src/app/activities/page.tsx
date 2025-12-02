"use client";

import Image from "next/image";

export default function Activities() {
  return (
    <main className="container mx-auto px-6 py-16 space-y-24">
      {/* Page Title */}

      <section className="bg-white p-10 rounded-3xl shadow-lg space-y-8 border-l-8 border-blue-500">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-blue-800">Second AGM Meeting and Award Ceremony</h2>
          <p className="text-gray-600 text-lg">📅 Date: November 15, 2025 ( Kartik 29, 2082)</p>
          <p>The Prof. Dr. Urmila Pyakurel Madhushree Foundation held its second Annual General Meeting (AGM) on 29 Kartik 2082 B.S. 
            in Kathmandu. During the event, the foundation—established in memory of Tribhuvan University’s late mathematics professor 
            Dr. Urmila Pyakurel—honored four individuals in the academic field and one in the literary field. Outstanding postgraduate 
            students from the TU Department of Mathematics, Gangaram Joshi and Vidya Pokharel, received NPR 25,000 each along with certificates. 
            Likewise, Sabina Budhathoki, the top SEE 2081 student from Bagh  Bhairav Secondary School, Thokarpa, Sindhupalchok, and Dipesh 
            Bishwokarma, the top student from Kalika Basic School, Ukhubari, were awarded NPR 15,000 and NPR 10,000 respectively. 
            The literary award, established to honor Dr. Pyakurel’s literary legacy, was presented to epic poet Chandra Prasad Neupane, 
            who received NPR 20,000 and a certificate.</p>
        </div>

        {/* Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/agm082-1.png"
            alt="AGM Image 1"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/agm082-2.png"
            alt="AGM Image 2"
            width={600}
            height={355}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Exact Text Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
          <p>
          The awards were presented by the chief guest Prof. Dr. Shailendra Kumar Mishra of the Department of Mathematics, 
            Institute of Engineering, Tribhuvan University, along with Foundation Chair Prof. Dr. Tanka Nath Dhamala and Secretary 
            Uddhav Prasad Pyakurel. Secretary Uddhav Prasad Pyakurel and Treasurer Nawaraj Sapkota also presented their annual reports 
            during the assembly. Several speakers, including Prof. Mishra, awardees Vidya Pokharel and Chandra Prasad Neupane, Associate 
            Professor Tulsi Nepal, teacher Chhatra Prasad Neupane, and Babita Paudel, President of the Nepal-German Academic Association 
            and Vice-President of the Academy Kedar Prasad Bhattarai, highlighted Dr. Pyakurel’s remarkable academic and literary contributions.
            The program was chaired by the President of the foundation. Dr. Pyakurel had become a professor at the age of 42 and passed away 
            two years ago. The foundation was created using NPR 5 million collected for her medical treatment, supplemented by additional 
            contributions from family members.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/agm082-3.png"
            alt="AGM Image 1"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/agm082-4.png"
            alt="AGM Image 2"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
        <h2 className="text-1xl font-semibold text-blue-800">Honoring Excellence in Memory of Prof. Urmila Pyakurel</h2>
      </section>

      <section className="bg-white p-10 rounded-3xl shadow-lg space-y-8 border-l-8 border-blue-500">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-blue-800">Second Memorial Day of Prof. Dr. Urmila Pyakurel</h2>
          <p className="text-gray-600 text-lg">📅 Date: April 19, 2025 ( Baisakh 6, 2082)</p>
          <p>On the occasion of the second memorial day of Prof. Dr. Urmila Pyakurel, the &quot;Prof. Dr.
Urmila Pyakurel Madhushree Academy&quot; honored two researchers, Dr. Durga Prasad
Khanal and Mr. Mohan Chandra Adhikari, with awards in recognition of their contributions
to solving traffic flow problems and minimizing congestion. The awarded research papers were
co-authored by Prof. Dr. Tanka Nath Dhamala and Prof. Dr. Stephan Dempe, and by Prof.
Dr. Tanka Nath Dhamala, respectively.</p>
        </div>

        {/* Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/act1.jpg"
            alt="AGM Image 1"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/act2.jpg"
            alt="AGM Image 2"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Exact Text Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
          <p>
          During the event, a book In Memory of Urmila was officially released, alongside the launch of the academy's official website. The book contains a total of 35 articles written in her honor. At the commencement of the program, all distinguished guests and well-wishers present paid a solemn and heartfelt tribute to the late Urmila. Following this, a one-minute silence was observed, and flowers and garlands were respectfully offered to her photograph in remembrance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/act3.jpg"
            alt="AGM Image 1"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/act4.jpg"
            alt="AGM Image 2"
            width={600}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
          <p>
          Speaking at the program, the chief guest, Mr. Madhav Sapkota, a member of the House of Representatives from Sindhupalchowk Constituency-1, emphasized the importance of linking the congestion minimization and evacuation planning techniques developed by Professor Pyakurel and her research team to state policies. He also assured that he would incorporate the road safety bill into discussions within the Infrastructure Committee of the House of Representatives.
          </p>
          <p>
          Likewise, Prof. Dr. Tanka Nath Dhamala, Chairman of the Foundation and the doctoral father of Professor Pyakurel, shared that the award serves as encouragement for researchers to extend the foundational ideas developed by Professor Pyakurel and her co-authors. He also highlighted the academy’s commitment to working in the fields of literature and health. Prof. Dhamala expressed deep gratitude to the well-wishers who contributed to the establishment of the Academy and urged everyone to continue their moral and scientific support to strengthen it in the future. He also thanked all those who played a role in making the event a great success.
          </p>
          <p>
          Former Speaker of Bagmati Province, Mr. Sanu Kumar Shrestha, expressed regret over Nepal’s insufficient focus on research-based development, describing it as a significant national flaw. He emphasized Urmila's belief that practicing meditation brings concentration and peace to life. On this occasion, Prof. Dr. Kanhaiya Jha, former Dean of Kathmandu University; Mr. Shiva Prasad Neupane, former principal of Bagh Bhairav Secondary School in Sindhupalchowk; Mrs. Binda Acharya, a yoga "Guru"; Dr. Babita Paudel, president of the Nepal German Academic Association; and Mr. Kedar Prasad Bhattarai, Vice President of the Academy, shared their fond memories of Professor Pyakurel and spoke about various aspects of her remarkable life. They particularly expressed that Urmila's dedication to her ongoing research, her trust in her research father, and her belief in yoga and meditation are highly commendable. Her achievement as a young Nepali woman in becoming a Humboldtian is a remarkable milestone in the history of young Nepali scientists. Mr. Rajendra Prasad Pyakurel, an EC member of the Academy, welcomed the participants as the MC of the program.
          </p>
        </div>
      </section>

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
