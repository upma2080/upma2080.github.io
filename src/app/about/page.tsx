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
          Honoring <span className="text-blue-900">Prof. Dr. Urmila Pyakurel</span>
        </h1>

        {/* Always Visible Paragraphs */}
        <p className="text-gray-700 text-lg mb-6 text-justify">
          It is with profound respect and gratitude that we honor the life and legacy of Prof. Dr. Urmila Pyakurel, also known as Madhushree, the guiding light and inspiration.
        </p>
        <p className="text-gray-700 text-lg mb-6 text-justify">
          Born in June 1980 in Sunkoshi Rural Municipality, Sindhupalchok, Nepal, as the youngest daughter of Debi Nath and Mana Maya Pyakurel, Professor Pyakurel displayed an extraordinary curiosity and dedication to learn from her earliest years. Her academic journey began at Kalika Aadharbhut Bidhyalaya, Sindhupalchowk, where she laid the foundation for a lifelong pursuit of knowledge. She completed her school education at Bagh Bhairabh Secondary School, Sindhupalchowk.
        </p>
        <p className="text-gray-700 text-lg mb-6 text-justify">
          Before embarking on her advanced research journey, Urmila was known as Madhushree—a name under which she composed numerous poems and stories in the Nepali language. In tribute to her literary legacy, the Academy aspires to publish her works and nurture emerging voices in Nepali literature, fostering its continued growth and enrichment.
        </p>

        {/* Hidden Content */}
        {showMore && (
          <div className="text-gray-700 text-lg text-justify space-y-4 transition-all duration-500">
            <p>
              During her research, Professor Pyakurel caught a severe disease that required significant medical attention. Despite a persistent illness, she demonstrated remarkable resilience and dedication to her research, refusing to let her health challenges disrupt the progress of her research. Even during the most difficult days, she remained actively engaged with her research group, providing guidance, organizing and participating in virtual meetings, conferences, and workshops.
            </p>
            <p>
              Her ability to balance her health challenges with her professional responsibilities highlighted her exceptional strength of character and deep commitment to advancing knowledge in her field. The research group, motivated by her example, are working even harder to honor her efforts, ensuring that the project progressed smoothly. Her story is a poignant example of how passion and determination can overcome even the most daunting obstacles, leaving a lasting impact on both her research and the lives of those who had the privilege of working alongside her.
            </p>
            <p>
              On behalf of the Academy, we would like to acknowledge our deepest gratitude to the countless national and international individuals who contributed selflessly whether through personal helps, donations, organizing events, rallied together to raise fund or by spreading the supporting words through the social medias.
            </p>
            <p>
              Similarly, we are thankful to the Alexander von Humboldt Foundation, different academic institutions, scientists, family members, research group members, university family members, students, communities, organizations, well-wishers and press for their supports during the challenging times of Professor Pyakurel’s treatment. In addition, medical professionals and doctors are grateful for being involved in her treatment.
            </p>
            <p>
              Your collective efforts not only supported financially but also demonstrated the power of unity and solidarity in the time of need. Your unwavering support, both moral and financial, provided immense strength and hope to the professor, her family, and the research group, enabling them to transform her vision into a lasting legacy. Your kindness and dedication to support a beloved mentor, educator, researcher and scientist will forever be remembered.
            </p>
            <p>
              The Academy, established with funds raised for her treatment, is committed to advancing her research aspirations through encouraging young scholars. We sincerely appreciate all national and international co-researchers, sponsors, and scientific pioneers associated with Prof. Pyakurel for their valuable contributions.
            </p>
            <p>
              We remain highly optimistic that your future research whether in mathematics or Nepali literature, both of which were Urmila's passions will serve as a significant milestone in fulfilling the Academy's mission.
            </p>
            <p>
              <strong>President and Academy Family</strong><br />
              Professor Dr. Urmila Pyakurel Madhushree Academy
            </p>
          </div>
        )}

        {/* Toggle Button */}
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
            src="/gallery3.jpg"
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
