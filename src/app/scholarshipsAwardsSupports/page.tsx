"use client"; // Ensure this is a client component

const ScholarshipsAwardsSupports = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6"></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column: Scholarships, Awards, and Supports */}
        <div>
          {/* Outstanding Student Awards */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Outstanding Student Awards</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Bhag Bhairav Secondary School, Sunkoshi-1, Sindhupalchok</strong>
                <ul className="pl-8">
                  <li>Recipient: Anjeeta Pahari (2080)</li>
                </ul>
              </li>
              <li>
                <strong>Shree Kalika Secondary School, Sunkoshi-3, Sindhupalchok</strong>
                <ul className="pl-8">
                  <li>Recipient: Anuja Majhi (2080)</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Outstanding Award - Tribhuvan University */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Outstanding Award - Tribhuvan University</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Central Department of Mathematics, Kirtipur</li>
              <ul className="pl-8">
                <li>Mr. Dhurba Paudel (2076)</li>
                <li>Ms. Bhuvaneshwori Giri (2076)</li>
                <li>Mr. Sandesh Thakuri (2077)</li>
                <li>Ms. Jayanti Saud (2077)</li>
              </ul>
            </ul>
          </section>

          {/* Professor Dr. Urmila Pyakurel Madhushree Literary Award */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professor Dr. Urmila Pyakurel Madhushree Literary Award (2080/81)</h2>
            <ul className="list-disc pl-6">
              <li>Recipient: Dr. Nawaraj Lamsal</li>
            </ul>
          </section>

          {/* Research Encouragement Grant */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Research Encouragement Grant</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recipients:</li>
              <ul className="pl-8">
                <li>Ms. Jayanti Saud</li>
                <li>Alina Shrestha</li>
              </ul>
            </ul>
          </section>

          {/* Support for Cancer Patients */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Support for Cancer Patients</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recipients:</li>
              <ul className="pl-8">
                <li>Ms. Bimala Mishra</li>
                <li>Pusparaj Bhandari</li>
              </ul>
            </ul>
          </section>
        </div>

        {/* Second Column: Fellowship Award Criteria */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Fellowship Award Criteria</h2>
          <p className="mb-4">
            The Fellowship Award recognizes exceptional individuals who have demonstrated outstanding
            achievements in their respective fields. The award criteria include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Academic excellence in relevant disciplines</li>
            <li>Significant contribution to research and development</li>
            <li>Commitment to societal development through practical application of knowledge</li>
            <li>Leadership in the respective field</li>
            <li>Commitment to mentoring the next generation of scholars</li>
          </ul>

          <div className="mt-6">
            <a
              href="/fellowship-criteria.pdf"
              className="text-blue-600 underline"
              download
            >
              Download Fellowship Award Criteria (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsAwardsSupports;
