import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import siteInfo from "../siteInfo.json";

const Footer = () => {
  const { companyName, companyLogo, contact, services, socialLinks } = siteInfo;

  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-color">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              {companyName}
            </h3>
            <p className="text-text-secondary mb-4">
              <span className="text-primary">ISS</span> professional security
              services providing comprehensive protection for your business and
              assets.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                className="text-text-secondary hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href={socialLinks.instagram}
                className="text-text-secondary hover:text-pink-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href={socialLinks.linkedin}
                className="text-text-secondary hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
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
                <span className="text-text-secondary">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span className="text-text-secondary">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-text-secondary">{contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color mt-8 pt-8 text-center">
          <p className="text-text-secondary">
            ©2025 SecurePro | Made by{" "}
            <span className="text-primary">@AlgoBee_Technologies</span> -- All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
