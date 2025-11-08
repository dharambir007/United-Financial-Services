import { 
  // Icons from Services page (re-used)
  Car, Home, FileText, Shield, ArrowRight, CheckCircle2, Phone, Mail, MapPin, 
  Facebook, Instagram, Linkedin, Star, Quote, Users, Award, Clock, Building2, TreePine,
  // New Icons for About page
  Eye,        // For Transparency
  Briefcase   // For One-Stop Solution
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Data (Consistent with Services.js) ---

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Batala",
    text: "United Financial Services made getting my car loan incredibly easy. The team was professional, transparent, and helped me secure the best interest rate. Highly recommend their services!",
    rating: 5
  },
  {
    name: "Simran Kaur",
    role: "Property Buyer",
    text: "I was nervous about buying my first property, but Mr. Mandeep Singh and his team guided me through every step. Their attention to detail and honest advice gave me complete confidence.",
    rating: 5
  },
  {
    name: "Amarjeet Singh",
    role: "Vehicle Owner",
    text: "The RC transfer service was smooth and hassle-free. They handled all the paperwork and kept me updated throughout. Great service and very trustworthy!",
    rating: 5
  }
];

const stats = [
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Award, value: "20+", label: "Years Experience" }
];

// (Financial partners data commented out, same as in Services.js)
// const financialPartners = [ ... ];
// const financialPartners2 = [ ... ];

// --- New Data for About Page ---

const coreValues = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We build lasting relationships on a foundation of honesty. Your best interests are our top priority, always.",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "No hidden fees, no complex jargon. We ensure you understand every step of the process for total peace of mind.",
    color: "text-emerald-600 bg-emerald-100"
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your needs drive us. We provide personalized solutions tailored specifically to your unique financial situation and goals.",
    color: "text-violet-600 bg-violet-100"
  },
  {
    icon: Award,
    title: "Professional Expertise",
    description: "Our 20+ years of hands-on experience mean you get proven, effective, and compliant advice every single time.",
    color: "text-amber-600 bg-amber-100"
  }
];

