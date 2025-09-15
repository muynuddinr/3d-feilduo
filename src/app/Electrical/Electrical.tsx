// pages/electrical.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function ElectricalPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    projectEfficiency: 0,
    safetyCompliance: 0,
    estimateAccuracy: 0,
    qualityAssurance: 0
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
              if (newCounters.projectEfficiency < 35) newCounters.projectEfficiency += 2;
              if (newCounters.safetyCompliance < 99) newCounters.safetyCompliance += 3;
              if (newCounters.estimateAccuracy < 25) newCounters.estimateAccuracy += 2;
              if (newCounters.qualityAssurance < 90) newCounters.qualityAssurance += 3;
              
              if (
                newCounters.projectEfficiency >= 35 &&
                newCounters.safetyCompliance >= 99 &&
                newCounters.estimateAccuracy >= 25 &&
                newCounters.qualityAssurance >= 90
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
      question: "What features does Fielduo offer for Electrical contractors?",
      answer: "Fielduo offers a comprehensive suite of electrical contractor features including multi-phase project management, safety compliance systems, equipment specifications database, code compliance tracking, advanced material estimating, and permit management. Our platform provides real-time project monitoring, resource allocation tools, digital safety documentation, NEC compliance tracking, precise material calculations, and streamlined permit processing—all designed specifically for the unique needs of electrical contracting businesses."
    },
    {
      question: "How can Electrical businesses improve efficiency with field service management software?",
      answer: "Electrical businesses can improve efficiency by up to 35% through advanced project management capabilities that coordinate multiple job sites and phases. Our software optimizes technician scheduling, automates administrative tasks, provides real-time project visibility, and offers data-driven insights to resource allocation. Mobile capabilities allow electricians to access blueprints, specifications, and project details on-site, eliminating return trips to the office and reducing downtime."
    },
    {
      question: "How does the software help with regulatory compliance for Electrical work?",
      answer: "Fielduo helps electrical contractors maintain 99% compliance through digital safety forms, automated compliance tracking, and real-time regulatory updates. Our system ensures adherence to National Electric Code (NEC) requirements, tracks local regulations, automates inspection scheduling, and maintains comprehensive documentation. We provide automated alerts for code changes, digital safety checklists, and detailed compliance reporting to reduce liability and ensure all work meets or exceeds regulatory standards."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Electrical services?",
      answer: "Yes, Fielduo includes comprehensive emergency response capabilities with 24/7 dispatch, priority scheduling, and real-time technician tracking for electrical emergencies. Our platform can quickly identify and prioritize emergency calls, dispatch the nearest qualified electrician with the right equipment and certifications, provide customers with accurate ETAs, and maintain detailed emergency service history. The system also optimizes schedules to accommodate emergency calls while minimizing disruption to scheduled projects."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Electrical contractors?",
      answer: "Fielduo provides robust inventory and equipment tracking specifically designed for electrical contractors with comprehensive equipment databases, specialized parts catalogs, and automated inventory management. Our system tracks electrical components, tools, and materials with barcode scanning, automated reorder alerts, and supplier integration. Technicians can access complete equipment specifications, installation manuals, and maintenance schedules on their mobile devices, ensuring they have the right materials for each job."
    },
    {
      question: "How does the software enhance customer communication for Electrical projects?",
      answer: "Fielduo enhances customer communication through automated project updates, real-time technician tracking with ETAs, digital documentation with before/after photos, and a customer portal for electrical projects. Customers can view project progress, access inspection reports, approve change orders, and make payments through the self-service portal. Our system also facilitates two-way communication between electricians and customers during projects, including sharing technical specifications and compliance documentation."
    },
    {
      question: "What benefits do Electrical clients see after implementing Fielduo?",
      answer: "Electrical contractors typically see significant improvements including 35% faster project completion, 99% compliance rate, 25% higher estimate win rate, and 90%+ quality assurance scores. Additional benefits include improved resource utilization, reduced material waste, enhanced safety documentation, streamlined permit processing, better cash flow management, and data-driven business insights that support strategic decision-making and growth."
    }
  ];

  const features = [
    {
      title: "Multi-Phase Project Management",
      description: "Comprehensive project tracking with resource allocation, milestone management, and real-time progress monitoring for complex electrical installations.",
      icon: "⚡",
      detail: "Coordinate complex electrical projects across multiple phases and locations"
    },
    {
      title: "Safety Compliance System",
      description: "Digital safety forms, automated compliance tracking, and real-time regulatory updates to ensure adherence to electrical safety standards.",
      icon: "🛡️",
      detail: "Maintain 99% compliance with automated safety documentation and NEC updates"
    },
    {
      title: "Equipment Specifications Database",
      description: "Comprehensive electrical equipment catalogs with detailed specifications, installation manuals, and maintenance schedules.",
      icon: "📋",
      detail: "Access complete equipment specs and installation documentation on mobile devices"
    },
    {
      title: "Code Compliance Tracking",
      description: "Stay current with National Electric Code (NEC) updates, local regulations, and automated inspection requirement notifications.",
      icon: "📏",
      detail: "Automated NEC compliance tracking with real-time regulatory updates"
    },
    {
      title: "Advanced Material Estimating",
      description: "Precise electrical materials calculation with real-time pricing, waste factors, and detailed cost breakdowns for accurate bidding.",
      icon: "🧮",
      detail: "Generate accurate electrical estimates with detailed material calculations"
    },
    {
      title: "Permit & Inspection Management",
      description: "Streamlined permit applications, inspection scheduling, and compliance documentation for seamless project approval processes.",
      icon: "📑",
      detail: "Streamline permit applications and inspection scheduling with digital documentation"
    }
  ];

  const benefits = [
    {
      title: "Enhance Project Efficiency",
      description: "Streamline complex electrical projects with advanced scheduling, resource coordination, and real-time progress tracking across multiple job sites.",
      icon: "⚡",
      stat: "35%",
      color: "from-yellow-500 to-orange-500",
      label: "faster completion"
    },
    {
      title: "Ensure Safety Compliance",
      description: "Maintain comprehensive safety documentation, automate compliance checks, and reduce liability with digital safety management systems.",
      icon: "🛡️",
      stat: "99%",
      color: "from-green-500 to-teal-500",
      label: "compliance rate"
    },
    {
      title: "Deliver Accurate Estimates",
      description: "Generate professional electrical estimates with detailed material lists, labor calculations, and competitive pricing strategies.",
      icon: "📊",
      stat: "25%",
      color: "from-blue-500 to-indigo-500",
      label: "higher win rate"
    },
    {
      title: "Guarantee Quality Assurance",
      description: "Document comprehensive testing procedures, inspection results, and quality control measures for every electrical installation.",
      icon: "✅",
      stat: "90%",
      color: "from-purple-500 to-pink-500",
      label: "satisfaction"
    }
  ];

  const stats = [
    { value: "500+", label: "Electrical Contractors" },
    { value: "99%", label: "Code Compliance Rate" },
    { value: "35%", label: "Faster Project Completion" },
    { value: "$2.5M", label: "Average Annual Revenue Managed" }
  ];

  const electricalServices = [
    { name: "Commercial Wiring", icon: "🏢" },
    { name: "Residential Installations", icon: "🏠" },
    { name: "Industrial Systems", icon: "🏭" },
    { name: "Panel Upgrades", icon: "🔌" },
    { name: "Lighting Design", icon: "💡" },
    { name: "EV Charging", icon: "🔋" },
    { name: "Generator Systems", icon: "⚡" },
    { name: "Data Centers", icon: "💾" }
  ];

  return (
    <>
      <Head>
        <title>Professional Electrical Contractor Management | Fielduo</title>
        <meta name="description" content="Power your electrical contracting business with Fielduo's specialized management platform designed for electrical contractors" />
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
            background: 'radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, transparent 70%)',
            opacity: 0.5
          }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20 z-0"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm"
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
          
          {/* Electrical Elements Animation */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform rotate-12">
              <div className="w-full h-8 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="w-full h-6 bg-yellow-500 rounded"></div>
            </div>
          </div>
          <div className="absolute top-1/3 left-10 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform -rotate-12">
              <div className="w-full h-8 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="w-full h-6 bg-yellow-500 rounded"></div>
            </div>
          </div>
          
          {/* Electric Bolt Animation */}
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <div className="flex space-x-2">
              <div className="w-2 h-12 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-12 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-12 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-yellow-900/30 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30">
                <span className="text-yellow-400 font-medium">Industry-Specific Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Electrical</span> Contractor Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Power your electrical contracting business with Fielduo's specialized management platform. Manage complex projects, ensure safety compliance, and deliver exceptional electrical services that exceed expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/20">
                  Schedule Demo
                </button>
                <button className="bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Learn More
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
                  <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Electrical Services Showcase */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Service Coverage</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Manage all aspects of your electrical contracting business with our specialized tools
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
              {electricalServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-xl mr-3">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Electrical Industry Features Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Electrical Industry Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Specialized tools designed for electrical contractors to manage complex projects, ensure code compliance, and deliver safe, professional installations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                    hoveredFeature === index ? 'border-yellow-500 shadow-xl shadow-yellow-500/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">{feature.title}</h3>
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
                Join hundreds of electrical contractors experiencing significant improvements in project efficiency, safety compliance, and business profitability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 mb-6">{benefit.description}</p>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
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
                Get answers to common questions about Fielduo's electrical contractor management solutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`mb-6 rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeFaq === index 
                      ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-yellow-500/30 shadow-xl shadow-yellow-500/10' 
                      : 'bg-gray-900/50 border border-gray-800'
                  }`}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/30 transition duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium flex items-center">
                      <span className="text-yellow-400 mr-3">Q{index + 1}.</span>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeFaq === index ? 'rotate-180 text-yellow-400' : 'text-gray-500'
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
        <div className="bg-gradient-to-r from-yellow-900/30 via-orange-900/30 to-red-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Up Your Electrical Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the growing community of electrical contractors who trust Fielduo to manage their projects, ensure compliance, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/20">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
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
          background-image: linear-gradient(rgba(255, 204, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 204, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}