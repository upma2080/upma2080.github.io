"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow">
      {/* Top Navigation */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-end space-x-6 px-6">
          <Link href="https://mathscinet.ams.org/mathscinet/" className="hover:underline">MathSciNet</Link>
          <Link href="#" className="hover:underline">Faq's</Link>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" height={100} width={70}  />
          <div>
            <h1 className="text-xl font-semibold text-blue-900">Prof. Dr. Urmila Pyakurel Madhushree Academy</h1>
            <p className="text-sm text-gray-500">Coming Soon.</p>
          </div>
        </div>

        {/* Search Bar */}
        {/* <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 text-gray-500">🔍</button>
        </div> */}
      </div>

      {/* Navigation Links */}
      <nav className="bg-blue-900">
        <div className="container mx-auto">
          <ul className="flex space-x-6 text-white text-sm py-3 px-6">
            <li><Link href="/" className="hover:underline">Introduction</Link></li>
            <li><Link href="/objectives" className="hover:underline">Objectives</Link></li>
            <li><Link href="/acknowledgements" className="hover:underline">Acknowledgements</Link></li>
            <li><Link href="/members/" className="hover:underline">Members</Link></li>
            <li><Link href="/scholarshipsAwardsSupports" className="hover:underline">Scholarships/Awards</Link></li>
            
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
            
            {/* Members Dropdown */}
            

            <li><Link href="/photo-gallery" className="hover:underline">Photo Gallery</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
