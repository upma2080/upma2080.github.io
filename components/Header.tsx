"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [isNepali, setIsNepali] = useState<boolean>(false);

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  // Toggle the language every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setIsNepali((prev) => !prev);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow">
      {/* Top Navigation */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-end space-x-6 px-6">
          <Link href="https://scholar.google.com/citations?hl=en&user=-T3agEwAAAAJ" className="hover:underline">Google Scholar</Link>
          <Link href="#" className="hover:underline">FAQ's</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" height={100} width={70} />
          <div>
            <h1 className="text-xl font-semibold text-blue-900">
              {/* Animated Heading */}
              {/* <span className={`transition-all duration-2000 ${isNepali ? 'opacity-100' : 'opacity-0'}`}>
                प्रो. डा. उर्मिला प्याकुरेल मधुश्री एकेडमी
              </span> */}
              <span className={`transition-all duration-2000 ${isNepali ? 'opacity-0' : 'opacity-100'}`}>
                Prof. Dr. Urmila Pyakurel Madhushree Academy
              </span>
            </h1>
            <p className="text-sm text-gray-500">प्रो. डा. उर्मिला प्याकुरेल मधुश्री एकेडमी</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-blue-900">
        <div className="container mx-auto">
          <ul className="flex space-x-6 text-white text-sm py-3 px-6">
            <li><Link href="/" className="hover:underline">About</Link></li>
            <li><Link href="/objectives" className="hover:underline">Objectives</Link></li>
            <li><Link href="/madhushree" className="hover:underline">Madhushree</Link></li>
            <li><Link href="/members/" className="hover:underline">Members</Link></li>
            {/* <li><Link href="/scholarshipsAwardsSupports" className="hover:underline">Scholarships/Awards</Link></li> */}
            <li className="relative">
              <button onClick={() => toggleDropdown('scholarshipsAwardsSupports')} className="hover:underline">Scholarships/Awards ▼</button>
              {dropdown === 'scholarshipsAwardsSupports' && (
                <ul className="absolute bg-white text-black shadow-md rounded-md py-2 w-48">
                  <li><Link href="/scholarshipsAwardsSupports/2080" className="block px-4 py-2 hover:bg-gray-200">2080</Link></li>
                  <li><Link href="/2081" className="block px-4 py-2 hover:bg-gray-200">2081</Link></li>
                </ul>
              )}
            </li>      
            {/* Activities Dropdown */}
            <li className="relative">
              <button onClick={() => toggleDropdown('activities')} className="hover:underline">Activities ▼</button>
              {dropdown === 'activities' && (
                <ul className="absolute bg-white text-black shadow-md rounded-md py-2 w-48">
                  <li><Link href="/activities/general-assembly" className="block px-4 py-2 hover:bg-gray-200">4.1 General Assembly</Link></li>
                  <li><Link href="/activities/others" className="block px-4 py-2 hover:bg-gray-200">4.2 Others</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/photo-gallery" className="hover:underline">Photo Gallery</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
