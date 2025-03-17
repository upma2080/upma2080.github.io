"use client";

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Connect with Us</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://www.researchgate.net/profile/Urmila-Pyakurel" target="_blank" className="hover:underline">
            ResearchGate
          </Link>
          <Link href="https://www.facebook.com/urmila.pyakurel" target="_blank" className="hover:underline">
            Facebook
          </Link>
          <Link href="https://urmila.cdmathtu.edu.np/" target="_blank" className="hover:underline">
            Personal Website
          </Link>
          <Link href="https://scholar.google.com/citations?hl=en&user=-T3agEwAAAAJ" target="_blank" className="hover:underline">
            Google Scholar
          </Link>
        </div>
        <p className="text-sm text-gray-300 mt-4">© 2025 Prof. Dr. Urmila Pyakurel Madhushree Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
