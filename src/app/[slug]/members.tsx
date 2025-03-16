"use client"; // Ensure this is a client component

const AcademyInfo = () => {
  return (
    <div className="container mx-auto p-6">

      {/* Ad Hoc Committee */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ad Hoc Committee of Academy (May 1, 2023 / 2080/01/18)</h2>
        <table className="table-auto w-full border-collapse mb-4">
          <thead>
            <tr>
              <th className="border p-2">SN</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">1</td><td className="border p-2">President</td><td className="border p-2">Prof. Dr. Tanka Nath Dhamala</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">Vice President</td><td className="border p-2">Mr. Kedar Prasad Bhattarai</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">Secretary</td><td className="border p-2">Mr. Uddhav Prasad Pyakurel</td></tr>
            <tr><td className="border p-2">4</td><td className="border p-2">Treasurer</td><td className="border p-2">Mr. Nawaraj Sapkota</td></tr>
            <tr><td className="border p-2">5</td><td className="border p-2">Member</td><td className="border p-2">Mr. Rajendra Prasad Pyakurel</td></tr>
            <tr><td className="border p-2">6</td><td className="border p-2">Member</td><td className="border p-2">Mr. Damodar Neupane</td></tr>
            <tr><td className="border p-2">7</td><td className="border p-2">Member</td><td className="border p-2">Ms. Erika Udas</td></tr>
            <tr><td className="border p-2">8</td><td className="border p-2">Member</td><td className="border p-2">Ms. Jayanti Saud</td></tr>
            <tr><td className="border p-2">9</td><td className="border p-2">Member</td><td className="border p-2">Ms. Laxmi Pyakurel</td></tr>
          </tbody>
        </table>
      </section>

      {/* Executive Committee */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Executive Committee of Academy (Feb 3, 2024 / 2080/10/20)</h2>
        <table className="table-auto w-full border-collapse mb-4">
          <thead>
            <tr>
              <th className="border p-2">SN</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">1</td><td className="border p-2">President</td><td className="border p-2">Prof. Dr. Tanka Nath Dhamala</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">Vice President</td><td className="border p-2">Mr. Kedar Prasad Bhattarai</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">Secretary</td><td className="border p-2">Mr. Uddhav Prasad Pyakurel</td></tr>
            <tr><td className="border p-2">4</td><td className="border p-2">Treasurer</td><td className="border p-2">Mr. Nawaraj Sapkota</td></tr>
            <tr><td className="border p-2">5</td><td className="border p-2">Member</td><td className="border p-2">Mr. Rajendra Prasad Pyakurel</td></tr>
            <tr><td className="border p-2">6</td><td className="border p-2">Member</td><td className="border p-2">Mr. Damodar Neupane</td></tr>
            <tr><td className="border p-2">7</td><td className="border p-2">Member</td><td className="border p-2">Ms. Erika Udas</td></tr>
            <tr><td className="border p-2">8</td><td className="border p-2">Member</td><td className="border p-2">Ms. Jayanti Saud</td></tr>
            <tr><td className="border p-2">9</td><td className="border p-2">Member</td><td className="border p-2">Ms. Laxmi Pyakurel</td></tr>
          </tbody>
        </table>
      </section>

      {/* Members of Academy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Members of the Academy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ms. Bhuwani Dhamala</li>
          <li>Mr. Dwarika Prasad Pyakurel</li>
          <li>Mr. Dhaka Prasad Pyakurel</li>
          <li>Mr. Sachin Wagle</li>
          <li>Dr. Shiva Prasad Gupta</li>
          <li>Mr. Dipakbabu Amgai</li>
          <li>Mr. Mohan Chandra Adhikari</li>
          <li>Mr. Harinandan Nath</li>
          <li>Mr. Tulsi Prasad Nepal</li>
          <li>Mr. Dhurga Prasad Khanal</li>
          <li>Ms. Bhawani Dhamala</li>
          <li>Mr. Badri Prasad Pangani</li>
          <li>Mr. Pusparaj Parajuli</li>
          <li>Mr. Yog Prasad Acharya</li>
          <li>Ms. Sushila Paudel Dahal</li>
          <li>Mr. Sushil Kumar Pyakurel</li>
          <li>Mr. Madhav Prasad Pyakurel</li>
          <li>Ms. Tara Hamal</li>
          <li>Ms. Madhu Bhandari</li>
          <li>Mr. Uttam Raj Bhandari</li>
          <li>Mr. Binod Pyakurel</li>
          <li>Mr. Badri Pyakurel</li>
          <li>Ms. Goma Neupane</li>
          <li>Mr. Dipak Pyakurel</li>
        </ul>
      </section>

      {/* Scholarships / Awards / Supports */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Scholarships / Awards / Supports</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Outstanding Student Award – Bhag Bhairav Secondary School, Sunkoshi-1, Sindhupalchok</li>
          <ul className="pl-8">
            <li>Recipient: Anjeeta Pahari (2080)</li>
          </ul>

          <li>Outstanding Student Award – Shree Kalika Secondary School, Sunkoshi-3, Sindhupalchok</li>
          <ul className="pl-8">
            <li>Recipient: Anuja Majhi (2080)</li>
          </ul>

          <li>Outstanding Award - Tribhuvan University, Central Department of Mathematics, Kirtipur</li>
          <ul className="pl-8">
            <li>Recipients: Mr. Dhurba Paudel (2076), Ms. Bhuvaneshwori Giri (2076), Mr. Sandesh Thakuri (2077), Ms. Jayanti Saud (2077)</li>
          </ul>

          <li>Professor Dr. Urmila Pyakurel Madhushree Literary Award (2080/81)</li>
          <ul className="pl-8">
            <li>Recipient: Dr. Nawaraj Lamsal</li>
          </ul>

          <li>Research Encouragement Grant</li>
          <ul className="pl-8">
            <li>Recipients: Ms. Jayanti Saud, Alina Shrestha</li>
          </ul>

          <li>Support for Cancer Patients</li>
          <ul className="pl-8">
            <li>Recipients: Ms. Bimala Mishra, Pusparaj Bhandari</li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default AcademyInfo;
