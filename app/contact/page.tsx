"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const services = [
    "Car Parking Management",
    "CCTV Operations",
    "Door Supervision",
    "Mall Security",
    "Reception Concierge",
    "Short Notice Services",
    "Static / Mobile Patrol",
    "Other",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-bg-secondary py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-h1 font-semibold text-text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Get in touch with us to discuss your security needs. We're here to
              help you find the perfect security solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-6">
                Get a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary placeholder-text-secondary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary placeholder-text-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary placeholder-text-secondary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary placeholder-text-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary placeholder-text-secondary"
                    placeholder="Please describe your security requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Phone
                    </h3>
                    <p className="text-text-secondary">+44 744 5611726</p>
                    <p className="text-sm text-text-secondary">
                      24/7 Emergency: +44 744 5611726
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Email
                    </h3>
                    <p className="text-text-secondary">
                      info@instant-support-services.com
                    </p>
                    <p className="text-text-secondary">
                      Instanstservices313@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Address
                    </h3>
                    <p className="text-text-secondary">
                      Instant Support Services (ISS)
                      <br />
                      225 Barnes Hill
                      <br />
                      B29 5UJ
                      <br />
                      Birmingham
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-text-secondary">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                      <br />
                      <span className="text-primary font-semibold">
                        Emergency Services: 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <FaShieldAlt className="text-red-600 dark:text-red-400 text-xl" />
                  <h3 className="font-semibold text-red-800 dark:text-red-200">
                    Emergency Contact
                  </h3>
                </div>
                <p className="text-red-700 dark:text-red-300 text-sm mb-3">
                  For urgent security situations, call our 24/7 emergency line
                  immediately.
                </p>
                <a
                  href="tel:+447445611726"
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Emergency: +44 744 5611726
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-h2 font-semibold text-text-primary mb-4">
              Our Location
            </h2>
            <p className="text-body text-text-secondary">
              Visit our office to discuss your security needs in person.
            </p>
          </div>
          <div className="bg-border-color h-64 rounded-lg flex items-center justify-center">
            <p className="text-text-secondary">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
