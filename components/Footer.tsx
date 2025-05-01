"use client";

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-10">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Research Links Section */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-blue-400">Research Contributions</p>
            <p className="text-sm text-gray-400">
              You may find the scientific contributions of Prof. Dr. Urmila Pyakurel through the following links.
            </p>
            <div className="flex flex-wrap space-x-6">
              <Link href="https://www.researchgate.net/profile/Urmila-Pyakurel" target="_blank" className="hover:text-blue-300">
                ResearchGate
              </Link>
              <Link href="https://www.facebook.com/urmila.pyakurel" target="_blank" className="hover:text-blue-300">
                Facebook
              </Link>
              <Link href="https://urmila.cdmathtu.edu.np/" target="_blank" className="hover:text-blue-300">
                Personal Website
              </Link>
              <Link href="https://scholar.google.com/citations?hl=en&user=-T3agEwAAAAJ" target="_blank" className="hover:text-blue-300">
                Google Scholar
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-blue-400">Contact Information</p>
            <p className="text-sm text-gray-400">
              If you have any questions or inquiries, feel free to contact us:
            </p>
            <div>
              <p className="text-sm text-gray-300">
                Email: <a href="mailto:upama2080@gmail.com" className="text-blue-400 hover:underline">upama2080@gmail.com</a>
              </p>
              <p className="text-sm text-gray-300">
                Mobile: <a href="tel:+9779861656319" className="text-blue-400 hover:underline">+977-9861656319</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-700 py-4 mt-12 text-center text-gray-400">
        <p className="text-sm"> © Prof. Dr. Urmila Pyakurel Madhushree Academy | All Rights Reserved</p>
        <p className="text-[7px]">Designed by <a href="https://ku.edu.np/contact-detail/sunil-regmi">Sunil Regmi</a></p>
      </div>
    </footer>
  );
};

export default Footer;
