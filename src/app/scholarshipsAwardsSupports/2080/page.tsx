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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Awards, Fellowships, Scholarships & Support Rules</h1>
      <div className="space-y-6">
        {awardsData.map((award, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{award.category}</h2>
            {award.institution && <p className="text-sm text-gray-700">{award.institution}</p>}
            {award.year && <p className="text-sm text-gray-700">Year: {award.year}</p>}
            <ul className="mt-2 list-disc list-inside">
              {award.recipients.map((recipient, i) => (
                <li key={i} className="text-gray-800">{recipient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;