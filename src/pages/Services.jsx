import { Car, Home, FileText, Shield, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Star, Quote, Users, Award, Clock, Building2, TreePine } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Car,
    title: "New & Used Car Loans",
    heading: "Drive Your Dream Car with Easy Financing",
    description: "Get fast and flexible car loans for both new and pre-owned vehicles. We help you choose the right plan with low interest rates, minimal paperwork, and quick approval — so you can bring your car home sooner.",
    features: [
      "Loan options from multiple trusted banks",
      "Transparent EMI and repayment terms",
      "Assistance throughout loan approval"
    ],
    cta: "Get Loan Assistance",
    color: "from-indigo-500 via-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Car RC Transfer",
    heading: "Smooth & Hassle-Free RC Transfer",
    description: "Buying or selling a vehicle? Leave the RC transfer process to our experts. We handle all RTO documentation efficiently, ensuring your Registration Certificate (RC) is transferred legally and on time.",
    features: [
      "End-to-end RTO process handling",
      "Verification & document submission",
      "Quick turnaround and updates"
    ],
    cta: "Book RC Transfer Service",
    color: "from-emerald-500 via-teal-500 to-teal-600"
  },
  {
    icon: FileText,
    title: "Insurance & Documentation",
    heading: "Comprehensive Insurance & Paperwork Support",
    description: "Protect what matters most with our vehicle insurance renewal, policy assistance, and document verification services. We ensure your vehicle and property paperwork is legally compliant and up-to-date.",
    features: [
      "Car, Bike & Property Insurance",
      "Document Renewal & Correction",
      "Claim Assistance Support"
    ],
    cta: "Renew or Insure Now",
    color: "from-violet-500 via-purple-500 to-purple-600"
  }
];

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

const financialPartners = [
  { name: "Axis Bank", shortName: "Axis Bank", logo: "/logos/axis.png" },
  { name: "ICICI Bank Limited", shortName: "ICICI Bank", logo: "/logos/icici.png" },
  { name: "IndusInd Bank Limited", shortName: "IndusInd Bank", logo: "/logos/indslund.png" },
  { name: "Hero FinCorp Limited", shortName: "Hero FinCorp", logo: "/logos/hero.png" },
  { name: "Tata Capital Financial Services Limited", shortName: "Tata Capital", logo: "/logos/tata.png" },
];

const financialPartners2 = [
  { name: "Cholamandalam Investment and Finance Company Limited", shortName: "Cholamandalam", logo: "/logos/chola.png" },
  { name: "SK Finance Limited", shortName: "SK Finance", logo: "/logos/skfinance.jpg" },
  { name: "Poonawalla Fincorp Limited", shortName: "Poonawalla Fincorp", logo: "/logos/poonawala.jpeg" },
  { name: "Shriram Finance Limited", shortName: "Shriram Finance", logo: "/logos/shriram.jpg" },
];


