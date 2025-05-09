import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="text-white   font-bold shadow pt-3 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <Link to="/" className="text-2xl font-bold hover:text-[#797777]">
              3D Medical Models
            </Link>
          </div>
          <ul className="space-y-1 text-center">
            <li>
              <Link to="/" className="hover:text-[#797777]">
                Support
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#797777]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#797777]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#797777]">
                Manage Cookies Preferences
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          © 2025 3D Medical Models. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
