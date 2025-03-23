"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFacebook, FaResearchgate, FaGlobe, FaGoogleScholar } from "react-icons/fa6";
import { FcFaq } from "react-icons/fc";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger (FaBars) and close (FaTimes) icons

const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [isNepali, setIsNepali] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();  // ✅ Listen to route changes

  // ✅ Auto-close dropdown on route change
  useEffect(() => {
    setDropdown(null);
  }, [pathname]);  // 🔥 Triggers whenever route/path changes

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNepali((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      {/* 🔵 Top Header */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between px-6">
          <div className="flex space-x-4"></div>
          <div className="flex space-x-4">
            <Link href="https://www.researchgate.net/profile/Urmila-Pyakurel" target="_blank" className="hover:text-gray-300">
              <FaResearchgate size={20} />
            </Link>
            <Link href="https://www.facebook.com/urmila.pyakurel" target="_blank" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://urmila.cdmathtu.edu.np/" target="_blank" className="hover:text-gray-300">
              <FaGlobe size={20} />
            </Link>
            <Link href="https://scholar.google.com/citations?hl=en&user=-T3agEwAAAAJ" target="_blank" className="hover:text-gray-300">
              <FaGoogleScholar size={20} />
            </Link>
            <Link href="#" className="hover:underline"><FcFaq /></Link>
          </div>
        </div>
      </div>

      {/* 🔵 Logo & Title */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" height={100} width={70} />
          <div>
            <h1 className="text-xl font-semibold text-blue-900">
              <span className={`transition-all duration-2000 ${isNepali ? 'opacity-0' : 'opacity-100'}`}>
                Prof. Dr. Urmila Pyakurel Madhushree Academy
              </span>
            </h1>
            <p className="text-xl text-gray-500">प्रा. डा. उर्मिला प्याकुरेल मधुश्री प्रतिष्ठान</p>
          </div>
        </div>
      </div>

      {/* 🔵 Navigation */}
      <nav className="bg-blue-900">
        <div className="container mx-auto">
          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="flex justify-between items-center py-3 px-6 md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? (
                <FaTimes size={30} /> // Close icon (X) when the menu is open
              ) : (
                <FaBars size={30} /> // Hamburger icon when the menu is closed
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className={`flex space-x-6 text-white text-sm py-3 px-6 md:flex ${isMobileMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/objectives" className="hover:underline">Objectives</Link></li>
            <li><Link href="/madhushree" className="hover:underline">Madhushree</Link></li>
            <li><Link href="/members/" className="hover:underline">Members</Link></li>
            <li><Link href="/activities" className="hover:underline">Activities</Link></li>

            {/* 🔽 Scholarships Dropdown */}
            <li className="relative">
              <button onClick={() => toggleDropdown('scholarshipsAwardsSupports')} className="hover:underline">
                Scholarships/Awards ▼
              </button>
              {dropdown === 'scholarshipsAwardsSupports' && (
                <ul className="absolute bg-white text-black shadow-md rounded-md py-2 w-48 z-50">
                  <li><Link href="/scholarshipsAwardsSupports/rules" className="block px-4 py-2 hover:bg-gray-200">Rules</Link></li>
                  <li><Link href="/scholarshipsAwardsSupports/2080" className="block px-4 py-2 hover:bg-gray-200">2080</Link></li>
                  <li><Link href="/2081" className="block px-4 py-2 hover:bg-gray-200">2081</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/photo-gallery" className="hover:underline">Photo Gallery</Link></li>
            <li><Link href="/research" className="hover:underline">Research</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
