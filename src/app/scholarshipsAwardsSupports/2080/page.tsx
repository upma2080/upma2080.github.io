import React from "react";

const awardsData = [
  {
    category: "Outstanding Student Award",
    institution: "Bhag Bhairav Secondary School, Sunkoshi-1, Sindhupalchok",
    recipients: ["Anjeeta Pahari (2080)"]
  },
  {
    category: "Outstanding Student Award",
    institution: "Shree Kalika Secondary School, Sunkoshi-3, Sindhupalchok",
    recipients: ["Anuja Majhi (2080)"]
  },
  {
    category: "Outstanding Award",
    institution: "Tribhuvan University, Central Department of Mathematics, Kirtipur",
    recipients: [
      "Mr. Dhurba Paudel (2076)",
      "Ms. Bhuvaneshwori Giri (2076)",
      "Mr. Sandesh Thakuri (2077)",
      "Ms. Jayanti Saud (2077)"
    ]
  },
  {
    category: "Professor Dr. Urmila Pyakurel Madhushree Literary Award",
    year: "2080/81",
    recipients: ["Dr. Nawaraj Lamsal"]
  },
  {
    category: "Research Encouragement Grant",
    recipients: ["Ms. Jayanti Saud", "Alina Shrestha"]
  },
  {
    category: "Support for Cancer Patients",
    recipients: ["Ms. Bimala Mishra", "Pusparaj Bhandari"]
  }
];

const AwardsPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Scholarships, Awards & Supports</h1>
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