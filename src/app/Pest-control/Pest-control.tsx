// pages/pest-control.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function PestControlPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    clients: 0,
    onTimeService: 0,
    fasterRouting: 0,
    complianceAccuracy: 0
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
              if (newCounters.clients < 2500) newCounters.clients += 100;
              if (newCounters.onTimeService < 98) newCounters.onTimeService += 2;
              if (newCounters.fasterRouting < 40) newCounters.fasterRouting += 2;
              if (newCounters.complianceAccuracy < 100) newCounters.complianceAccuracy += 5;
              
              if (
                newCounters.clients >= 2500 &&
                newCounters.onTimeService >= 98 &&
                newCounters.fasterRouting >= 40 &&
                newCounters.complianceAccuracy >= 100
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
      question: "What features does Fielduo offer for Pest Control?",
      answer: "Fielduo offers a comprehensive suite of pest control features including treatment scheduling, chemical tracking, inspection forms, customer portals, seasonal planning, and route optimization. Our platform provides automated reminders for recurring services, detailed pesticide usage documentation with regulatory compliance logs, digital inspection templates with photo evidence, self-service customer portals, pest activity data analysis for preventive scheduling, and intelligent routing to maximize technician productivity."
    },
    {
      question: "How can Pest Control businesses improve efficiency with field service management software?",
      answer: "Pest control businesses can improve efficiency by up to 40% through intelligent routing that optimizes technician schedules and reduces travel time between locations. Our software automates administrative tasks, provides technicians with complete job information and history, enables real-time communication, and offers data-driven insights to optimize operations. Mobile capabilities allow technicians to access treatment protocols, update job status, and process payments on-site, eliminating return trips to the office."
    },
    {
      question: "How does the software help with regulatory compliance for Pest Control?",
      answer: "Fielduo helps pest control businesses maintain 100% compliance accuracy through comprehensive chemical tracking, digital documentation, and automated regulatory updates. Our system ensures all pesticide usage is properly documented with safety data sheets, maintains detailed inspection records with photo evidence, tracks technician certifications, and automates compliance reporting. We support EPA and state-specific regulations and can be customized to meet local requirements and certification needs."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Pest Control?",
      answer: "Yes, Fielduo includes a comprehensive emergency response system with 24/7 dispatch capabilities, priority scheduling, and real-time technician tracking for urgent pest control situations. Our platform can quickly identify and prioritize emergency calls, dispatch the nearest qualified technician with the right equipment and chemicals, provide customers with accurate ETAs, and maintain detailed emergency service history. The system also optimizes schedules to accommodate emergency calls while minimizing disruption to routine treatments."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Pest Control?",
      answer: "Fielduo provides robust inventory and equipment tracking specifically designed for pest control businesses with comprehensive chemical management, specialized equipment catalogs, and automated inventory systems. Our system tracks pesticide usage with batch tracking and expiration monitoring, manages specialized equipment like sprayers and traps, and maintains detailed asset maintenance schedules. Technicians can access complete inventory information on their mobile devices, check chemical availability in real-time, and automatically update inventory levels when products are used."
    },
    {
      question: "How does the software enhance customer communication for Pest Control?",
      answer: "Fielduo enhances customer communication through automated treatment reminders, real-time technician tracking with ETAs, digital service reports with before/after photos, and a customer self-service portal. Customers can view service history, access inspection reports, schedule appointments, make payments, and view treatment recommendations through the portal. Our system also facilitates two-way communication between technicians and customers during service calls, including sharing treatment plans and compliance documentation."
    },
    {
      question: "What benefits do Pest Control clients see after implementing Fielduo?",
      answer: "Pest control clients typically see significant improvements including serving over 2,500+ clients, 98% on-time service rate, 40% time saved through optimized routing, and 100% compliance accuracy. Additional benefits include improved customer retention with proactive service delivery, standardized treatment protocols ensuring consistent quality, enhanced operational efficiency, reduced chemical waste through better inventory management, and data-driven business insights that support strategic decision-making and growth."
    }
  ];

  const features = [
    {
      title: "Treatment Scheduling",
      description: "Recurring pest control service management for residential and commercial clients.",
      icon: "📅",
      details: ["Automated reminders", "Flexible intervals", "Client preferences"]
    },
    {
      title: "Chemical Tracking",
      description: "Pesticide usage documentation with built-in regulatory compliance logs.",
      icon: "🧪",
      details: ["Usage reporting", "Safety data sheets", "Regulatory compliance"]
    },
    {
      title: "Inspection Forms",
      description: "Digital inspection and treatment documentation for transparent reporting.",
      icon: "📋",
      details: ["Custom templates", "Photo evidence", "Digital signatures"]
    },
    {
      title: "Customer Portals",
      description: "Self-service scheduling and service history access for clients.",
      icon: "👥",
      details: ["Service history", "Online booking", "Document access"]
    }
  ];

  const additionalFeatures = [
    {
      title: "Seasonal Planning",
      description: "Optimize treatments using pest activity patterns and seasonal demand trends.",
      icon: "📊",
      details: ["Pest activity data", "Preventive scheduling", "Demand forecasting"]
    },
    {
      title: "Route Optimization",
      description: "Efficient technician routing across multiple properties to maximize productivity.",
      icon: "🗺️",
      details: ["Multi-stop routing", "Traffic awareness", "Time optimization"]
    }
  ];

  const advantages = [
    {
      title: "Regulatory Compliance",
      description: "Maintain comprehensive chemical usage and safety documentation.",
      icon: "📝",
      stat: "100%",
      color: "from-purple-500 to-pink-500",
      label: "Audit Ready"
    },
    {
      title: "Customer Retention",
      description: "Proactive service delivery, timely communication, and consistent results.",
      icon: "🤝",
      stat: "95%",
      color: "from-blue-500 to-cyan-500",
      label: "Retention Rate"
    },
    {
      title: "Operational Efficiency",
      description: "Optimized routing, scheduling, and resource management for higher output.",
      icon: "⚡",
      stat: "40%",
      color: "from-green-500 to-teal-500",
      label: "Time Saved"
    },
    {
      title: "Service Quality",
      description: "Standardized treatment protocols ensure consistent quality and assurance.",
      icon: "✅",
      stat: "99%",
      color: "from-yellow-500 to-orange-500",
      label: "Satisfaction"
    }
  ];

  const pestTypes = [
    { name: "General Pest Control", icon: "🐛" },
    { name: "Termite Treatment", icon: "🐜" },
    { name: "Rodent Control", icon: "🐭" },
    { name: "Bed Bug Extermination", icon: "🛏️" },
    { name: "Mosquito Control", icon: "🦟" },
    { name: "Wildlife Management", icon: "🦝" },
    { name: "Fumigation Services", icon: "💨" },
    { name: "Bird Control", icon: "🕊" }
  ];

  const stats = [
    { value: "2,500+", label: "Pest Control Clients" },
    { value: "98%", label: "On-Time Service" },
    { value: "40%", label: "Faster Routing" },
    { value: "100%", label: "Compliance Accuracy" }
  ];

  return (
    <>
      <Head>
        <title>Pest Control Management Software | Fielduo</title>
        <meta name="description" content="Specialized pest control management software with advanced tools for effective pest management" />
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
            background: 'radial-gradient(circle, rgba(128, 0, 128, 0.1) 0%, transparent 70%)',
            opacity: 0.5
          }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-gray-900/20 z-0"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
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
          
          {/* Hero Stats */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  2,500+
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">Pest Control</div>
                  <div className="text-lg font-medium">Clients</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  98%
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">On-Time</div>
                  <div className="text-lg font-medium">Service</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  40%
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">Faster</div>
                  <div className="text-lg font-medium">Routing</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  100%
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">Compliance</div>
                  <div className="text-lg font-medium">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pest Icons */}
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <div className="flex space-x-4">
              <div className="text-4xl">🐛</div>
              <div className="text-4xl">🐜</div>
              <div className="text-4xl">🐭</div>
              <div className="text-4xl">🛏️</div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                <span className="text-purple-400 font-medium">Industry-Specific Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pest Control</span> Management Software
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Fielduo provides pest control companies with advanced tools for effective pest management, compliance, and customer satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/20">
                  Book a Demo
                </button>
                <button className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pest Types Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Pest Coverage</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Manage all types of pest control services with our specialized tools
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
              {pestTypes.map((pest, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-xl mr-3">{pest.icon}</span>
                  <span className="font-medium">{pest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pest Control Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive pest management solutions for effective and compliant operations
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900 rounded-full p-1 flex">
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'features' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Core Features
                </button>
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'additional' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('additional')}
                >
                  Advanced Features
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                        hoveredFeature === index ? 'border-purple-500 shadow-xl shadow-purple-500/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="text-5xl mb-6">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-purple-400">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-500">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'additional' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {additionalFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                        hoveredFeature === index ? 'border-purple-500 shadow-xl shadow-purple-500/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="text-5xl mb-6">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-purple-400">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-500">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pest Control Advantages</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Drive business growth and efficiency with our specialized pest control solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-400 mb-6">{advantage.description}</p>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-gray-500">{advantage.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Knowledge Center</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our pest control management solutions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`mb-6 rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeFaq === index 
                      ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-purple-500/30 shadow-xl shadow-purple-500/10' 
                      : 'bg-gray-900/50 border border-gray-800'
                  }`}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/30 transition duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium flex items-center">
                      <span className="text-purple-400 mr-3">Q{index + 1}.</span>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeFaq === index ? 'rotate-180 text-purple-400' : 'text-gray-500'
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
        <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-gray-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pest Control Ready?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Schedule a personalized demonstration to see how Fielduo can streamline your pest management services.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/20">
              Get Started
            </button>
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
          background-image: linear-gradient(rgba(128, 0, 128, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(128, 0, 128, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}