"use client";

import { useState } from "react";

const Objectives = () => {
  const [language, setLanguage] = useState<"ne" | "en">("ne");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">
        {language === "ne" ? "प्रतिष्ठानको उद्देश्य" : "Objectives of the Organization"}
      </h1>

      {/* Language Toggle Buttons */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setLanguage("ne")}
          className={`px-4 py-2 rounded-md ${
            language === "ne" ? "bg-blue-900 text-white" : "bg-gray-200 text-black"
          }`}
        >
          नेपाली
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded-md ${
            language === "en" ? "bg-blue-900 text-white" : "bg-gray-200 text-black"
          }`}
        >
          English
        </button>
      </div>

      {/* Content Display */}
      {language === "ne" ? (
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>सेवामूलक, मुनाफारहित, जनहितकारी सामाजिक काम गर्ने।</li>
          <li>प्रायोगिक गणित र साहित्यको क्षेत्रमा प्राज्ञिक एवम् अनुसन्धानमूलक कार्य गर्ने।</li>
          <li>नेपालसम्बन्धी प्रायोगिक गणित विज्ञानका क्षेत्रमा वैज्ञानिक अनुसन्धान गर्ने व्यक्तिहरू वा संस्थाहरूलाई सहयोग, सम्मान, पुरस्कृत गर्ने।</li>
          <li>शिक्षामा उत्कृष्ट तर कमजोर आर्थिक अवस्था भएका विद्यार्थीलाई आर्थिक सहयोग गर्ने।</li>
          <li>उत्कृष्ट साहित्यिक कृतिलाई सम्मान तथा पुरस्कृत गर्ने।</li>
          <li>स्वास्थ्य सम्बन्धी जनचेतना फैलाउने र गरिब, असहाय, ज्येष्ठ नागरिकलाई सहयोग गर्ने।</li>
        </ul>
      ) : (
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>To carry out service-oriented, non-profit, and public welfare social work.</li>
          <li>To engage in academic and research-based activities in the fields of applied mathematics and literature.</li>
          <li>To support, honor, and reward individuals or institutions actively involved in scientific research in applied mathematical sciences related to Nepal.</li>
          <li>To encourage and provide financial support to students who excel in education but face financial difficulties.</li>
          <li>To recognize and reward outstanding literary works.</li>
          <li>To promote public awareness about health and assist underprivileged, helpless, and elderly individuals who lack access to medical treatment.</li>
        </ul>
      )}
    </div>
  );
};

export default Objectives;
