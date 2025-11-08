import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import FloatingCallButton from '../components/FloatingCallButton';
import {
  Landmark,    
  FileText,     
  BarChart3,    
  PiggyBank,    
  Briefcase,   
  ShieldCheck, 
  Eye,          
  Award,        
  Sprout,       
  Car,          
  ClipboardCheck, 
  CalendarDays, 
  Users,        
  Star,         
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  X,
  Quote,      
} from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-scroll testimonials every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Car className="w-10 h-10 text-emerald-700" />,
      title: 'Drive Your Dream Car with Easy Financing',
      description: 'Get fast and flexible car loans for both new and pre-owned vehicles. We help you choose the right plan with low interest rates, minimal paperwork, and quick approval — so you can bring your car home sooner.',
      features: [
        'Loan options from multiple trusted banks',
        'Transparent EMI and repayment terms',
        'Assistance throughout loan approval'
      ],
      cta: 'Get Loan Assistance'
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-emerald-700" />,
      title: 'Smooth & Hassle-Free RC Transfer',
      description: 'Buying or selling a vehicle? Leave the RC transfer process to our experts. We handle all RTO documentation efficiently, ensuring your Registration Certificate (RC) is transferred legally and on time.',
      features: [
        'End-to-end RTO process handling',
        'Verification & document submission',
        'Quick turnaround and updates'
      ],
      cta: 'Book RC Transfer Service'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-emerald-700" />,
      title: 'Comprehensive Insurance & Paperwork Support',
      description: 'Protect what matters most with our vehicle insurance renewal, policy assistance, and document verification services. We ensure your vehicle and property paperwork is legally compliant and up-to-date.',
      features: [
        'Car, Bike & Property Insurance',
        'Document Renewal & Correction',
        'Claim Assistance Support'
      ],
      cta: 'Get Insurance Help'
    }
  ];

  const testimonials = [
    {
      name: 'Harjinder Singh',
      role: 'Medical Professional',
      photo: 'HS',
      text: "Got my car loan approved within 48 hours with a great interest rate. The team handled all paperwork and guided me at every step—super smooth experience."
    },
    {
      name: 'Ramesh Kumar Mahajan',
      role: 'Small Business Owner',
      photo: 'RM',
      text: 'Needed to upgrade my delivery vehicle. United Financial arranged a car loan quickly with EMIs that fit my budget. Transparent process and timely updates.'
    },
    {
      name: 'Amardeep Singh',
      role: 'Government Employee',
      photo: 'AS',
      text: 'From car loan to RC transfer and insurance, everything was managed in one place. Zero hassle and very professional service.'
    },
    {
      name: 'Gurpreet Singh',
      role: 'General Store Owner',
      photo: 'GS',
      text: 'I needed a car for daily supply runs. They secured the financing fast with no hidden charges. Highly recommended for car loans.'
    }
  ];

  const values = [
    { icon: <ShieldCheck className="w-8 h-8 text-blue-900" />, name: 'Integrity' },
    { icon: <Eye className="w-8 h-8 text-blue-900" />, name: 'Transparency' },
    { icon: <Award className="w-8 h-8 text-blue-900" />, name: 'Expertise' },
    { icon: <Sprout className="w-8 h-8 text-blue-900" />, name: 'Long-Term Growth' }
  ];

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    alert('Appointment request submitted! We will contact you soon.');
    setShowAppointmentModal(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      
      {/* 1. Hero Section */}
      <section id="home" className="relative py-24 md:py-32 bg-gradient-to-r from-blue-50/50 to-emerald-50/50">
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            
            {/* Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-blue-900 md:text-6xl">
                Empowering Smarter Financial Decisions
              </h1>

              <p className="mb-10 text-lg leading-relaxed text-gray-700 md:text-xl">
                With decades of proven expertise, we provide tailored financial strategies that build lasting wealth and secure your future.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-semibold text-center text-white transition duration-300 bg-blue-900 rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                >
                  Book Consultation
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-semibold text-center text-blue-900 transition duration-300 bg-transparent border-2 border-blue-900 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                >
                  Explore Services
                </motion.a>
              </div>
            </motion.div>

            {/* Hero Image / Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="relative justify-center hidden md:flex"
            >
              <div className="relative w-full overflow-hidden rounded-lg shadow-2xl" style={{paddingBottom: '80%'}}>
                <img 
                  src="/home page/business.avif" 
                  alt="Business Illustration" 
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 2. Trust / Stats Strip */}
      <TrustStrip />

      {/* 3. Meet Our Founder Section */}
      <FounderSection />

      {/* 4. Services Overview Section */}
      <ServicesSection services={services} />

      {/* 5. About + Values Section */}
      <AboutValuesSection values={values} />

      {/* 5. Testimonials Section */}
      <TestimonialsSection
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />
      
      {/* 6. CTA Banner */}
      <CTASection setShowAppointmentModal={setShowAppointmentModal} />
      
      {/* 7. Footer */}
      <Footer />
      
      {/* Modal for Appointment Booking */}
      <AppointmentModal 
        show={showAppointmentModal} 
        onClose={() => setShowAppointmentModal(false)} 
        onSubmit={handleAppointmentSubmit} 
      />

      {/* Floating Call Button */}
      <FloatingCallButton phoneNumber="+919888124060" />
    </div>
  );
};

