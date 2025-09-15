// pages/b2c-self-service-portal.js
'use client';
import { useState, useEffect, useRef } from 'react'; // Added useRef to the import
import Head from 'next/head';
export default function B2CSelfServicePortal() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    availability: 0,
    security: 0,
    satisfaction: 0
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
              if (newCounters.availability < 24) newCounters.availability += 1;
              if (newCounters.security < 100) newCounters.security += 5;
              if (newCounters.satisfaction < 85) newCounters.satisfaction += 5;
              
              if (
                newCounters.availability >= 24 &&
                newCounters.security >= 100 &&
                newCounters.satisfaction >= 85
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
      question: "What comprehensive features does the self-service portal offer?",
      answer: "Our self-service portal provides a complete customer experience management solution including intelligent scheduling, comprehensive service history tracking, full account management, secure payment processing, an extensive knowledge center, and integrated communication tools. All features are designed with a mobile-first approach and can be customized to match your brand identity."
    },
    {
      question: "How does the 24/7 scheduling system work?",
      answer: "Our scheduling system uses advanced algorithms to check real-time technician availability, skills matching, and location optimization. Customers can view available time slots, book appointments, and receive instant confirmations. The system automatically detects and resolves conflicts, sends reminders, and provides real-time status updates throughout the service process."
    },
    {
      question: "What security measures protect payment processing?",
      answer: "We implement enterprise-grade security with end-to-end encryption for all payment transactions. Our platform is PCI DSS compliant and supports tokenization to protect sensitive card data. We offer multiple payment methods including credit cards, ACH transfers, and digital wallets, all processed through secure gateways with advanced fraud detection capabilities."
    },
    {
      question: "What type of self-help resources are available?",
      answer: "Our knowledge center includes interactive tutorials, step-by-step video guides, comprehensive documentation, troubleshooting articles, and community forums. All resources are searchable and categorized for easy navigation. We also provide AI-powered recommendations based on customer history and common issues to guide users to the most relevant solutions."
    },
    {
      question: "How does the integrated communication system function?",
      answer: "Our communication system enables seamless messaging between customers and service teams with real-time notifications, file sharing capabilities, and automated escalation workflows. Customers can track conversations, receive updates on service requests, and connect with the right support personnel based on issue complexity and priority."
    }
  ];
  const features = [
    {
      title: "Intelligent Scheduling",
      description: "Advanced real-time calendar integration with automated availability detection, instant confirmations, and smart conflict resolution.",
      icon: "📅"
    },
    {
      title: "Complete Service History",
      description: "Comprehensive digital records with detailed technician notes, invoice history, and advanced search capabilities for quick reference.",
      icon: "📋"
    },
    {
      title: "Account Management",
      description: "Full profile control with preference settings, notification management, and personalized dashboard configuration.",
      icon: "👤"
    },
    {
      title: "Secure Payment Processing",
      description: "Enterprise-grade encryption supporting multiple payment methods including cards, bank transfers, and digital wallets.",
      icon: "💳"
    },
    {
      title: "Knowledge Center",
      description: "Comprehensive resource library with interactive tutorials, video guides, and searchable documentation for self-resolution.",
      icon: "📚"
    },
    {
      title: "Integrated Communication",
      description: "Seamless messaging system with real-time notifications, file sharing, and escalation workflows for complex issues.",
      icon: "💬"
    }
  ];
  const benefits = [
    {
      title: "Reduce Support Volume",
      description: "Enable customers to resolve 80% of common inquiries independently through self-service tools.",
      icon: "📉"
    },
    {
      title: "Increase Satisfaction",
      description: "Provide instant access to information and services when customers need them most.",
      icon: "😊"
    },
    {
      title: "Scale Efficiently",
      description: "Handle growing customer bases without proportional increases in support staff.",
      icon: "📈"
    }
  ];
  const stats = [
    { value: "24/7", label: "Always Available", suffix: "" },
    { value: "100", label: "Secure & Encrypted", suffix: "%" },
    { value: "85", label: "Customer Satisfaction", suffix: "%" }
  ];
  return (
    <>
      <Head>
        <title>Customer Self-Service Portal | Fielduo</title>
        <meta name="description" content="Streamline your customer experience with 24/7 access to scheduling, account management, and self-help resources" />
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
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
                style={{
                  width: `${Math.random() * 150 + 30}px`,
                  height: `${Math.random() * 150 + 30}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(40px)',
                  animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Floating Device Mockups */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-32 h-64 bg-gray-800 rounded-[30px] border-4 border-gray-700 transform rotate-12"></div>
          </div>
          <div className="absolute top-1/3 left-10 opacity-20">
            <div className="w-32 h-64 bg-gray-800 rounded-[30px] border-4 border-gray-700 transform -rotate-12"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Customer Empowerment</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Self-Service</span> Portal
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Streamline your customer experience with 24/7 access to scheduling, account management, and comprehensive self-help resources
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {stat.label === "Always Available" ? counters.availability + stat.suffix : 
                       stat.label === "Secure & Encrypted" ? counters.security + stat.suffix :
                       counters.satisfaction + stat.suffix}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Comprehensive Self-Service Solutions Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Self-Service Solutions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Meet the evolving expectations of modern customers with an intuitive, mobile-first platform that empowers users to manage their entire service experience independently while reducing operational overhead.
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
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Transform Your Customer Experience Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Customer Experience</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Reduce support costs while increasing customer satisfaction through intelligent automation and self-service capabilities.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 text-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center mx-auto mb-6">
                        <div className="text-5xl">{benefit.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8">
                        <p className="text-lg text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Ready to Get Started Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Join thousands of businesses already using our platform to enhance customer experience.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Request Demo
            </button>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to know about our self-service portal
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
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join leading businesses who trust our platform to deliver exceptional self-service experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                View Documentation
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