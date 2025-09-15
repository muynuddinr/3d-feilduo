// pages/facility-management.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function FacilityManagementPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    opexReduction: 0,
    mtbfImprovement: 0,
    productivity: 0,
    auditReduction: 0
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
              if (newCounters.opexReduction < 18) newCounters.opexReduction += 1;
              if (newCounters.mtbfImprovement < 24) newCounters.mtbfImprovement += 1;
              if (newCounters.productivity < 2.1) newCounters.productivity += 0.1;
              if (newCounters.auditReduction < 40) newCounters.auditReduction += 2;
              
              if (
                newCounters.opexReduction >= 18 &&
                newCounters.mtbfImprovement >= 24 &&
                newCounters.productivity >= 2.1 &&
                newCounters.auditReduction >= 40
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
      question: "What features does Fielduo offer for Facility Management?",
      answer: "Fielduo provides comprehensive capabilities including asset & equipment tracking, work orders, preventive maintenance scheduling, vendor coordination, space utilization planning, and compliance management. All features are mobile-optimized for technicians and managers, with role-based security, QR/RFID integration, SLA timers, photo documentation, and automated workflows."
    },
    {
      question: "How can Facility Management businesses improve efficiency with field service management software?",
      answer: "By centralizing requests, automating scheduling, and providing clear checklists and SLAs, Fielduo reduces communication overhead, eliminates duplicate work, and decreases time-to-completion. Real-time status updates and notifications keep all stakeholders aligned without manual follow-ups, resulting in significant operational efficiency gains."
    },
    {
      question: "How does the software help with regulatory compliance for Facility Management?",
      answer: "Fielduo standardizes safety inspections and stores certificates, permits, and audit trails in a centralized repository. Automated reminders ensure deadlines are met, and digitally signed checklists streamline audit processes. The system maintains comprehensive compliance documentation that's always audit-ready."
    },
    {
      question: "Does Fielduo offer emergency response capabilities for Facility Management?",
      answer: "Yes. Priority flags, on-call rotations, and escalation protocols enable rapid dispatch during emergencies. Technicians receive instant mobile notifications with complete job details to accelerate response times, ensuring critical facility issues are addressed promptly to minimize disruption."
    },
    {
      question: "How does Fielduo support inventory and asset tracking for Facility Management?",
      answer: "The platform links parts and inventory to assets and work orders, tracks usage against jobs, and maintains accurate stock levels. QR/RFID scanning enables quick identification, and lifecycle history informs repair versus replace decisions, providing complete visibility into asset performance and maintenance needs."
    },
    {
      question: "How does the software enhance stakeholder communication for Facility Management?",
      answer: "Fielduo automates status updates, appointment confirmations, and completion reports to keep all stakeholders informed. Photo documentation, notes, and digital signatures provide complete transparency throughout service delivery, ensuring everyone from technicians to executives has the information they need."
    },
    {
      question: "What benefits do Facility Management clients see after implementing Fielduo?",
      answer: "Clients typically report reduced operating costs (18% average OPEX reduction), fewer unplanned outages (24% MTBF improvement), improved safety metrics, faster response times, and higher satisfaction through proactive, transparent service delivery. The system also provides data-driven insights for continuous improvement."
    }
  ];

  const features = [
    {
      title: "Asset Management",
      description: "Complete facility asset tracking with maintenance scheduling and lifecycle history.",
      icon: "🏢",
      detail: "QR/RFID ready, condition logs, service history",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Work Order Management",
      description: "Streamlined creation, assignment, and completion tracking for every maintenance job.",
      icon: "📋",
      detail: "SLA timers, mobile updates, photo documentation",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Preventive Maintenance",
      description: "Automated calendars for routine tasks to minimize downtime and unexpected failures.",
      icon: "🔧",
      detail: "PM templates, recurrence rules, escalation protocols",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Vendor Management",
      description: "Coordinate contractors and service providers with approvals and performance tracking.",
      icon: "👥",
      detail: "Rate cards, compliance documentation, performance scorecards",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const additionalFeatures = [
    {
      title: "Space Management",
      description: "Plan and optimize space utilization with assignments and move management.",
      icon: "📐",
      detail: "Zones & floors, utilization analytics, move requests",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Compliance Tracking",
      description: "Stay audit-ready with regulatory logs, checklists, and verifiable documentation trails.",
      icon: "📑",
      detail: "Safety checks, certificates, audit trails",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    {
      title: "Reduce Operating Costs",
      description: "Intelligent scheduling, optimized routing, and resource allocation lower operational expenses.",
      icon: "💰",
      stat: "18%",
      label: "avg OPEX reduction",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Extend Asset Life",
      description: "Proactive maintenance and condition monitoring protect your critical equipment investments.",
      icon: "🔄",
      stat: "24%",
      label: "MTBF improvement",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Improve Safety Compliance",
      description: "Comprehensive inspections and compliance tracking reduce incidents and liability.",
      icon: "🛡️",
      stat: "Zero",
      label: "incident target",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Enhance Productivity",
      description: "Automated workflows and clear accountability keep teams focused and efficient.",
      icon: "⚡",
      stat: "2.1x",
      label: "job completion rate",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "2,500+", label: "Facilities Managed" },
    { value: "98%", label: "SLA Adherence Rate" },
    { value: "100%", label: "Mobile Adoption" },
    { value: "40%", label: "Reduced Audit Findings" }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Facility Management Platform | Fielduo</title>
        <meta name="description" content="Comprehensive facility management solution for maintaining buildings, equipment, and assets with precision and efficiency" />
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
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            opacity: 0.5
          }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 z-0"></div>
          
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
          
          {/* Building Mockups */}
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
          
          {/* Key Features Highlight */}
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <div className="flex space-x-4">
              <div className="flex items-center px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700">
                <span className="text-xl mr-2">🏢</span>
                <span className="font-medium">Asset Tracking</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700">
                <span className="text-xl mr-2">📋</span>
                <span className="font-medium">Work Orders</span>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Enterprise Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Facility Management</span> Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Fielduo's comprehensive facility management solution enables organizations to maintain buildings, equipment, and assets with precision and efficiency.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { title: "Rapid implementation", icon: "⚡" },
                  { title: "Mobile-first design", icon: "📱" },
                  { title: "Role-based security", icon: "🔒" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700">
                    <span className="text-xl mr-2">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Request Demo
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Contact Sales
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
                  <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facility Management Capabilities Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Facility Management Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive Facility Management Solutions
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900 rounded-full p-1 flex">
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'features' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Core Features
                </button>
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'additional' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
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
                      <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="text-sm text-gray-500">{feature.detail}</div>
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
                        hoveredFeature === index ? 'border-blue-500 shadow-xl shadow-blue-500/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="text-sm text-gray-500">{feature.detail}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Measurable Outcomes Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Drive Operational Excellence</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Transform your facility management operations with data-driven insights and streamlined processes
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

        {/* Knowledge Center Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Knowledge Center</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our facility management solutions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-800 p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">❓</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Frequently Asked Questions</h3>
                </div>
                
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
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise Ready</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready to transform your facility operations? Schedule a personalized demonstration to see how Fielduo can streamline asset management, work orders, and preventive maintenance for your portfolio.
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
          background-image: linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}