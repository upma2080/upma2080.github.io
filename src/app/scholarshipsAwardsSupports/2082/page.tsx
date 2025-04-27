"use client";

import Link from "next/link";

const publications = [
  {
    authors: "Dhamala, T.N., Khanal, D.P. and Dempe, S.",
    title: "Network restructuring for dynamic flow improvement",
    journal: "Annals of Operations Research",
    year: 2025,
    doi: "https://doi.org/10.1007/s10479-025-06496-w",
    journalRank: "Q1"
  },
  {
    authors: "Adhikari, M.C. and Dhamala, T.N.",
    title: "Generalized Maximum Flow with Excess Storage on Series Parallel Lossy Networks",
    journal: "Operations Research Society of China",
    year: 2025,
    doi: "#", // No DOI for accepted papers
    journalRank: "Q2",
    status: "Accepted for publication"
  }
];

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Prof. Dr. Urmila Pyakurel Publication Sponsorship
      </h1>

      <p className="text-gray-700 text-lg mb-10 leading-relaxed">
        On the occasion of the second memorial day of Prof. Dr. Urmila Pyakurel, the{" "}
        <strong>"Prof. Dr. Urmila Pyakurel Madhushree Academy"</strong> awarded two honoured papers, which are as follows:
      </p>

      <div className="space-y-8">
        {publications.map((publication, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <p className="font-semibold text-gray-800">{publication.authors}</p>
            <h2 className="text-xl font-semibold text-blue-700 mt-2">{publication.title}</h2>
            <p className="italic text-gray-600 mt-1">{publication.journal} ({publication.year})</p>
            {publication.doi !== "#" && (
              <Link
                href={publication.doi}
                target="_blank"
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                View DOI
              </Link>
            )}
            <p className="mt-3 text-sm text-gray-500">Journal Rank: {publication.journalRank}</p>
            {publication.status && (
              <p className="mt-3 text-sm text-gray-500">{publication.status}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
