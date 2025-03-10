import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow">
      {/* Top Navigation */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-end space-x-6 px-6">
          <Link href="#" className="hover:underline">
            MathSciNet
          </Link>
          <Link href="#" className="hover:underline">
            Bookstore
          </Link>
          <Link href="#" className="hover:underline">
            Sign In
          </Link>
          <Link href="#" className="hover:underline">
            My Cart
          </Link>
          <Link href="#" className="hover:underline">
            Help
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="AMS Logo" height={48} width={48} />
          <div>
            <h1 className="text-xl font-semibold text-blue-900">AMERICAN MATHEMATICAL SOCIETY</h1>
            <p className="text-sm text-gray-500">Advancing research. Creating connections.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 text-gray-500">🔍</button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-blue-900">
        <div className="container mx-auto">
          <ul className="flex space-x-6 text-white text-sm py-3 px-6">
            <li>
              <Link href="#" className="hover:underline">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Membership
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Meetings & Conferences
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                News & Outreach
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Grants & Awards
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Learning & Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Government Relations
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Giving
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                About the AMS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
