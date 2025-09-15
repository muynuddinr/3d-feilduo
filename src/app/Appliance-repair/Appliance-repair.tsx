// pages/appliance-repair.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function ApplianceRepairPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    diagnostics: 0,
    efficiency: 0,
    satisfaction: 0,
    revenue: 0
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
              if (newCounters.diagnostics < 40) newCounters.diagnostics += 2;
              if (newCounters.efficiency < 50) newCounters.efficiency += 2;
              if (newCounters.satisfaction < 95) newCounters.satisfaction += 3;
              if (newCounters.revenue < 20) newCounters.revenue += 1;
              
              if (
                newCounters.diagnostics >= 40 &&
                newCounters.efficiency >= 50 &&
                newCounters.satisfaction >= 95 &&
                newCounters.revenue >= 20
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
      question: "What features does Fielduo offer for Appliance Repair?",
      answer: "Fielduo offers a comprehensive suite of appliance repair features including advanced diagnostic tools, smart parts management, warranty tracking, digital service manuals, customer communication hub, quality control systems, and a mobile technician app. Our platform provides AI-powered troubleshooting guides, real-time inventory tracking, automated warranty claims processing, instant access to technical documentation, automated customer notifications, service checklists, and complete mobile job management capabilities."
    },
    {
      question: "How can Appliance Repair businesses improve efficiency with field service management software?",
      answer: "Appliance repair businesses can improve efficiency by up to 50% through intelligent scheduling that optimizes technician routes and reduces travel time. Our software automates administrative tasks, provides technicians with complete job information and history, enables real-time communication, and offers data-driven insights to optimize operations. Mobile capabilities allow technicians to access diagnostic information, update job status, and process payments on-site, eliminating return trips to the office."
    },
    {
      question: "How does the software help with regulatory compliance for Appliance Repair?",
      answer: "Fielduo helps appliance repair businesses maintain regulatory compliance through digital documentation, automated warranty tracking, and compliance reporting. Our system ensures all work meets manufacturer specifications and industry standards, maintains proper documentation for audits, tracks technician certifications, and automates compliance reminders. We support industry-specific regulations and can be customized to meet local requirements and certification needs."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Appliance Repair?",
      answer: "Yes, Fielduo includes a comprehensive emergency response system with 24/7 dispatch capabilities, priority scheduling, and real-time technician tracking for urgent appliance repairs. Our platform can automatically identify and prioritize emergency calls, dispatch the nearest qualified technician with the right equipment and parts, provide customers with accurate ETAs, and maintain emergency service history. The system also optimizes schedules to accommodate emergency calls while minimizing disruption to routine work."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Appliance Repair?",
      answer: "Fielduo provides robust inventory and equipment tracking specifically designed for appliance repair businesses with comprehensive parts catalogs, automated inventory management, and asset lifecycle tracking. Our system manages appliance-specific parts with barcode scanning, automated reorder alerts, and supplier integration. It tracks equipment maintenance schedules, warranty information, and performance metrics. Technicians can access complete inventory information on their mobile devices, check part availability in real-time, and automatically update inventory levels when parts are used."
    },
    {
      question: "How does the software enhance customer communication for Appliance Repair?",
      answer: "Fielduo enhances customer communication through automated repair status updates, real-time technician tracking with ETAs, digital service reports with before/after photos, and a customer self-service portal. Customers can view service history, schedule appointments, make payments, and access repair recommendations. Our system also facilitates two-way communication between technicians and customers during service calls, including sharing diagnostic information and repair progress updates."
    },
    {
      question: "What benefits do Appliance Repair clients see after implementing Fielduo?",
      answer: "Appliance repair clients typically see significant improvements including 40% faster diagnostics, 50% efficiency improvement, 95% customer satisfaction, and 20% revenue increase. Additional benefits include improved first-time fix rates, better inventory management, enhanced warranty processing, optimized technician utilization, reduced administrative overhead, and data-driven business insights that support strategic decision-making and growth."
    }
  ];

  const features = [
    {
      title: "Advanced Diagnostic Tools",
      description: "AI-powered troubleshooting guides and step-by-step repair procedures",
      icon: "🔧",
      detail: "Intelligent diagnostic assistance with manufacturer-specific repair procedures"
    },
    {
      title: "Smart Parts Management",
      description: "Real-time inventory tracking with automated supplier integration",
      icon: "📦",
      detail: "Automated inventory management with real-time supplier integration"
    },
    {
      title: "Warranty Tracking",
      description: "Automated manufacturer warranty claims and compliance management",
      icon: "📋",
      detail: "Streamlined warranty processing and compliance documentation"
    },
    {
      title: "Digital Service Manuals",
      description: "Instant access to comprehensive documentation and technical specifications",
      icon: "📚",
      detail: "Comprehensive technical documentation at your fingertips"
    }
  ];

  const additionalFeatures = [
    {
      title: "Customer Communication Hub",
      description: "Automated repair status updates and notifications",
      icon: "💬",
      detail: "Real-time customer communication with automated status updates"
    },
    {
      title: "Quality Control Systems",
      description: "Service checklists and satisfaction tracking",
      icon: "✅",
      detail: "Comprehensive quality control with digital checklists"
    },
    {
      title: "Mobile Technician App",
      description: "Complete job management on any device",
      icon: "📱",
      detail: "Full-featured mobile app for technicians on the go"
    }
  ];

  const benefits = [
    {
      title: "Faster Diagnostics",
      description: "AI-powered tools accelerate troubleshooting and repair processes",
      icon: "🔍",
      stat: "40%",
      color: "from-blue-500 to-cyan-500",
      label: "faster"
    },
    {
      title: "Improved Efficiency",
      description: "Streamline operations and maximize technician productivity",
      icon: "⚡",
      stat: "50%",
      color: "from-green-500 to-teal-500",
      label: "improvement"
    },
    {
      title: "Enhanced Experience",
      description: "Deliver exceptional service that builds customer loyalty",
      icon: "😊",
      stat: "95%",
      color: "from-purple-500 to-pink-500",
      label: "satisfaction"
    },
    {
      title: "Increased Profitability",
      description: "Optimize resources and identify new revenue opportunities",
      icon: "📈",
      stat: "20%",
      color: "from-yellow-500 to-orange-500",
      label: "revenue boost"
    }
  ];

  const applianceTypes = [
    { name: "Refrigerators", icon: "❄️" },
    { name: "Washers & Dryers", icon: "🧺" },
    { name: "Ovens & Stoves", icon: "🍳" },
    { name: "Dishwashers", icon: "🍽" },
    { name: "Microwaves", icon: "🔥" },
    { name: "HVAC Systems", icon: "❄️" },
    { name: "Small Appliances", icon: "⚡" },
    { name: "Commercial Equipment", icon: "🏭" }
  ];

  return (
    <>
      <Head>
        <title>Appliance Repair Management Platform | Fielduo</title>
        <meta name="description" content="Transform your appliance repair business with Fielduo's comprehensive service management platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20 z-0"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  40%
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">Faster</div>
                  <div className="text-lg font-medium">Diagnostics</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  50%
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">More</div>
                  <div className="text-lg font-medium">Efficient</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  95%
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400">Customer</div>
                  <div className="text-lg font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Appliance Icons */}
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <div className="flex space-x-4">
              <div className="text-4xl">❄️</div>
              <div className="text-4xl">🧺</div>
              <div className="text-4xl">🍳</div>
              <div className="text-4xl">🍽</div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Industry-Specific Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Appliance Repair</span> Management Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your appliance repair business with our comprehensive service management platform. Optimize operations, enhance customer satisfaction, and drive profitability with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Start Free Trial
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Appliance Types Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Service Coverage</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Manage all types of appliance repairs with our specialized tools
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
              {applianceTypes.map((appliance, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-xl mr-3">{appliance.icon}</span>
                  <span className="font-medium">{appliance.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Capabilities Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Service Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to manage your appliance repair business efficiently and professionally
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900 rounded-full p-1 flex">
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'features' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Core Features
                </button>
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'additional' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('additional')}
                >
                  Additional Features
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
              )}
              
              {activeTab === 'additional' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {additionalFeatures.map((feature, index) => (
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
              )}
            </div>
          </div>
        </div>

        {/* Business Impact Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Impact</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Measurable improvements that drive success for appliance repair businesses
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
                Get answers to common questions about our appliance repair field service management platform
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
        <div className="bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-teal-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join thousands of appliance repair professionals who have already optimized their operations with Fielduo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Get Started Today
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