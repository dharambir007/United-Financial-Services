import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Navigation, PhoneCall } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const subject = encodeURIComponent(`New Contact Form Submission`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

  window.location.href = `mailto:mandeepbtl@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCall = () => {
    window.location.href = "tel:+919888124060";
  };

  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=31.8215488,75.2021441",
      "_blank"
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
  <div className="min-h-screen font-sans text-gray-800 bg-linear-to-br from-gray-50 to-blue-50 pt-16">
      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-6 py-20 overflow-hidden border-b border-gray-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 translate-x-32 -translate-y-32 bg-blue-100 rounded-full w-96 h-96 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 -translate-x-32 translate-y-32 rounded-full w-80 h-80 bg-emerald-100 blur-3xl opacity-40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl"
          >
            Your trusted partner for comprehensive financial solutions. Reach out today for personalized assistance with loans, investments, and financial planning.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information Card */}
          <motion.div {...fadeInLeft} className="space-y-8">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 overflow-hidden shadow-2xl bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 bg-white rounded-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -translate-x-12 translate-y-12 bg-white rounded-full opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quick Response Guaranteed</h3>
                </div>
                <p className="mb-6 leading-relaxed text-white text-opacity-95">
                  Need immediate assistance? Our financial experts are available to discuss your requirements and provide tailored solutions.
                </p>
                <div className="flex">
                  <motion.button
                    onClick={handleCall}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-teal-700 transition-all duration-200 bg-white shadow-lg rounded-xl hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Get in Touch
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Have questions about our services? Our experienced team is ready to provide expert guidance tailored to your financial needs.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <motion.div
                {...scaleIn}
                transition={{ delay: 0.1 }}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      Near O.B.C. Bank,<br />
                      Gurdaspur Road, Batala<br />
                      Punjab, India - 143505
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...scaleIn}
                transition={{ delay: 0.2 }}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Phone Number
                    </h3>
                    <p className="mb-3 text-gray-600">+91 98881-24060</p>
                    <button
                      onClick={handleCall}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-700 rounded-lg hover:bg-blue-800"
                      aria-label="Call United Financial Services"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...scaleIn}
                transition={{ delay: 0.3 }}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Email Address
                    </h3>
                    <a
                      href="mailto:mandeepbtl@gmail.com"
                      className="text-blue-700 transition-colors hover:text-blue-800"
                    >
                      mandeepbtl@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Business Hours */}
            <motion.div
              {...scaleIn}
              transition={{ delay: 0.4 }}
              className="p-6 text-white shadow-lg bg-linear-to-br from-blue-700 to-blue-800 rounded-xl"
            >
              <h3 className="mb-3 text-xl font-semibold">Business Hours</h3>
              <div className="space-y-2 text-gray-100">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeInRight}
            className="p-8 bg-white border border-gray-100 shadow-xl lg:p-10 rounded-2xl"
          >
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98881-24060"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full py-4 space-x-2 font-semibold text-white transition-all duration-200 rounded-lg shadow-lg bg-linear-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        {...fadeInUp}
        className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Visit Our Office
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our office is located near O.B.C. Bank on Gurdaspur Road, Batala – easy to access and centrally positioned for all regional clients.
          </p>
        </div>

        <div className="overflow-hidden bg-white border border-gray-100 shadow-xl rounded-2xl">
          <iframe
            title="United Financial Services Batala Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9270077463815!2d75.2021441!3d31.8215488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bc32042231ec1%3A0xe8dbff016654a794!2sUnited%20Financial%20Services!5e0!3m2!1sen!2sin!4v1730456781234!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full border-none"
          ></iframe>
          
          <div className="p-6 text-center bg-linear-to-r from-gray-50 to-blue-50">
            <motion.button
              onClick={handleDirections}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-lg"
              aria-label="Get directions to United Financial Services"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
  <footer className="py-8 text-white bg-linear-to-r from-gray-900 to-gray-800">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <p className="text-gray-300">
            © {new Date().getFullYear()} United Financial Services. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted partner for financial solutions in Punjab.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;