import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router"; // Fix: use react-router-dom

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const navigation = [
  { name: "Home", href: "/", img: "./nav-icons/home.png" },
  {
    name: "Request a demo",
    href: "/request-demo",
    img: "./nav-icons/demo.png",
  },
  { name: "Who We Are", href: "/whoweare", img: "./nav-icons/who-we.png" },
  { name: "FAQS", href: "/faqs", img: "./nav-icons/faqs.png" },
];

const handleNavigate = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#2dce89] w-full shadow-md">
      <nav
        className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-10"
        style={{
          background:
            "background: linear-gradient(135deg, #2dce89 0%, #28b673 50%, #3ab189 100%);",
        }}
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            to="/"
            onClick={handleNavigate}
            className="flex items-center gap-2"
          >
            <img src="./logo.png" alt="Wasooli Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 rounded-md text-white hover:bg-[#28bd7c] transition-colors"
          >
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white text-base font-medium transition hover:text-gray-100"
            >
              <img
                src={item.img}
                alt={`${item.name} icon`}
                width={18}
                className="filter invert brightness-0 contrast-200"
              />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-4 ml-8 border-l border-white/30 pl-6">
          {[
            {
              icon: faWhatsapp,
              href: "https://web.whatsapp.com/send?phone=923352075437&text=Hello%20there!",
            },
            {
              icon: faInstagram,
              href: "https://www.instagram.com/logicslabs/",
            },
            { icon: faFacebook, href: "https://www.facebook.com/LogicsLabs/" },
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/company/logicslabssolutions",
            },
          ].map(({ icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-gray-200 transition"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              onClick={() => {
                handleNavigate();
                setMobileMenuOpen(false);
              }}
            >
              <img src="./logo.png" alt="Wasooli Logo" className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="space-y-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  handleNavigate();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                <img
                  src={item.img}
                  alt={`${item.name} icon`}
                  width={20}
                  // className="filter invert brightness-0 contrast-200"
                  style={{
                    filter:
                      "invert(44%) sepia(44%) saturate(420%) hue-rotate(90deg) brightness(95%) contrast(85%)",
                  }}
                />
                {item.name}
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200 mt-4">
              {[
                {
                  icon: faWhatsapp,
                  href: "https://web.whatsapp.com/send?phone=923352075437&text=Hello%20there!",
                },
                {
                  icon: faInstagram,
                  href: "https://www.instagram.com/logicslabs/",
                },
                {
                  icon: faFacebook,
                  href: "https://www.facebook.com/LogicsLabs/",
                },
                {
                  icon: faLinkedin,
                  href: "https://www.linkedin.com/company/logicslabssolutions",
                },
              ].map(({ icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-[#2dce89] hover:opacity-80 transition"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
