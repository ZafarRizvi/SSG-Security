import Link from "next/link";
import Image from "next/image";
import {
  FaShieldAlt,
  FaEye,
  FaUsers,
  FaCar,
  FaBuilding,
  FaPhone,
} from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Professional Security",
      description:
        "Trained and licensed security personnel for your protection needs.",
      image: "/bg-1.jpg",
    },
    {
      icon: <FaEye className="text-4xl text-primary" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and monitoring services.",
      image: "/bg-2.jpg",
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Experienced Team",
      description: "Skilled professionals with years of security experience.",
      image: "/bg-3.webp",
    },
    {
      icon: <FaCar className="text-4xl text-primary" />,
      title: "Mobile Patrol",
      description:
        "Flexible mobile security patrols for comprehensive coverage.",
      image: "/bg-1.jpg",
    },
  ];

  const services = [
    {
      name: "CCTV Operations",
      image: "/bg-2.jpg",
      description:
        "Professional CCTV operations services with trained personnel and modern equipment.",
    },
    {
      name: "Door Supervision",
      image: "/bg-3.webp",
      description:
        "Professional door supervision services with trained personnel and modern equipment.",
    },
    {
      name: "Mall Security",
      image: "/bg-1.jpg",
      description:
        "Professional mall security services with trained personnel and modern equipment.",
    },
    {
      name: "Car Parking Management",
      image: "/bg-2.jpg",
      description:
        "Professional car parking management services with trained personnel and modern equipment.",
    },
    {
      name: "Reception Concierge",
      image: "/bg-3.webp",
      description:
        "Professional reception concierge services with trained personnel and modern equipment.",
    },
    {
      name: "Static Patrol",
      image: "/bg-1.jpg",
      description:
        "Professional static patrol services with trained personnel and modern equipment.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src="/bg-1.jpg"
              alt="Professional Security Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 dark:bg-white/50 backdrop-blur-sm z-10" />
          </div>
        </div>
        <div className="hero-overlay absolute inset-0"></div>
        <div className="container-custom relative z-10 text-center text-accent">
          <h1 className="text-hero font-semibold mb-6">
            Professional Security Solutions
          </h1>
          <p className="text-subhero mb-8 max-w-2xl mx-auto">
            Comprehensive security services to protect your business, assets,
            and peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold text-text-primary mb-4">
              Why Choose SecurePro?
            </h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              We provide reliable, professional security services tailored to
              your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-h3 font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-semibold text-text-primary mb-4">
              Our Security Services
            </h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Comprehensive security solutions for all your protection needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-h3 font-semibold text-text-primary mb-3">
                    {service.name}
                  </h3>
                  <p className="text-body text-text-secondary mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 bg-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-6">
                Trusted Security Partner
              </h2>
              <p className="text-body text-text-secondary mb-6">
                With years of experience in the security industry, SecurePro has
                become a trusted partner for businesses across the UK. Our
                commitment to excellence and attention to detail ensures that
                your security needs are met with the highest standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">
                    Licensed and certified security personnel
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">
                    24/7 availability and rapid response
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">
                    State-of-the-art equipment and technology
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/bg-2.jpg"
                alt="Security Team at Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-accent">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-semibold mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on our
            professional security services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-secondary bg-accent text-primary hover:bg-support-3"
            >
              Contact Us
            </Link>
            <a
              href="tel:+441234567890"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FaPhone />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
