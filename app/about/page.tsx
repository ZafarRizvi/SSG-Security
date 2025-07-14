import { FaShieldAlt, FaUsers, FaAward, FaHandshake } from "react-icons/fa";

export default function About() {
  const values = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Reliability",
      description:
        "We are committed to providing dependable security services you can count on 24/7.",
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Professionalism",
      description:
        "Our team maintains the highest standards of professional conduct and appearance.",
    },
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our security services.",
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Trust",
      description:
        "Building lasting relationships based on trust, integrity, and transparency.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-support-3 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-h1 font-semibold text-support-1 mb-4">
              About SecurePro
            </h1>
            <p className="text-body text-support-2 max-w-3xl mx-auto">
              Leading provider of professional security services with years of
              experience protecting businesses, assets, and communities across
              the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-semibold text-support-1 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-body text-support-2">
                <p>
                  Founded with a vision to provide exceptional security
                  services, SecurePro has grown from a small local security
                  company to a trusted partner for businesses across the UK.
                </p>
                <p>
                  Our journey began with a simple mission: to protect what
                  matters most to our clients. Today, we continue to uphold this
                  commitment through our comprehensive range of security
                  services, experienced personnel, and cutting-edge technology.
                </p>
                <p>
                  We understand that every client has unique security needs,
                  which is why we offer tailored solutions designed to meet
                  specific requirements and provide peace of mind.
                </p>
              </div>
            </div>
            <div className="bg-support-3 p-8 rounded-lg">
              <h3 className="text-h3 font-semibold text-support-1 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Licensed and certified security personnel
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  24/7 availability and rapid response
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  State-of-the-art equipment and technology
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Comprehensive training and ongoing development
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Proven track record of reliability and excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-support-3">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold text-support-1 mb-4">
              Our Values
            </h2>
            <p className="text-body text-support-2 max-w-2xl mx-auto">
              The principles that guide everything we do and ensure we deliver
              the highest quality security services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-h3 font-semibold text-support-1 mb-3">
                  {value.title}
                </h3>
                <p className="text-body text-support-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold text-support-1 mb-4">
              Our Team
            </h2>
            <p className="text-body text-support-2 max-w-2xl mx-auto">
              Experienced professionals dedicated to providing exceptional
              security services and protecting your interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaShieldAlt className="text-3xl text-accent" />
              </div>
              <h3 className="text-h3 font-semibold text-support-1 mb-2">
                Security Officers
              </h3>
              <p className="text-body text-support-2">
                Licensed and trained security personnel with extensive
                experience in various security environments.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="text-3xl text-accent" />
              </div>
              <h3 className="text-h3 font-semibold text-support-1 mb-2">
                Management Team
              </h3>
              <p className="text-body text-support-2">
                Experienced professionals overseeing operations and ensuring the
                highest standards of service delivery.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaAward className="text-3xl text-accent" />
              </div>
              <h3 className="text-h3 font-semibold text-support-1 mb-2">
                Support Staff
              </h3>
              <p className="text-body text-support-2">
                Dedicated support team providing administrative and operational
                assistance to ensure smooth service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-accent">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">Ready to Work With Us?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your security needs and learn how we can
            help protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-secondary bg-accent text-primary hover:bg-support-3"
            >
              Contact Us
            </a>
            <a href="/services" className="btn-primary">
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
