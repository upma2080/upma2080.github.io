"use client";

import Link from "next/link";

const articles = [
  {
    title: "Inflow-dependent Quickest Multi-commodity Flow Problem with Partial Lane Reversals",
    authors: "Khanal, D.P., Gupta S.P., Pyakurel, U. and Dhamala, T.N.",
    journal: "Journal of Industrial and Management Optimization (2025)",
    doi: "https://doi.org/10.3934/jimo.2025027",
  },
  {
    title: "Abstract Maximum Flow with Partial Switching",
    authors: "Khanal, D.P., Pyakurel, U. and Dhamala, T.N.",
    journal: "Journal of Uncertain System (2025)",
    doi: "https://doi.org/10.1124/S1752890925500060",
  },
  {
    title: "Maximum Dynamic FlowLoc with Intermediate Storage: A Temporally Repeated Approach",
    authors: "Wagle, S., Khanal, D.P., Pyakurel, U., Dempe, S. and Dhamala, T.N.",
    journal: "Operations Research Forum, 6(1), 1-20 (2025)",
    doi: "https://doi.org/10.1007/s43069-024-00410-z",
  },
  {
    title: "Bi-level Problem with Facility Allocation for Evacuation Planning",
    authors: "Khanal, D.P., Pyakurel, U., Dhamala, T.N. and Dempe, S.",
    journal: "GANIT: Journal of Bangladesh Mathematical Society, 44(2), 17-27 (2024)",
    doi: "https://doi.org/10.3329/ganit.v44i2.78528",
  },
  {
    title: "Prioritized Maximum Multi-Commodity Flow in Evacuation Planning",
    authors: "Khanal, D.P., Pyakurel, U., Dhamala, T.N., Dempe, S. and Schiermeyer, I.",
    journal: "Springer - Dynamics of Disasters, Vol 217 (2024)",
    doi: "https://doi.org/10.1007/978-3-031-74006-0_5",
  },
  {
    title: "Generalized Maximum Flow Over Time with Intermediate Storage",
    authors: "Dhamala, T.N., Adhikari M.C., Khanal, D.P. and Pyakurel, U.",
    journal: "Annals of Operations Research, 335, 111–134 (2024)",
    doi: "https://doi.org/10.1007/s10479-023-05773-w",
  },
  {
    title: "Prioritized Max-FlowLoc for Evacuation Planning",
    authors: "Wagle S., Pyakurel, U. and Dhamala, T.N.",
    journal: "The Nepali Mathematical Sciences Report, 40(1-2), 106-119 (2023)",
    doi: "https://doi.org/10.3126/nmsr.v40i1-2.61506",
  },
  {
    title: "Optimal Reconfiguration of Network with Variant Transmission Times on Arcs",
    authors: "Gupta S.P., Pyakurel, U. and Dhamala, T.N.",
    journal: "The Nepali Mathematical Sciences Report, 40(1-2), 11-33 (2023)",
    doi: "https://doi.org/10.3126/nmsr.v40i1-2.61492",
  },
  {
    title: "FlowLoc Problems with Maximum Excess Flow",
    authors: "Dhamala, T.N., Wagle S. and Pyakurel, U.",
    journal: "Journal of Industrial and Management Optimization, 19(12), 8851-8870 (2023)",
    doi: "https://doi.org/10.3934/jimo.2023064",
  },
  {
    title: "Quickest Multi-commodity Contraflow with Non-symmetric Traversal Times",
    authors: "Gupta S.P., Pyakurel, U. and Dhamala, T.N.",
    journal: "Mathematics and Computer Science, Vol 2, 239-250 (July 2023)",
    doi: "https://doi.org/10.1002/9781119896715.ch16",
  },
];

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Articles of Prof. Pyakurel After Death
      </h1>

      <p className="text-gray-700 text-lg mb-10 leading-relaxed">
        The articles listed above represent a remarkable body of work that continues to contribute to the fields of operations research, optimization, and evacuation planning. Although these publications appeared after her passing, they stand as a testament to her enduring dedication, intellectual rigor, and profound impact on the academic community. Her collaborative spirit and innovative research have left an indelible mark on the discipline, inspiring future generations of researchers to build upon her foundational work. These posthumous publications not only honor her legacy but also ensure that her contributions remain accessible and influential in advancing knowledge and solving real-world problems. Her work will continue to be celebrated and remembered as a cornerstone of progress in the field.

      </p>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-700">{article.title}</h2>
            <p className="text-gray-800 mt-2">{article.authors}</p>
            <p className="italic text-gray-600 mt-1">{article.journal}</p>
            <Link
              href={article.doi}
              target="_blank"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              View DOI
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
