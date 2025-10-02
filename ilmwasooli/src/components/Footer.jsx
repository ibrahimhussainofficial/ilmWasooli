import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Text on Left */}
        <div className="text-left text-sm md:text-base flex-1">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        <div className="text-center text-gray-500 text-sm">
          Powered By :{" "}
          <a
            href="https://web.techsy.pk/logicslabs"
            className="font-semibold text-[#2dce89]"
          >
            LogicsLabs
          </a>
        </div>

        {/* Social Icons on Right */}
        <div className="flex space-x-6 text-xl justify-end flex-1">
          <a
            href="https://www.facebook.com/LogicsLabs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-green-500 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=923352075437&text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-600 hover:text-green-500 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/logicslabs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-green-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/logicslabssolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-green-500 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}
