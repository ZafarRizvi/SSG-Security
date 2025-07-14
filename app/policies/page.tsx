import {
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaEye,
  FaLock,
  FaAward,
} from "react-icons/fa";

export default function Policies() {
  const policies = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Security Standards",
      description:
        "Our commitment to maintaining the highest security standards in all our operations.",
      content: [
        "All security personnel must be licensed and certified",
        "Regular training and assessment programs",
        "Strict adherence to security protocols",
        "Continuous monitoring and evaluation",
        "Compliance with industry regulations",
      ],
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Employee Conduct",
      description:
        "Professional standards and conduct requirements for all our security personnel.",
      content: [
        "Professional appearance and demeanor at all times",
        "Respectful and courteous interaction with clients and public",
        "Maintenance of confidentiality and discretion",
        "Prompt and appropriate response to incidents",
        "Regular performance evaluations and feedback",
      ],
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Client Relations",
      description:
        "Our approach to building and maintaining strong client relationships.",
      content: [
        "Transparent communication and reporting",
        "Customized security solutions",
        "Regular client feedback and satisfaction surveys",
        "Flexible service adjustments as needed",
        "24/7 client support and emergency contact",
      ],
    },
    {
      icon: <FaEye className="text-4xl text-primary" />,
      title: "Quality Assurance",
      description:
        "Our quality control measures and continuous improvement processes.",
      content: [
        "Regular service quality audits",
        "Client satisfaction monitoring",
        "Incident reporting and analysis",
        "Continuous training and development",
        "Technology and equipment updates",
      ],
    },
    {
      icon: <FaLock className="text-4xl text-primary" />,
      title: "Data Protection",
      description:
        "Our commitment to protecting client and employee data privacy.",
      content: [
        "GDPR compliance and data protection",
        "Secure handling of sensitive information",
        "Confidentiality agreements for all personnel",
        "Regular data protection training",
        "Secure data storage and transmission",
      ],
    },
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: "Health & Safety",
      description:
        "Our health and safety policies to protect employees and clients.",
      content: [
        "Comprehensive health and safety training",
        "Regular risk assessments",
        "Emergency response procedures",
        "Personal protective equipment provision",
        "Incident reporting and investigation",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-support-3 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-h1 font-semibold text-support-1 mb-4">
              Company Policies
            </h1>
            <p className="text-body text-support-2 max-w-3xl mx-auto">
              Our comprehensive policies ensure the highest standards of service
              delivery, professional conduct, and client satisfaction in all our
              security operations.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold text-support-1 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-body text-support-2 max-w-3xl mx-auto">
              At SecurePro, we maintain strict policies and procedures to ensure
              the highest quality of security services. Our policies are
              designed to protect our clients, employees, and maintain the
              integrity of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 bg-support-3">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">{policy.icon}</div>
                  <h3 className="text-h3 font-semibold text-support-1 mb-3 text-center">
                    {policy.title}
                  </h3>
                  <p className="text-body text-support-2 mb-6 text-center">
                    {policy.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-support-1 text-sm">
                      Key Points:
                    </h4>
                    <ul className="space-y-1">
                      {policy.content.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-sm text-support-2 flex items-start"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {point}
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

      {/* Additional Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 font-semibold text-support-1 mb-6">
                Policy Implementation
              </h2>
              <div className="space-y-4 text-body text-support-2">
                <p>
                  All our policies are regularly reviewed and updated to ensure
                  they remain current with industry standards and legal
                  requirements. We conduct regular training sessions to ensure
                  all personnel understand and adhere to these policies.
                </p>
                <p>
                  Our management team oversees policy implementation and
                  conducts regular audits to ensure compliance. Any violations
                  are addressed promptly and appropriately to maintain our high
                  standards of service.
                </p>
                <p>
                  We welcome feedback from clients and employees regarding our
                  policies and are committed to continuous improvement in all
                  aspects of our operations.
                </p>
              </div>
            </div>

            <div className="bg-support-3 p-8 rounded-lg">
              <h3 className="text-h3 font-semibold text-support-1 mb-4">
                Compliance & Certifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  SIA (Security Industry Authority) licensed
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  ISO 9001 Quality Management certified
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  GDPR compliant data handling
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Health and Safety Executive compliant
                </li>
                <li className="flex items-center text-support-2">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Regular third-party audits and assessments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-primary text-accent">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">
            Questions About Our Policies?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            If you have any questions about our company policies or would like
            more information, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-secondary bg-accent text-primary hover:bg-support-3"
            >
              Contact Us
            </a>
            <a href="tel:+441234567890" className="btn-primary">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