// --- About Page Component ---

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const cards = document.querySelectorAll('.fade-in-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          if (!visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section (Re-styled for About) */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated background elements (Same as Services) */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Floating geometric shapes (Same as Services) */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-40 h-40 border-2 top-20 left-10 border-white/30 rounded-2xl rotate-12" style={{transform: `translateY(${scrollY * 0.1}px)`}}></div>
          <div className="absolute w-32 h-32 border-2 rounded-full bottom-20 right-20 border-white/30" style={{transform: `translateY(${scrollY * 0.15}px)`}}></div>
        </div>
        
        <div className="relative z-10 px-6 py-20 mx-auto text-center max-w-7xl">
          {/* Badge (Same as Services) */}
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 border rounded-full shadow-lg bg-white/10 backdrop-blur-xl border-white/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider text-white uppercase">Professional Financial Solutions Since 2006</span>
          </div>
          
          {/* Main Heading (Updated) */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Our Story of Trust & Expertise
          </h1>
          
          {/* Description (Updated) */}
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-slate-300 md:text-lg">
            Learn about our mission, our values, and the team dedicated to simplifying your financial journey in Batala, Punjab.
          </p>

          {/* Stats (Same as Services) */}
          <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="p-6 border bg-white/10 backdrop-blur-md border-white/20 rounded-2xl">
                  <Icon size={32} className="mx-auto mb-3 text-emerald-400" strokeWidth={2} />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="fade-in-card" style={{ transitionDelay: '100ms', opacity: visibleCards.includes(0) ? 1 : 0, transform: visibleCards.includes(0) ? 'translateY(0)' : 'translateY(48px)', transition: 'all 0.7s' }}>
            <div className="inline-block px-4 py-1 mb-6 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
              OUR MISSION
            </div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Your Trusted Financial Partner in Batala
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-700 md:text-xl">
              Founded in 2006, United Financial Services was built on a simple premise: to provide **honest, transparent, and professional** financial and documentation services to the people of Batala.
            </p>
            <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
              We understand that navigating car loans, RC transfers, and property dealings can be stressful. Our mission is to simplify this entire process. Led by **Mr. Mandeep Singh** and backed by 20+ years of experience, we act as your single point of contact, ensuring a seamless, efficient, and stress-free experience from start to finish.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span className="font-medium">Local Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span className="font-medium">Client-First Service</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span className="font-medium">Proven Track Record</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div 
            className="relative w-full h-80 lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl fade-in-card"
            style={{ transitionDelay: '200ms', opacity: visibleCards.includes(1) ? 1 : 0, transform: visibleCards.includes(1) ? 'translateY(0)' : 'translateY(48px)', transition: 'all 0.7s' }}
          >
            <img 
              src="/home page/about.jpg" 
              alt="United Financial Services Professional Team" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="px-6 py-20 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-1 mb-6 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
              THE FOUNDER
            </div>
            <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Meet Mr. Mandeep Singh
            </h2>
          </div>
          
          <div 
            className="p-8 mt-10 border shadow-xl bg-linear-to-br from-white to-slate-50 border-slate-200 md:p-12 rounded-3xl fade-in-card"
            style={{ transitionDelay: '100ms', opacity: visibleCards.includes(2) ? 1 : 0, transform: visibleCards.includes(2) ? 'translateY(0)' : 'translateY(48px)', transition: 'all 0.7s' }}
          >
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="relative flex-shrink-0">
                <img
                  src="/home page/owner.jpg"
                  alt="Mandeep Singh, Founder"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
                />
                <div className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                  <Award size={32} className="text-blue-700" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="mb-6 text-lg leading-relaxed text-slate-700 md:text-xl">
                  With **20+ years of hands-on experience** in finance, vehicle management, and property dealings, Mandeep Singh is the driving force behind United Financial Services.
                </p>
                <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
                  His deep expertise and unwavering commitment to honesty have made him one of Batala's most trusted financial consultants. He personally oversees operations, ensuring every client receives the professional and ethical service they deserve.
                </p>
                <blockquote className="relative p-4 italic border-l-4 border-blue-600 rounded-r-lg bg-blue-50 text-slate-800">
                  "My goal is simple: to provide clear, honest advice that helps my clients succeed and removes the stress from financial decisions."
                  <cite className="block mt-2 text-sm not-italic font-semibold text-right text-slate-600">— Mandeep Singh</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-20 bg-linear-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
              OUR CORE VALUES
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              The Principles That Guide Us
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Our commitment to you is built on these four pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const isVisible = visibleCards.includes(index + 3); // Offset by previous card count
              return (
                <div
                  key={index}
                  className={`fade-in-card group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-slate-100 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className={`flex items-center justify-center w-16 h-16 mb-6 ${value.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Same as Services) */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-slate-600">
              Here's what our satisfied clients have to say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative p-8 transition-all duration-300 border shadow-lg bg-linear-to-br from-white to-slate-50 border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <Quote size={48} className="absolute text-blue-100 top-6 right-6" />
                
                <div className="relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="mb-6 leading-relaxed text-slate-700">
                    "{testimonial.text}"
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-center text-xl font-bold text-white rounded-full shadow-md w-14 h-14 bg-linear-to-br from-blue-600 to-blue-700">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Same as Services) */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <div className="relative overflow-hidden shadow-2xl bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative px-8 py-16 text-center md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
              Let our 20+ years of experience work for you. Contact Mandeep Singh and the team today for a no-obligation consultation on your loan, property, or documentation needs.
            </p>
            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold transition-all duration-300 bg-white shadow-lg text-slate-900 rounded-xl hover:shadow-2xl hover:scale-105">
              Contact Us Today
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Same as Services) */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 pb-10 mb-10 border-b md:grid-cols-3 border-slate-700">
            {/* Company Info */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">United Financial Services</h3>
              <p className="mb-4 leading-relaxed text-slate-400">
                Your trusted partner for financial and documentation solutions in Batala, Punjab. Delivering excellence since 2006.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-400" />
                  <span>+91 98881-24060</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-400" />
                  <span>mandeepbtl@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Our Office</h3>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-blue-400 shrink-0" />
                <span>Near O.B.C. Bank, Gurdaspur Road, Batala<br/>Punjab, India - 143505</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} United Financial Services, Batala, Punjab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;