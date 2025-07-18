import {
  FaVideo,
  FaDoorOpen,
  FaShoppingBag,
  FaCar,
  FaConciergeBell,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import siteInfo from "../../siteInfo.json";

export default function Services() {
  const PhoneNumber = siteInfo.contact.phone;

  // You may want to map siteInfo.services to your UI structure, or keep the hardcoded details if needed. For now, let's just use the names from siteInfo.services:
  const services = siteInfo.services.map((service) => ({
    icon: <FaShieldAlt className="text-4xl text-primary" />, // Use a generic icon or map specific ones if needed
    title: service,
    description: "", // Add descriptions if you want, or keep empty
    features: [], // Add features if you want, or keep empty
  }));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-support-3 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-h1 font-semibold text-support-1 mb-4">
              Our Security Services
            </h1>
            <p className="text-body text-support-2 max-w-3xl mx-auto">
              Professional security solutions tailored to your specific needs.
              From CCTV operations to door supervision, we provide comprehensive
              protection for your business and assets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-h3 font-semibold text-support-1 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-body text-support-2 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-support-1 text-sm">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-support-2 flex items-center"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-accent">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">
            Need a Custom Security Solution?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific security requirements and get a
            tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-secondary bg-accent text-primary hover:bg-support-3"
            >
              Get Quote
            </a>
            <a href={`tel:${PhoneNumber}`} className="btn-primary">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
