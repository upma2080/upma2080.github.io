"use client";

const AcademyInfo = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Committee Members
      </h1>

      {/* Two Column Layout for Committees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ad Hoc Committee */}
        <section className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ad Hoc Committee (May 1, 2023 : 2080/01/18)</h2>
          <ul className="space-y-2">
            {[
              { position: "President", name: "Prof. Dr. Tanka Nath Dhamala" },
              { position: "Vice President", name: "Mr. Kedar Prasad Bhattarai" },
              { position: "Secretary", name: "Mr. Uddhav Prasad Pyakurel" },
              { position: "Treasurer", name: "Mr. Nawaraj Sapkota" },
              { position: "Member", name: "Mr. Rajendra Prasad Pyakurel" },
              { position: "Member", name: "Mr. Damodar Neupane" },
              { position: "Member", name: "Ms. Erika Udas" },
              { position: "Member", name: "Ms. Jayanti Saud" },
              { position: "Member", name: "Ms. Laxmi Pyakurel" },
            ].map((member, index) => (
              <li key={index} className="border-b pb-2">
                <strong>{member.position}: </strong> {member.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Executive Committee */}
        <section className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Executive Committee (Feb 3, 2024 / 2080/10/20)</h2>
          <ul className="space-y-2">
            {[
              { position: "President", name: "Prof. Dr. Tanka Nath Dhamala" },
              { position: "Vice President", name: "Mr. Kedar Prasad Bhattarai" },
              { position: "Secretary", name: "Mr. Uddhav Prasad Pyakurel" },
              { position: "Treasurer", name: "Mr. Nawaraj Sapkota" },
              { position: "Member", name: "Mr. Rajendra Prasad Pyakurel" },
              { position: "Member", name: "Mr. Damodar Neupane" },
              { position: "Member", name: "Ms. Erika Udas" },
              { position: "Member", name: "Ms. Jayanti Saud" },
              { position: "Member", name: "Ms. Laxmi Pyakurel" },
            ].map((member, index) => (
              <li key={index} className="border-b pb-2">
                <strong>{member.position}:</strong> {member.name}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* General Members */}
      <section className="mt-8 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">General Members</h2>
        <ol className="list-decimal pl-6 space-y-2 columns-2">
          {[
            "Ms. Bhuwani Dhamala",
            "Mr. Dwarika Prasad Pyakurel",
            "Mr. Dhaka Prasad Pyakurel",
            "Mr. Sachin Wagle",
            "Dr. Shiva Prasad Gupta",
            "Mr. Dipak Babu Amgain",
            "Mr. Mohan Chandra Adhikari",
            "Mr. Harinandan Nath",
            "Mr. Tulsi Prasad Nepal",
            "Mr. Dhurga Prasad Khanal",
            "Ms. Bhawani Dhamala",
            "Mr. Badri Prasad Pangani",
            "Mr. Pusparaj Parajuli",
            "Mr. Yog Prasad Acharya",
            "Ms. Sushila Paudel Dahal",
            "Mr. Sushil Kumar Pyakurel",
            "Mr. Madhav Prasad Pyakurel",
            "Ms. Tara Hamal",
            "Ms. Madhu Bhandari",
            "Mr. Uttam Raj Bhandari",
            "Mr. Binod Pyakurel",
            "Mr. Badri Pyakurel",
            "Ms. Goma Neupane",
            "Mr. Dipak Pyakurel",
          ].map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default AcademyInfo;
