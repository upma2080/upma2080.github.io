import React from "react";

const awardsData = [
  {
    category: "Prof. Dr. Urmila Pyakurel Best Student Scholarship (Kalika Primary School)",
    institution: "Bhag Bhairav Secondary School, Sunkoshi-1, Sindhupalchok",
    recipients: ["Anjeeta Pahari (2080)"]
  },
  {
    category: "Prof. Dr. Urmila Pyakurel Best Student Scholarship (SEE Topper)",
    institution: "Shree Kalika Secondary School, Sunkoshi-3, Sindhupalchok",
    recipients: ["Anuja Majhi (2080)"]
  },
  {
    category: "Prof. Dr. Urmila Pyakurel Best Student Award",
    institution: "Tribhuvan University, Central Department of Mathematics, Kirtipur",
    recipients: [
      "Mr. Dhurba Paudel (2076)",
      "Ms. Bhuvaneshwori Giri (2076)",
      "Mr. Sandesh Thakuri (2077)",
      "Ms. Jayanti Saud (2077)"
    ]
  },
  {
    category: "Prof. Dr. Urmila Pyakurel Madhushree Award",
    year: "2080/81",
    recipients: ["Dr. Nawaraj Lamsal"]
  },
  {
    category: "Prof. Dr. Urmila Pyakurel Grant",
    recipients: ["Ms. Jayanti Saud", "Alina Shrestha"]
  },
  {
    category: "Cancer Patient Support",
    recipients: ["Ms. Bimala Mishra", "Pusparaj Bhandari"]
  }
];

const AwardsPage = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Awards, Fellowships, Scholarships & Support Rules
      </h1>

      <div className="space-y-8">
        {awardsData.map((award, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-700">{award.category}</h2>
            {award.institution && (
              <p className="text-gray-800 mt-2">{award.institution}</p>
            )}
            {award.year && (
              <p className="text-gray-800 mt-2">Year: {award.year}</p>
            )}
            <ul className="mt-3 list-disc list-inside">
              {award.recipients.map((recipient, i) => (
                <li key={i} className="text-gray-800">{recipient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AwardsPage;
