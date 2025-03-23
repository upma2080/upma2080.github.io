"use client";

export default function RulesPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-10">
        Awards, Fellowships, Scholarships & Support Rules
      </h1>

      {/* Best Student Award */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Prof. Dr. Urmila Pyakurel Best Student Award
        </h2>
        <p className="text-gray-800 leading-relaxed">
          This award will be provided to the topper students (1 male and 1 female) 
          of the Central Department of Mathematics who score the highest grade 
          in their overall transcript. In the event of a tie, GPA, semester-wise 
          grades, and previous degrees will be considered successively. If still 
          tied, the award amount will be equally divided. The student must submit 
          official proof of being the topper from Tribhuvan University, Examination Division.
        </p>
      </section>

      {/* SEE Scholarship */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Prof. Dr. Urmila Pyakurel Best Student Scholarship (SEE Topper)
        </h2>
        <p className="text-gray-800 leading-relaxed">
          One SEE topper student from Bagbhairab Higher Secondary School will be 
          supported by this scholarship. If two students score the same grade and GPA, 
          the scholarship will be equally divided. Official topper proof is required 
          from the Headmaster of the School.
        </p>
      </section>

      {/* Kalika Primary School Scholarship */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Prof. Dr. Urmila Pyakurel Best Student Scholarship (Kalika Primary School)
        </h2>
        <p className="text-gray-800 leading-relaxed">
          One topper student from Kalika Primary School will be supported by this 
          scholarship. If two students tie, the scholarship will be equally divided. 
          Official topper proof is required from the Headmaster of the School.
        </p>
      </section>

      {/* Publication Sponsorship */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Prof. Dr. Urmila Pyakurel Publication Sponsorship
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Up to three Science Indexed Scimago Journal publications will be supported 
          each year. The best papers will be selected based on Q-ranking. If there is 
          a tie, the SJR Impact Factor and H-index will be compared with 50% weight 
          each. Priority research areas:
        </p>
        <ul className="list-disc ml-8 mt-4 text-gray-700">
          <li>Evacuation planning and optimization</li>
          <li>Mathematical sciences and its applications</li>
        </ul>
        <p className="text-gray-800 mt-4">
          The paper must address real-life problems related to Nepal.
        </p>
      </section>

      {/* Madhushree Literary Award */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Prof. Dr. Urmila Pyakurel Madhushree Award
        </h2>
        <p className="text-gray-800 leading-relaxed">
          To honor Dr. Pyakurel’s literary work as “Madhushree,” one annual award 
          will be presented. A three-member expert committee (including at least 
          one from the Academy) will recommend the winner. Guidelines for the 
          award will be regulated by the Academy.
        </p>
      </section>

      {/* Grant Support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Prof. Dr. Urmila Pyakurel Grant
        </h2>
        <p className="text-gray-800 leading-relaxed">
          A maximum of two students (with priority to females and the optimization 
          field) from the Central Department of Mathematics writing their master's 
          thesis in mathematical applications (priority on evacuation planning) 
          may receive occasional support. Applications are subject to supervisor 
          recommendation and final approval by the Academy.
        </p>
      </section>

      {/* Cancer Patient Support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Cancer Patient Support
        </h2>
        <p className="text-gray-800 leading-relaxed">
          The Academy also wishes to support cancer patients, subject to its budgetary capacity.
        </p>
      </section>

      {/* Reserved Fund */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Reserved Fund
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Any remaining amount in the Academy's fund will be deposited as a reserved fund 
          for future use.
        </p>
      </section>
    </main>
  );
}
