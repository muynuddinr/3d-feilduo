// pages/plumbing.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function PlumbingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    responseTime: 0,
    jobRevenue: 0,
    customerTrust: 0,
    adminTime: 100
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('features');
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate counters
          const interval = setInterval(() => {
            setCounters(prev => {
              const newCounters = { ...prev };
              if (newCounters.responseTime < 40) newCounters.responseTime += 2;
              if (newCounters.jobRevenue < 35) newCounters.jobRevenue += 2;
              if (newCounters.customerTrust < 90) newCounters.customerTrust += 3;
              if (newCounters.adminTime > 50) newCounters.adminTime -= 2;
              
              if (
                newCounters.responseTime >= 40 &&
                newCounters.jobRevenue >= 35 &&
                newCounters.customerTrust >= 90 &&
                newCounters.adminTime <= 50
              ) {
                clearInterval(interval);
              }
              
              return newCounters;
            });
          }, 50);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What features does Fielduo offer for Plumbing?",
      answer: "Fielduo offers a comprehensive suite of plumbing-specific features including emergency response systems, water quality monitoring, compliance management, specialized service tracking, customer portals, and preventive maintenance automation. Our platform provides real-time technician dispatch, mobile access to job details and customer history, digital documentation, inventory management for plumbing-specific parts, and advanced analytics tailored to plumbing business needs."
    },
    {
      question: "How can Plumbing businesses improve efficiency with field service management software?",
      answer: "Plumbing businesses can improve efficiency by up to 50% through intelligent scheduling that optimizes technician routes and reduces travel time. Our software automates administrative tasks, provides technicians with complete job information and history, enables real-time communication, and offers data-driven insights to optimize operations. Mobile capabilities allow plumbers to access information, update job status, and process payments on-site, eliminating return trips to the office."
    },
    {
      question: "How does the software help with regulatory compliance for Plumbing?",
      answer: "Fielduo helps plumbing businesses maintain regulatory compliance through digital inspection records, automated permit tracking, safety checklists, and compliance reporting. Our system ensures all work meets local and national plumbing codes, maintains proper documentation for audits, tracks technician certifications, and automates compliance reminders. We support industry-specific regulations and can be customized to meet local requirements and certification needs."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Plumbing?",
      answer: "Yes, Fielduo includes a comprehensive emergency response system with 24/7 dispatch capabilities, priority scheduling, and real-time technician tracking. Our platform can automatically identify and prioritize emergency calls, dispatch the nearest qualified plumber with the right equipment, provide customers with accurate ETAs, and maintain emergency service history. The system also optimizes schedules to accommodate emergency calls while minimizing disruption to routine work."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Plumbing?",
      answer: "Fielduo provides robust inventory and equipment tracking specifically designed for plumbing businesses. Our system manages specialized plumbing parts and tools with barcode scanning, automated reorder alerts, and supplier integration. It tracks equipment maintenance schedules, warranty information, and performance metrics. Technicians can access complete inventory information on their mobile devices, check part availability in real-time, and automatically update inventory levels when parts are used."
    },
    {
      question: "How does the software enhance customer communication for Plumbing?",
      answer: "Fielduo enhances customer communication through automated appointment reminders, real-time technician tracking with ETAs, digital service reports with before/after photos, and a customer self-service portal. Customers can view service history, schedule appointments, make payments, and access maintenance recommendations. Our system also facilitates two-way communication between plumbers and customers during service calls, including photo sharing and real-time updates."
    },
    {
      question: "What benefits do Plumbing clients see after implementing Fielduo?",
      answer: "Plumbing clients typically see significant improvements including 40% faster emergency response times, 25-35% revenue growth, 90%+ customer satisfaction rates, and 50% reduction in administrative time. Additional benefits include improved first-time fix rates, better inventory management, enhanced compliance, optimized technician utilization, and data-driven business insights that support strategic decision-making and growth."
    }
  ];

  const features = [
    {
      title: "Emergency Response System",
      description: "24/7 dispatch capabilities with priority scheduling and real-time technician tracking for urgent plumbing emergencies.",
      icon: "🚨",
      detail: "Rapid response system with priority dispatch and real-time status updates"
    },
    {
      title: "Water Quality Monitoring",
      description: "Comprehensive testing documentation, compliance tracking, and automated reporting for water quality standards.",
      icon: "💧",
      detail: "Automated compliance tracking and reporting for water quality standards"
    },
    {
      title: "Compliance Management",
      description: "Digital inspection records, permit tracking, safety checklists, and automated compliance reminders.",
      icon: "📋",
      detail: "Streamlined permit tracking and digital inspection records"
    },
    {
      title: "Specialized Service Tracking",
      description: "Hydro-jetting scheduling, pipe inspection documentation, and specialized equipment management.",
      icon: "🔧",
      detail: "Specialized tracking for hydro-jetting and pipe inspection services"
    },
    {
      title: "Customer Portal Access",
      description: "Self-service customer portals with service history, appointment scheduling, and real-time job updates.",
      icon: "👥",
      detail: "Customer self-service with real-time job tracking and history"
    },
    {
      title: "Preventive Maintenance",
      description: "Automated maintenance scheduling, service reminders, and proactive system health monitoring.",
      icon: "🔍",
      detail: "Automated scheduling for routine maintenance and system checks"
    }
  ];

  const benefits = [
    {
      title: "Reduce Emergency Response Time",
      description: "Optimize dispatch operations and technician routing to achieve industry-leading response times for critical plumbing emergencies.",
      icon: "⏱️",
      stat: "40%",
      color: "from-red-500 to-orange-500",
      label: "faster response"
    },
    {
      title: "Increase Job Revenue",
      description: "Maximize revenue through efficient scheduling, upselling opportunities, and comprehensive service documentation.",
      icon: "💰",
      stat: "35%",
      color: "from-green-500 to-teal-500",
      label: "revenue growth"
    },
    {
      title: "Enhance Customer Trust",
      description: "Build stronger customer relationships through transparent communication, professional service delivery, and reliable follow-up.",
      icon: "🤝",
      stat: "90%",
      color: "from-blue-500 to-indigo-500",
      label: "satisfaction rate"
    },
    {
      title: "Streamline Operations",
      description: "Eliminate administrative bottlenecks, reduce paperwork, and automate routine tasks to focus on core business growth.",
      icon: "⚙️",
      stat: "50%",
      color: "from-purple-500 to-pink-500",
      label: "less admin time"
    }
  ];

  const plumbingServices = [
    { name: "Emergency Repairs", icon: "🚨" },
    { name: "Pipe Inspection", icon: "🔍" },
    { name: "Hydro-jetting", icon: "💦" },
    { name: "Water Quality Testing", icon: "🧪" },
    { name: "Leak Detection", icon: "💧" },
    { name: "Drain Cleaning", icon: "🚽" },
    { name: "Fixture Installation", icon: "🚿" },
    { name: "Water Heater Service", icon: "🔥" }
  ];

  return (
    <>
      <Head>
        <title>Professional Plumbing Business Management | Fielduo</title>
        <meta name="description" content="Transform your plumbing operations with Fielduo's specialized management platform designed specifically for plumbing professionals" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Mouse Follower Effect */}
        <div 
          className="fixed pointer-events-none z-50 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            opacity: 0.5
          }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 z-0"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(40px)',
                  animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Plumbing Tools Mockups */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform rotate-12">
              <div className="w-full h-8 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="w-full h-6 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="absolute top-1/3 left-10 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform -rotate-12">
              <div className="w-full h-8 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="w-full h-6 bg-blue-500 rounded"></div>
            </div>
          </div>
          
          {/* Water Drop Animation */}
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <div className="flex space-x-2">
              <div className="w-4 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-4 h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Industry-Specific Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Plumbing</span> Business Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your plumbing operations with Fielduo's specialized management platform. Handle emergencies efficiently, ensure compliance, and deliver exceptional service that builds lasting customer relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Schedule Demo
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plumbing Services Showcase */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Service Coverage</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Manage all aspects of your plumbing business with our specialized tools
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
              {plumbingServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-xl mr-3">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plumbing-Focused Capabilities Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plumbing-Focused Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Purpose-built tools designed specifically for plumbing professionals to handle the unique challenges of your industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                    hoveredFeature === index ? 'border-blue-500 shadow-xl shadow-blue-500/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Measurable Business Advantages Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Business Advantages</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Join hundreds of plumbing businesses experiencing significant improvements in efficiency, customer satisfaction, and profitability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 mb-6">{benefit.description}</p>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-500">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get answers to common questions about Fielduo's plumbing field service management solutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`mb-6 rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeFaq === index 
                      ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-blue-500/30 shadow-xl shadow-blue-500/10' 
                      : 'bg-gray-900/50 border border-gray-800'
                  }`}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/30 transition duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium flex items-center">
                      <span className="text-blue-400 mr-3">Q{index + 1}.</span>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeFaq === index ? 'rotate-180 text-blue-400' : 'text-gray-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Plumbing Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the growing community of plumbing professionals who trust Fielduo to streamline their operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}