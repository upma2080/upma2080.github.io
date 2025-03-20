"use client";

export default function MadhushreePage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">मधुश्री</h1>

      <p className="text-gray-800 text-lg mb-8 leading-relaxed">
        मधुश्री प्रा.डा. उर्मिला प्याकुरेलको साहित्यिक नाम हो । उहाँ कविता, कथा, निबन्ध र उपन्यास जस्ता साहित्यिक सिर्जना गर्न रुचाउनुहुन्थ्यो । 
        उहाँले सिर्जना गर्नुभएको “मधुरस” कविता सङ्ग्रह प्रकाशन गरिएको छ । 
        यस सङ्ग्रहमा गद्य कविता, पद्य कविता, गीतसहित १२६ शीर्षकमा सङ्ग्रहित छन् । 
        आगामि दिनमा उहाँका कथा, संश्मरण र उपन्यास प्रकाशन गर्दै जाने योजना रहेको छ ।
      </p>

      <h2 className="text-2xl font-semibold text-pink-600 mb-4">पुस्तक पढ्नुहोस्:</h2>

      {/* Example iFrame for the Book */}
      <div className="w-full h-[80vh] border shadow-lg rounded overflow-hidden">
        <iframe
          src="/path-to-your-book.pdf" // Replace this with your actual PDF path or external link
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

