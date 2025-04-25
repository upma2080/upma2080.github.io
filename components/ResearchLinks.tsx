"use client";

import Link from "next/link";
import { useState, useEffect } from "react";


const researchLinks = [
  {
    title: "Prof. Dr. Urmila Pyakurel",
    initialContent: (
      <>
        Driven by an insatiable thirst for knowledge, Prof. Dr. Urmila Pyakurel pursued higher education at Tribhuvan University, where she earned a Master’s degree in Mathematics, followed by a Doctorate of Philosophy in Mathematics on the topic{" "}
        <span className="italic">"Evacuation Planning Problem with Contraflow Approach"</span>, under the supervision of her doctoral father,{" "}
        <a
          href="https://dhamalatn.cdmathtu.edu.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Prof. Dr. Tanka Nath Dhamala
        </a>.
      </>
    ),
    moreContent: [
      <>
        Professor Pyakurel began her illustrious career as a lecturer at{" "}
        <a
          href="https://www.cdmathtu.edu.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Central Department of Mathematics
        </a>, Tribhuvan University, where her passion for teaching and mentorship quickly became evident. Through her dedication and hard work, she rose through the ranks, securing the position of Associate Professor through an open competition—a testament to her exceptional abilities and unwavering commitment to her field. Her journey culminated in her appointment as a Professor, making her the youngest Professor of Mathematics at Tribhuvan University.
      </>,
      <>
        Beyond the classroom, she made significant contributions to academic research, authoring numerous publications in esteemed national and international journals. Her active participation and presentations at both national and international conferences further demonstrated her standing as a prominent and influential figure in the field of mathematics.
      </>,
      <>
        Throughout her academic career, Professor Pyakurel received numerous awards and honors, including the NAST Young Scientist Award and Humboldt Research Projects. She worked with Prof. Dr. Stephan Dempe at{" "}
        <a
          href="https://tu-freiberg.de/en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          TU Bergakademie Freiberg
        </a>, Germany, as a Post-Doctoral researcher under the Georg Forster Fellowship of the{" "}
        <a
          href="https://www.humboldt-foundation.de/en/explore/alexander-von-humboldt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Alexander von Humboldt Foundation
        </a>. Her legacy as a Humboldtian and an academician continues to inspire future generations.
      </>
    ]
  },
  // More entries can be added here following the same format
];

export default function ResearchLinks() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <main className="container px-6 py-12">
      

      <div className="space-y-8">
        {researchLinks.map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-700">{item.title}</h2>
            <p className="mt-4">{item.initialContent}</p>

            {expandedIndex === index && item.moreContent.map((content, i) => (
              <p className="mt-4" key={i}>{content}</p>
            ))}

            <button
              className="mt-4 text-blue-900 underline text-sm"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {expandedIndex === index ? "Show Less" : "Explore More"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