const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isPartnerSectionPaused, setIsPartnerSectionPaused] = useState(false);
  const [resumeTimer, setResumeTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const cards = document.querySelectorAll('.service-card');
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  // Pause scrolling on click, resume after 5s
  const handlePartnerClick = () => {
    setIsPartnerSectionPaused(true);
    if (resumeTimer) clearTimeout(resumeTimer);
    const timer = setTimeout(() => setIsPartnerSectionPaused(false), 5000);
    setResumeTimer(timer);
  };

  // Cleanup any pending timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, [resumeTimer]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-40 h-40 border-2 top-20 left-10 border-white/30 rounded-2xl rotate-12" style={{transform: `translateY(${scrollY * 0.1}px)`}}></div>
          <div className="absolute w-32 h-32 border-2 rounded-full bottom-20 right-20 border-white/30" style={{transform: `translateY(${scrollY * 0.15}px)`}}></div>
          <div className="absolute w-24 h-24 rotate-45 border-2 rounded-lg top-40 right-40 border-white/30" style={{transform: `translateY(${scrollY * 0.12}px)`}}></div>
        </div>
        
        <div className="relative z-10 px-6 py-20 mx-auto text-center max-w-7xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 border rounded-full shadow-lg bg-white/10 backdrop-blur-xl border-white/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider text-white uppercase">Professional Financial Solutions Since 2006</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Our Services
          </h1>
          
          {/* Subheading */}
          <p className="max-w-3xl mx-auto mb-4 text-xl font-medium text-blue-100 md:text-2xl">
            Trusted Financial & Documentation Solutions in Batala, Punjab
          </p>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto mb-10 text-base leading-relaxed text-slate-300 md:text-lg">
            With over 20 years of expertise, United Financial Services delivers professional, transparent, and client-focused solutions that make your financial journey seamless and stress-free.
          </p>

          {/* Stats */}
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

      {/* Introduction Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-1 mb-6 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
              ABOUT OUR EXPERTISE
            </div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Your One-Stop Financial Partner
            </h2>
          </div>
          
          <div className="p-8 mt-10 border shadow-xl bg-gradient-to-br from-white to-slate-50 border-slate-200 md:p-12 rounded-3xl">
            <p className="mb-6 text-lg leading-relaxed text-slate-700 md:text-xl">
              At <span className="font-bold text-blue-700">United Financial Services</span>, we specialize in comprehensive financial and automotive solutions. Led by <span className="font-bold text-blue-700">Mr. Mandeep Singh</span> — a professional with 20+ years of experience in finance and vehicle management — we are committed to providing trusted, transparent, and efficient services.
            </p>
            <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
              Whether you're looking for a new or used car loan, car RC transfer, insurance support, or property dealings — we offer transparent, reliable, and customer-focused solutions under one roof. With years of expertise and a strong presence in Batala City, Punjab, United Financial Services has become a one-stop destination for individuals and businesses seeking hassle-free financial and legal documentation solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span className="font-medium">Professional Approach</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span className="font-medium">Quick Processing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span className="font-medium">Trusted Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
              WHAT WE OFFER
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Comprehensive Service Portfolio
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              From car financing to property consultation, we provide end-to-end solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div
                  key={index}
                  className={`service-card group relative bg-gradient-to-b from-white to-slate-50/80 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-slate-100 backdrop-blur-sm ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-[100%] opacity-40 bg-gradient-to-br from-slate-100/80 to-transparent"></div>
                  
                  <div className="relative p-8 md:p-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center p-6 mb-8 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 ring-2 ring-white`}>
                      <Icon size={40} className="text-white" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      {service.heading}
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-8 text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="p-6 mb-8 space-y-4 border rounded-2xl bg-gradient-to-br from-slate-50 to-white border-slate-100">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 
                            size={20} 
                            className={`shrink-0 mt-0.5 ${service.color.includes('emerald') ? 'text-emerald-600' : service.color.includes('blue') ? 'text-blue-600' : service.color.includes('purple') ? 'text-purple-600' : 'text-orange-600'}`}
                          />
                          <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a href="/contact" className={`flex items-center justify-center w-full gap-2 px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r ${service.color} rounded-xl hover:shadow-xl hover:scale-[1.02] group-hover:gap-4 ring-1 ring-white/10`}>
                      {service.cta}
                      <ArrowRight size={20} className="transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-white">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
            TRUSTED PARTNERSHIPS
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-900">
            Our Trusted Banking & Financial Partners
          </h2>
          <p className="max-w-3xl mx-auto mb-12 leading-relaxed text-slate-600">
            United Financial Services, led by <span className="font-semibold text-slate-800">Mandeep Singh</span>,
            is a certified <span className="font-semibold text-slate-800">Direct Selling Agent (DSA)</span>
            for India's leading banks and finance companies.
            We maintain strong partnerships with top financial institutions to offer you the best rates and fastest approvals.
          </p>

            {/* Scrolling logo rows */}
            <div className="relative w-full overflow-hidden">
              {/* Top Row */}
              <div
                className={`flex items-center flex-nowrap gap-12 ${
                  isPartnerSectionPaused ? 'pause-animation' : 'animate-marquee-ltr'
                }`}
                onClick={handlePartnerClick}
              >
                {[...financialPartners, ...financialPartners].map((partner, index) => (
                  <div key={`top-${index}`} className="relative text-center group shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      onError={(e) => (e.currentTarget.src = "/logos/default.png")} // fallback
                      className="h-16 mx-auto transition duration-100 hover:scale-105"
                    />
                    <div className="mt-2 text-xs font-medium text-slate-700">{partner.shortName}</div>
                  </div>
                ))}
              </div>

              {/* Bottom Row */}
              <div
                className={`flex items-center flex-nowrap gap-12 mt-12 ${
                  isPartnerSectionPaused ? 'pause-animation' : 'animate-marquee-ltr'
                }`}
                onClick={handlePartnerClick}
              >
                {[...financialPartners2, ...financialPartners2].map((partner, index) => (
                  <div key={`bottom-${index}`} className="relative text-center group shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      onError={(e) => (e.currentTarget.src = "/logos/default.png")}
                      className="h-16 mx-auto transition duration-100 hover:scale-105"
                    />
                    <div className="mt-2 text-xs font-medium text-slate-700">{partner.shortName}</div>
                  </div>
                ))}
              </div>
            </div>


          {/* Partner Benefits */}
          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-blue-600 bg-blue-100 rounded-xl">
                <Shield size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Trusted Partnerships</h3>
              <p className="text-slate-600">Direct association with India's leading financial institutions</p>
            </div>
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-emerald-100 text-emerald-600 rounded-xl">
                <Clock size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Quick Processing</h3>
              <p className="text-slate-600">Fast-tracked applications with priority processing</p>
            </div>
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-purple-600 bg-purple-100 rounded-xl">
                <FileText size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Better Rates</h3>
              <p className="text-slate-600">Competitive interest rates and flexible terms</p>
            </div>
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-amber-100 text-amber-600 rounded-xl">
                <Award size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Expert Support</h3>
              <p className="text-slate-600">Dedicated assistance throughout the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Services Section */}
      <section className="py-20 overflow-hidden bg-gradient-to-br from-amber-50 to-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1 mb-6 text-sm font-bold rounded-full text-amber-700 bg-amber-100">
              PROPERTY SERVICES
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900">
              Trusted Property Solutions in Batala
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Your reliable partner for all property-related transactions. We handle residential, 
              commercial, and agricultural properties with expertise and transparency.
            </p>
          </div>

          <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-xl group">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 text-amber-600 rounded-xl">
                <Home size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Residential Properties</h3>
              <p className="mb-4 text-slate-600">Find your perfect home with our extensive residential property listings in prime locations.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Houses & Apartments</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Plots & Land</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Builder Floors</span>
                </li>
              </ul>
            </div>

            <div className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-xl group">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 text-amber-600 rounded-xl">
                <Building2 size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Commercial Properties</h3>
              <p className="mb-4 text-slate-600">Strategic commercial spaces for your business needs with prime visibility and accessibility.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Shops & Showrooms</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Office Spaces</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Commercial Land</span>
                </li>
              </ul>
            </div>

            <div className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-xl group md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 text-amber-600 rounded-xl">
                <TreePine size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Agricultural Properties</h3>
              <p className="mb-4 text-slate-600">Expert guidance in agricultural land transactions with complete legal support.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Farmland</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Orchards</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-600" />
                  <span>Agricultural Plots</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative p-8 overflow-hidden text-white bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 rounded-3xl md:p-12">
            <div className="absolute inset-0 bg-[url('/patterns/texture.png')] opacity-10"></div>
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">Looking for Property?</h3>
                <p className="max-w-xl text-orange-100">
                  Whether you're buying, selling, or investing, our expert property consultants are here to help.
                  Get personalized assistance and find the best deals in Batala.
                </p>
              </div>
              <a href="/contact" className="flex items-center gap-2 px-8 py-4 font-bold text-orange-600 transition bg-white shadow-lg whitespace-nowrap rounded-xl hover:bg-orange-50 hover:shadow-xl">
                Contact Property Expert
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                className="relative p-8 transition-all duration-300 border shadow-lg bg-gradient-to-br from-white to-slate-50 border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-2"
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
                    <div className="flex items-center justify-center text-xl font-bold text-white rounded-full shadow-md w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700">
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

      {/* CTA Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <div className="relative overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative px-8 py-16 text-center md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Looking for Reliable Financial & Documentation Support?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
              From car loans to property consulting, United Financial Services is your reliable partner for every financial and legal need. We blend professional expertise with personalized support, ensuring peace of mind in every transaction.
            </p>
            <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold transition-all duration-300 bg-white shadow-lg text-slate-900 rounded-xl hover:shadow-2xl hover:scale-105">
              Contact Us Today
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              © 2024 United Financial Services, Batala, Punjab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;