// --- Sub-Components ---

const TrustStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  // Custom hook for counting animation
  const useAnimatedCounter = (target, inView) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!inView) return;
      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;
      const increment = target / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(current));
        }
      }, interval);
      return () => clearInterval(timer);
    }, [target, inView]);
    return count;
  };

  const clientsCount = useAnimatedCounter(5000, inView);
  const yearsCount = useAnimatedCounter(20, inView);
  const satisfactionCount = useAnimatedCounter(100, inView);

  const stats = [
    { icon: <CalendarDays className="w-8 h-8 text-emerald-700" />, value: `${yearsCount}+`, label: 'Years of Expertise' },
    { icon: <Users className="w-8 h-8 text-emerald-700" />, value: `${clientsCount.toLocaleString()}+`, label: 'Clients Guided' },
    { icon: <Star className="w-8 h-8 text-emerald-700" />, value: `${satisfactionCount}%`, label: 'Client Satisfaction' },
    { icon: <Award className="w-8 h-8 text-emerald-700" />, value: 'Certified', label: 'Financial Experts' },
  ];

  return (
    <section ref={ref} className="py-16 bg-white border-gray-100 border-y">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {stat.icon}
              <div className="mt-2 text-4xl font-bold text-blue-900">{stat.value}</div>
              <div className="mt-1 text-base text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-linear-to-b from-blue-50/30 to-transparent">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100/80">
            THE FOUNDER
          </span>
          <h2 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl">Meet Mr. Mandeep Singh</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm md:p-12 rounded-3xl"
        >
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Image Side */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/home page/owner.jpg"
                  alt="Mandeep Singh, Founder"
                  className="object-cover w-48 h-48 border-4 border-white rounded-full shadow-lg md:w-64 md:h-64"
                />
                <div className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 bg-white border-4 border-white rounded-full shadow-lg md:w-20 md:h-20">
                  <Award className="w-8 h-8 text-emerald-600 md:w-10 md:h-10" />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  With <strong className="text-blue-900">20+ years of hands-on experience</strong> in finance, vehicle management, and property dealings, Mandeep Singh is the driving force behind United Financial Services. His journey began in the heart of Batala, where he witnessed firsthand the confusion and stress that often accompany financial decisions.
                </p>
                <p>
                  Determined to make a difference, Mandeep Singh built a company rooted in <strong className="text-blue-900">transparency, trust, and real results</strong>. Today, United Financial Services stands as a beacon for individuals and businesses seeking clear guidance, whether it's securing a car loan, managing investments, or navigating property deals.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative p-6 border-l-4 border-emerald-500 bg-emerald-50/50 rounded-r-xl">
                <Quote className="absolute w-8 h-8 text-emerald-200 top-4 left-4" />
                <p className="pl-8 italic text-gray-800">
                  "My goal is simple: to provide clear, honest advice that helps my clients succeed and removes the stress from financial decisions."
                </p>
                <p className="pl-8 mt-3 text-sm font-semibold text-blue-900">— Mandeep Singh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = ({ services }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref} id="services" className="py-24 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl">Our Financial Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">Comprehensive vehicle financing and documentation services to make your journey smoother.</p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-8 transition duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-5 shrink-0">
                {service.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-blue-900">{service.title}</h3>
              <p className="mb-5 text-gray-700">{service.description}</p>
              
              {/* Features List */}
              {service.features && (
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* CTA Button */}
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 mt-auto font-semibold text-white transition-colors rounded-lg bg-emerald-700 hover:bg-emerald-600"
              >
                {service.cta} <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutValuesSection = ({ values }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref} id="about" className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full h-80 lg:h-full"
          >
            <img 
              src="/home page/office.jpeg" 
              alt="United Financial Services Office" 
              className="object-cover w-full h-full rounded-lg shadow-xl"
            />
          </motion.div>
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl">Our Commitment to You</h2>
            <p className="mb-8 text-lg text-gray-700">
              We are a team of dedicated financial experts committed to building long-term relationships based on trust and results. Our mission is to provide you with the clarity and strategic guidance needed to navigate complex financial landscapes and achieve your goals.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {values.map((value) => (
                <div key={value.name} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-emerald-50">
                    {value.icon}
                  </div>
                  <span className="text-xl font-semibold text-gray-800">{value.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ testimonials, currentTestimonial, setCurrentTestimonial }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref} id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl">What Our Clients Say</h2>
          <p className="text-lg text-gray-700">Real experiences from our valued partners</p>
        </motion.div>
        
        <div className="relative min-h-[280px] sm:min-h-[240px] md:h-56">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4 }} 
              className="absolute inset-0 p-6 overflow-hidden bg-white border border-gray-100 shadow-2xl sm:p-8 rounded-xl"
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="mb-4 text-base italic leading-relaxed text-gray-700 break-words sm:mb-6 sm:text-lg md:text-xl">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-lg font-bold text-blue-900 break-words sm:text-xl">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sm font-medium break-words sm:text-base text-emerald-700">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-12 mt-8">
          <button 
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} 
            className="p-2 text-blue-900 transition bg-white border rounded-full shadow-md hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentTestimonial(index)} 
                className={`h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-900 w-6' : 'bg-gray-300 w-3'}`} 
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} 
            className="p-2 text-blue-900 transition bg-white border rounded-full shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ setShowAppointmentModal }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-linear-to-r from-blue-50 to-emerald-50">
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl">
            Let's Build Your Financial Future Together
          </h2>
          <p className="mb-10 text-xl text-gray-700">
            Connect with our experts today for a complimentary consultation and take the first step towards achieving your financial goals.
          </p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 35, 102, 0.2)' }} 
            whileTap={{ scale: 0.95 }} 
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition duration-300 bg-blue-900 rounded-lg shadow-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
          >
            Schedule Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const AppointmentModal = ({ show, onClose, onSubmit }) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }} 
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-900">Book Appointment</h3>
                <button onClick={onClose} className="p-2 text-gray-500 transition rounded-full hover:bg-gray-100 hover:text-gray-800">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700" placeholder="mandeepbtl@gmail.com" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700" placeholder="+1 (555) 123-4567" />
                </div>
                
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  className="flex items-center justify-center w-full gap-2 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg shadow-lg bg-emerald-700 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Confirm Appointment
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-blue-950">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 mb-12 md:grid-cols-3">
          
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                <Landmark className="w-6 h-6 text-blue-900" />
              </div>
              <span className="text-xl font-bold">United Financial Services</span>
            </div>
            <p className="text-sm text-blue-200">Empowering smarter financial decisions for a secure future.</p>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-blue-200 transition hover:text-white">New and User Car Loan</a></li>
              <li><a href="#services" className="text-blue-200 transition hover:text-white">Property Loan</a></li>
              <li><a href="#services" className="text-blue-200 transition hover:text-white">Car Sale and Purchase</a></li>
              <li><a href="#services" className="text-blue-200 transition hover:text-white">Vehicle RC and Insurance Services</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Near O.B.C. Bank, Gurdaspur Road, Batala<br />Punjab, India - 143505</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-200">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+91 98881-24060</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-200">
                <Mail className="w-5 h-5 shrink-0" />
                <span>mandeepbtl@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 text-sm text-center text-blue-300 border-t border-blue-800">
          <p>&copy; {new Date().getFullYear()} United Financial Services. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Home;



