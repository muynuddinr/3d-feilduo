// pages/hvac.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function HVACPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    efficiency: 0,
    retention: 0,
    revenue: 0,
    fixRate: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
              if (newCounters.efficiency < 35) newCounters.efficiency += 2;
              if (newCounters.retention < 25) newCounters.retention += 2;
              if (newCounters.revenue < 30) newCounters.revenue += 2;
              if (newCounters.fixRate < 85) newCounters.fixRate += 3;
              
              if (
                newCounters.efficiency >= 35 &&
                newCounters.retention >= 25 &&
                newCounters.revenue >= 30 &&
                newCounters.fixRate >= 85
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
      question: "What features does Fielduo offer for HVAC?",
      answer: "Fielduo offers a comprehensive suite of HVAC-specific features including equipment database management, seasonal scheduling optimization, maintenance contract automation, energy efficiency tracking, emergency service management, and HVAC-specific parts inventory. Our platform also provides technician mobile apps with offline capabilities, customer self-service portals, and advanced analytics tailored to HVAC business needs."
    },
    {
      question: "How can HVAC businesses improve efficiency with field service management software?",
      answer: "HVAC businesses can improve efficiency by up to 35% through intelligent scheduling that optimizes technician routes and reduces travel time. Our software automates administrative tasks, provides technicians with complete job information and history, enables real-time communication, and offers data-driven insights to optimize operations and resource allocation."
    },
    {
      question: "How does the software help with regulatory compliance for HVAC?",
      answer: "Fielduo helps HVAC businesses maintain regulatory compliance through automated documentation, digital record-keeping, certification tracking, and compliance reporting. Our system ensures all service activities are properly documented, technician certifications are up-to-date, and generates compliance reports for audits. We also support industry-specific regulations and can be customized to meet local requirements."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for HVAC?",
      answer: "Yes, Fielduo includes a comprehensive emergency service management system with priority dispatch capabilities, 24/7 scheduling, and real-time technician tracking. Our platform can automatically identify and prioritize emergency calls, dispatch the nearest qualified technician, and provide customers with accurate ETAs. The system also maintains emergency service history and performance metrics."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for HVAC?",
      answer: "Fielduo provides robust HVAC-specific inventory and equipment tracking with comprehensive equipment databases, parts catalogs with automated reorder alerts, and asset lifecycle management. Our system tracks equipment service history, performance metrics, warranty information, and maintenance schedules. Technicians can access complete equipment information on their mobile devices, including manuals, specifications, and previous service records."
    },
    {
      question: "How does the software enhance customer communication for HVAC?",
      answer: "Fielduo enhances customer communication through automated appointment reminders, real-time technician tracking with ETAs, digital service reports with before/after photos, and a customer self-service portal. Customers can view service history, schedule appointments, make payments, and access maintenance recommendations. Our system also facilitates two-way communication between technicians and customers during service calls."
    },
    {
      question: "What benefits do HVAC clients see after implementing Fielduo?",
      answer: "HVAC clients typically see significant improvements including up to 35% increase in service efficiency, 25% higher customer retention rates, 20-30% revenue growth, and 85%+ first-time fix rates. Additional benefits include reduced administrative overhead, improved technician utilization, better inventory management, enhanced compliance, and data-driven business insights that support strategic decision-making."
    }
  ];

  const features = [
    {
      title: "Equipment Database",
      description: "Comprehensive HVAC system information, service history, and performance analytics for informed decision-making.",
      icon: "🔧",
      detail: "Track complete equipment lifecycle with maintenance records, warranty information, and performance metrics"
    },
    {
      title: "Seasonal Scheduling",
      description: "Intelligent workload management with automated scheduling optimization for peak heating and cooling seasons.",
      icon: "📅",
      detail: "AI-powered scheduling that anticipates seasonal demand and optimizes technician allocation"
    },
    {
      title: "Maintenance Contracts",
      description: "Streamlined recurring service agreements with automated preventive maintenance scheduling and reminders.",
      icon: "📋",
      detail: "Automate contract renewals, service scheduling, and customer communications"
    },
    {
      title: "Energy Efficiency Tracking",
      description: "Advanced monitoring of system performance, energy consumption patterns, and optimization recommendations.",
      icon: "📊",
      detail: "Monitor energy usage patterns and provide efficiency recommendations to customers"
    },
    {
      title: "Emergency Service Management",
      description: "Priority dispatch system with 24/7 emergency response capabilities and real-time technician tracking.",
      icon: "🚨",
      detail: "Rapid response system with priority dispatch and real-time status updates"
    },
    {
      title: "Parts Inventory Management",
      description: "HVAC-specific parts catalogs with automated inventory tracking, reorder alerts, and supplier integration.",
      icon: "📦",
      detail: "Comprehensive parts management with barcode scanning and automated reordering"
    }
  ];

  const benefits = [
    {
      title: "Increase Service Efficiency",
      description: "Optimize technician routes, reduce travel time, and maximize daily service capacity with intelligent scheduling.",
      icon: "⚡",
      stat: "35%",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Boost Customer Retention",
      description: "Deliver proactive maintenance services and exceptional customer experiences that build long-term relationships.",
      icon: "👥",
      stat: "25%",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Maximize Revenue Growth",
      description: "Identify upselling opportunities, grow service agreements, and increase average job value through data insights.",
      icon: "📈",
      stat: "30%",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Improve First-Time Fix Rates",
      description: "Equip technicians with complete equipment information, service history, and optimal parts availability.",
      icon: "✅",
      stat: "85%",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      <Head>
        <title>Professional HVAC Field Service Management | Fielduo</title>
        <meta name="description" content="Transform your HVAC operations with Fielduo's enterprise-grade management platform designed specifically for HVAC professionals" />
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
          
          {/* HVAC Equipment Mockups */}
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
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Industry-Specific Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HVAC</span> Field Service Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your HVAC operations with Fielduo's enterprise-grade management platform. Streamline workflows, enhance customer satisfaction, and drive profitable growth.
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

        {/* HVAC-Specific Features Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">HVAC-Specific Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Purpose-built tools designed specifically for HVAC professionals to optimize every aspect of your field service operations.
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

        {/* Measurable Business Impact Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Business Impact</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Join hundreds of HVAC businesses already experiencing significant improvements in efficiency, customer satisfaction, and profitability.
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
                  <div className="text-4xl font-bold text-blue-400">
                    {benefit.stat}
                  </div>
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
                Get answers to common questions about Fielduo's HVAC field service management solutions.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HVAC Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the growing community of HVAC professionals who trust Fielduo to streamline their operations and accelerate growth.
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