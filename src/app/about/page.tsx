"use client";

import { useState } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-2">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
          Honoring <span className="text-blue-900 mb-6">Prof. Dr. Urmila Pyakurel</span>
        </h1>

        {/* Always Visible Paragraph */}
        <p className="text-gray-700 text-lg mb-6 text-justify">
        It is with profound respect and gratitude that we honor the life and legacy of Prof.
        Dr. Urmila Pyakurel, also known as Madhushree, the guiding light and inspiration.
        Born in June 1980 in Sunkoshi Rural Municipality, Sindhupalchok, Nepal, as
        the youngest daughter of Debi Nath and Mana Maya Pyakurel, Professor Pyakurel
        displayed an extraordinary curiosity and dedication to learn from her earliest years.
        Her academic journey began at Kalika Aadharbhut Bidhyalaya, Sindhupalchowk,
        where she laid the foundation for a lifelong pursuit of knowledge. She completed
        her school education at Bagh Bhairabh Secondary School, Sindhupalchowk, where
        her academic brilliance and compassionate nature began to shine.
        </p>

        {/* Hidden Content */}
        {showMore && (
          <div className="text-gray-700 text-lg text-justify space-y-4 transition-all duration-500">
            <p>
            Driven by an insatiable thirst for knowledge, she pursued higher education at
            Tribhuvan University, where she earned her Master's degree in Mathematics and
            later a Doctorate of Philosophy in Mathematics on the topic "Evacuation Planning
            Problem with Contraow Approach" under the supervision of her doctoral father
            Prof. Dr. Tanka Nath Dhamala. Her unwavering commitment to academic excel-
            lence and passion for research in the eld of network optimization, graph theory and
            many others, set the stage for a remarkable career.
            </p>
            <p>
            Professor Pyakurel began her illustrious career as a lecturer at Tribhuvan Uni-
            versity, where her passion for teaching and mentor-ship quickly became evident.

            Through her dedication and hard work, she rose through the ranks, securing the
            position of Associate Professor through an open competition, a testament to her
            exceptional abilities and commitment to her eld. Her journey culminated in her
            appointment as a Professor, making her the youngest Professor of Mathematics at
            Tribhuvan University. In her role as a professor, she was not only a gifted educator
            but also a mentor who nurtured the potential of her students. Her innovative teach-
            ing methods and ability to simplify complex concepts made her a beloved figure
            among her pupils.
            </p>
            <p>
            Beyond the classroom, she made signicant contributions to academic research,
            authoring numerous publications in esteemed national and international journals.
            Her active participation and presentations at both national and international con-
            ferences further demonstrated her standing as a prominent and inuential gure
            in the eld of mathematics. Throughout her academic career, Professor Pyakurel
            received numerous awards and honors, including NAST Young Scientist Award and
            Humboldt Research Projects, which underscored her contributions to specic sub-
            ject. She worked with Prof. Dr. Stephan Dempe at TU Bergakademie Freiberg, Ger-
            many as a Post-Doctoral researcher under Georg Forster Fellowship of the Alexander
            von Humboldt Foundation. Her research not only enriched the academic community
            but also had a lasting impact on her students and colleagues. She was a true inspi-
            ration, embodying the values of curiosity, perseverance, and excellence. Her legacy
            as a Humboldtian and an academician continues to inspire future generations.
            </p>
            <p>
            During her research, Professor Pyakurel caught a severe disease that required
            signicant medical attention. Despite a persistent illness, she demonstrated remark-
            able resilience and dedication to her research, refusing to let her health challenges
            disrupt the progress of her research. Even during the most dicult days, she re-
            mained actively engaged with her research group, providing guidance, organizing
            and participating the virtual meetings, conferences and workshops. Her ability to
            balance her health challenges with her professional responsibilities highlighted her
            exceptional strength of character and deep commitment to advancing knowledge in
            her eld. The research group, motivated by her example, are working even harder
            to honor her eorts, ensuring that the project progressed smoothly. Her story is a
            poignant example of how passion and determination can overcome even the most
            daunting obstacles, leaving a lasting impact on both her research and the lives of
            those who had the privilege of working alongside her.
            </p>
            <p>
            Before she began her advanced research, Urmila was well known by her pen
            name, Madhushree. As Madhushree, she wrote numerous poems and stories in the
            Nepalese language, reecting her love for nature and justice. The Academy aims
            to ourish by publishing her works and encouraging pioneering talents in Nepali
            literature for its further promotion.
            </p>
            <p>
            On behalf of the Academy, we would like to acknowledge our deepest gratitude
            to the countless national and international individuals who contributed selessly
            whether through personal helps, donations, organizing events, rallied together to
            raise fund or by spreading the supporting words through the social medias. Similarly,
            we are thankful to the Alexander von Humboldt Foundation, dierent academic
            institutions, scientists, family members, research group members, university family
            members, students, communities, organizations, well wishers and press for their
            supports during the challenging times of Professor Pyakurel's treatment. In addition,
            medical professionals and doctors are grateful for being involved in her treatment. It
            is through your generosity and compassion that we were able to ensure she received
            the best possible care during her illness.
            </p>
            <p>
            Your collective eorts not only supported nancially but also demonstrated the
            power of unity and solidarity in the time of need. Your unwavering support, both
            moral and nancial, provided immense strength and hope to the professor, her fam-
            ily, and the research group, enabling them to transform her vision into a lasting
            legacy. Your kindness and dedication to support a beloved mentor, educator, re-
            searcher and scientist will forever be remembered.
            </p>
            <p>
            The Academy, established with funds raised for her treatment, is committed to
            advancing her research aspirations through encouraging young scholars. We sin-
            cerely appreciate all national and international co-researchers, sponsors, and scien-
            tic pioneers associated with Urmila for their valuable contributions. We remain
            highly optimistic that your future researchwhether in mathematics or Nepali lit-
            erature, both of which were Urmila's passionswill serve as a signicant milestone
            in fullling the Academy's mission.
            </p>
            <p>
            President and Academy Family <br />
            Professor Dr. Urmila Puakurel Madhushree Academy
            </p>
          </div>
        )}

        {/* Explore More Button */}
        <button
          className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Explore More"}
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative">
        <div className="rounded-full bg-gradient-to-tr from-green-100 to-white p-2 shadow-lg">
          <Image
            src="/gallery3.jpg" // Replace with your actual image path
            alt="Prof. Dr. Urmila Pyakurel"
            width={450}
            height={400}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
