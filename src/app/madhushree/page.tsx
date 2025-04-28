"use client";

import { useState } from "react";

export default function MadhushreePage() {
  const books = {
    "/Madhurash[1].pdf": {
      title: "मधुरस (कविता सङ्ग्रह)",
      description: `मधुश्री प्रा.डा. उर्मिला प्याकुरेलको साहित्यिक नाम हो । उहाँ कविता, कथा, निबन्ध र उपन्यास जस्ता साहित्यिक सिर्जना गर्न रुचाउनुहुन्थ्यो ।
      उहाँले सिर्जना गर्नुभएको “मधुरस” कविता सङ्ग्रह प्रकाशन गरिएको छ । यस सङ्ग्रहमा गद्य कविता, पद्य कविता, गीतसहित १२६ शीर्षकमा सङ्ग्रहित छन् ।
      आगामि दिनमा उहाँका कथा, संश्मरण र उपन्यास प्रकाशन गर्दै जाने योजना रहेको छ ।`,
    },
    "/Madhurash.pdf": {
      title: "Urmila in Memory",
      description: `This souvenir compiles Prof. Dr. Urmila Pyakurel's journey—from her childhood, education, and family background to her academic rise from deputy to full professor—highlighting her perseverance, literary passion, international travels (Japan, the Philippines, Germany), and the love and support from relatives, friends, mentors, classmates, journalists, teachers, and students worldwide.`,
    },
  } as const; // 👉 Important! Freeze the object types

  type BookPath = keyof typeof books; // 👉 Set proper type for book paths

  const [selectedBook, setSelectedBook] = useState<BookPath>("/Madhurash.pdf");

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">मधुश्री</h1>

      {/* Book selection */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">पुस्तक छान्नुहोस्:</h2>

      <div className="mb-6">
        <select
          className="border border-gray-300 rounded px-4 py-2 text-lg"
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value as BookPath)} // 👉 cast properly
        >
          {Object.entries(books).map(([path, book]) => (
            <option key={path} value={path}>
              {book.title}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <p className="text-gray-800 text-lg mb-8 leading-relaxed">
        {books[selectedBook].description}
      </p>

      {/* PDF Viewer */}
      <div className="w-full h-[80vh] border shadow-lg rounded overflow-hidden">
        <iframe
          key={selectedBook}
          src={`${selectedBook}#toolbar=0`}
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
