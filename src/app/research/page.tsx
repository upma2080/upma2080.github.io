"use client";

import { useState } from "react";
import Link from "next/link";
import ResearchLinks from "../../../components/ResearchLinks";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("publications");

  return (
    <main className="container mx-auto px-6 py-12">

      {/* Sub-tabs */}
      <div className="flex space-x-8 border-b border-gray-300 mb-8">
        {/* <button onClick={() => setActiveTab("team")} className={`pb-2 ${activeTab === "team" && "border-b-4 border-blue-900 font-semibold"}`}>Team Members</button> */}
        <button onClick={() => setActiveTab("links")} className={`pb-2 ${activeTab === "links" && "border-b-4 border-blue-900 font-semibold"}`}>Links</button>
        <button onClick={() => setActiveTab("publications")} className={`pb-2 ${activeTab === "publications" && "border-b-4 border-blue-900 font-semibold"}`}>Publications</button>
      </div>

      {/* Content Switch */}
      {activeTab === "team" && (
        <div>
          <p className="text-gray-700">Team Members content goes here...</p>
        </div>
      )}

{activeTab === "links" && <ResearchLinks />}
{activeTab === "publications" && (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold text-blue-900 mb-4">Posthumous Publications of Prof. Pyakurel</h2>
    <p className="text-gray-700 leading-relaxed mb-6">
      The articles listed below represent a remarkable body of work that continues to contribute 
      to the fields of operations research, optimization, and evacuation planning. Although these 
      publications appeared after her passing, they stand as a testament to her enduring dedication, 
      intellectual rigor, and profound impact on the academic community. Her collaborative spirit 
      and innovative research have left an indelible mark on the discipline, inspiring future 
      generations of researchers to build upon her foundational work. These posthumous publications 
      not only honor her legacy but also ensure that her contributions remain accessible and 
      influential in advancing knowledge and solving real-world problems. Her work will continue 
      to be celebrated and remembered as a cornerstone of progress in the field.
    </p>

    <div className="space-y-6">
      <div>
        <p><strong>Khanal, D.P., Gupta S.P., Pyakurel, U., and Dhamala, T.N.</strong> (2025). Inflow-dependent Quickest Multi-commodity Flow Problem with Partial Lane Reversals. <em>Journal of Industrial and Management Optimization</em>. <a href="https://doi.org/10.3934/jimo.2025027" target="_blank" className="text-blue-600 underline">https://doi.org/10.3934/jimo.2025027</a></p>
      </div>

      <div>
        <p><strong>Khanal, D.P., Pyakurel, U., and Dhamala, T.N.</strong> (2025). Abstract Maximum Flow with Partial Switching. <em>Journal of Uncertain System</em>. <a href="https://doi.org/10.1124/S1752890925500060" target="_blank" className="text-blue-600 underline">https://doi.org/10.1124/S1752890925500060</a></p>
      </div>

      <div>
        <p><strong>Wagle, S., Khanal, D.P., Pyakurel, U., Dempe, S., and Dhamala, T.N.</strong> (2025). Maximum Dynamic FlowLoc with Intermediate Storage: A Temporally Repeated Approach. <em>Operations Research Forum</em>, 6(1), 1-20. <a href="https://doi.org/10.1007/s43069-024-00410-z" target="_blank" className="text-blue-600 underline">https://doi.org/10.1007/s43069-024-00410-z</a></p>
      </div>

      <div>
        <p><strong>Khanal, D.P., Pyakurel, U., Dhamala, T.N., and Dempe, S.</strong> (2024). Bi-level Problem with Facility Allocation for Evacuation Planning. <em>GANIT: Journal of Bangladesh Mathematical Society</em>, 44(2), 17-27. <a href="https://doi.org/10.3329/ganit.v44i2.78528" target="_blank" className="text-blue-600 underline">https://doi.org/10.3329/ganit.v44i2.78528</a></p>
      </div>

      <div>
        <p><strong>Khanal, D.P., Pyakurel, U., Dhamala, T.N., Dempe, S., and Schiermeyer, I.</strong> (2024). Prioritized Maximum Multi-Commodity Flow in Evacuation Planning. In: Kotsireas, I.S., Nagurney, A., Pardalos, P.M., Pickl, S.W., Vogiatzis, C. (eds) <em>Dynamics of Disasters</em>. Springer Optimization and Its Applications, vol 217. Springer, Cham. <a href="https://doi.org/10.1007/978-3-031-74006-0_5" target="_blank" className="text-blue-600 underline">https://doi.org/10.1007/978-3-031-74006-0_5</a></p>
      </div>

      <div>
        <p><strong>Dhamala, T. N., Adhikari, M.C., Khanal, D. P., and Pyakurel, U.</strong> (2024). Generalized Maximum Flow Over Time with Intermediate Storage. <em>Annals of Operations Research</em>, 335, 111–134. <a href="https://doi.org/10.1007/s10479-023-05773-w" target="_blank" className="text-blue-600 underline">https://doi.org/10.1007/s10479-023-05773-w</a></p>
      </div>

      <div>
        <p><strong>Wagle, S., Pyakurel, U., and Dhamala, T.N.</strong> (2023). Prioritized Max-FlowLoc for Evacuation Planning. <em>The Nepali Mathematical Sciences Report</em>, 40(1-2), 106-119. <a href="https://doi.org/10.3126/nmsr.v40i1-2.61506" target="_blank" className="text-blue-600 underline">https://doi.org/10.3126/nmsr.v40i1-2.61506</a></p>
      </div>

      <div>
        <p><strong>Gupta, S.P., Pyakurel, U., and Dhamala, T.N.</strong> (2023). Optimal Reconfiguration of Network with Variant Transmission Times on Arcs. <em>The Nepali Mathematical Sciences Report</em>, 40(1-2), 11-33. <a href="https://doi.org/10.3126/nmsr.v40i1-2.61492" target="_blank" className="text-blue-600 underline">https://doi.org/10.3126/nmsr.v40i1-2.61492</a></p>
      </div>

      <div>
        <p><strong>Dhamala, T.N., Wagle, S., and Pyakurel, U.</strong> (2023). FlowLoc Problems with Maximum Excess Flow. <em>Journal of Industrial and Management Optimization</em>, 19(12), 8851-8870. <a href="https://doi.org/10.3934/jimo.2023064" target="_blank" className="text-blue-600 underline">https://doi.org/10.3934/jimo.2023064</a></p>
      </div>

      <div>
        <p><strong>Gupta, S.P., Pyakurel, U., and Dhamala, T.N.</strong> (2023). Quickest Multi-commodity Contraflow with Non-symmetric Traversal Times. In: Ghosh, S., Niranjanamurthy, M., Devasi, K., Mallik, B.B., Das, S. (eds) <em>Mathematics and Computer Science</em>, vol 2, 239-250. <a href="https://doi.org/10.1002/9781119896715.ch16" target="_blank" className="text-blue-600 underline">https://doi.org/10.1002/9781119896715.ch16</a></p>
      </div>
    </div>
  </div>
)}

    </main>
  );
}
