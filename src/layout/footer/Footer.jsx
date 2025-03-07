import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#07054A] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Link to="/" className="text-2xl font-bold hover:text-gray-400">
              3D Medical Models
            </Link>
          </div>
          <ul className="space-y-2 text-center">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Support
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Manage Cookies Preferences
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © 2025 3D Medical Models. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
