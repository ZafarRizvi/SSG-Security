import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-color">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              SecurePro
            </h3>
            <p className="text-text-secondary mb-4">
              Professional security services providing comprehensive protection
              for your business and assets.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  CCTV Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Door Supervision
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Mall Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Car Parking Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Static Patrol
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Company Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <span className="text-text-secondary">+44 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span className="text-text-secondary">info@securepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-text-secondary">London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color mt-8 pt-8 text-center">
          <p className="text-text-secondary">
            ©2025 SecurePro | Made by @AlgoBee_Technologies -- All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
