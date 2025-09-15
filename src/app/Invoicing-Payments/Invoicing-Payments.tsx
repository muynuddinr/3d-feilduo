// pages/invoicing-payments.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function InvoicingPayments() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    cashFlow: 0,
    adminWork: 0,
    customerExperience: 0,
    errorReduction: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('invoicing');
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
              if (newCounters.cashFlow < 20) newCounters.cashFlow += 1;
              if (newCounters.adminWork < 75) newCounters.adminWork += 5;
              if (newCounters.customerExperience < 90) newCounters.customerExperience += 5;
              if (newCounters.errorReduction < 95) newCounters.errorReduction += 5;
              
              if (
                newCounters.cashFlow >= 20 &&
                newCounters.adminWork >= 75 &&
                newCounters.customerExperience >= 90 &&
                newCounters.errorReduction >= 95
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
      question: "How does automated invoice generation work?",
      answer: "Our automated invoice generation system seamlessly converts completed work orders into professional invoices with a single click. The system pulls all relevant data including labor hours, parts used, service descriptions, and customer information to create accurate invoices without manual data entry. This eliminates errors, saves time, and ensures consistent billing across all jobs."
    },
    {
      question: "What payment methods are supported?",
      answer: "Fielduo supports a comprehensive range of payment methods including credit and debit cards (Visa, Mastercard, American Express, Discover), ACH bank transfers, digital wallets (Apple Pay, Google Pay, Samsung Pay), and mobile payment solutions. Our system is designed to give your customers maximum flexibility while ensuring secure transactions."
    },
    {
      question: "Can invoices be customized with company branding?",
      answer: "Absolutely. Our invoice template editor allows you to customize every aspect of your invoices including adding your company logo, selecting brand colors, adjusting layout, and including custom fields. You can create multiple templates for different customer segments or service types, ensuring professional and consistent branding across all your billing communications."
    },
    {
      question: "How does recurring billing work?",
      answer: "Our recurring billing system allows you to automate invoices for service agreements, maintenance contracts, or subscriptions. You can set flexible billing cycles (weekly, monthly, quarterly, annually), define pricing tiers, and automatically prorate for mid-cycle changes. The system handles invoice generation, payment processing, and notifications without manual intervention."
    },
    {
      question: "What about multi-currency support for international customers?",
      answer: "Fielduo provides robust multi-currency support with automatic conversion based on current exchange rates. You can invoice customers in their preferred currency while managing your books in your base currency. The system handles exchange rate fluctuations, provides clear currency conversion details on invoices, and supports multi-currency reporting for comprehensive financial management."
    },
    {
      question: "How are taxes calculated and managed?",
      answer: "Our tax management system automatically calculates and applies taxes based on geographic location, product/service type, and customer tax status. We maintain up-to-date tax rates for multiple jurisdictions and can handle complex scenarios including compound taxes, exemptions, and special tax rules. All tax calculations are clearly displayed on invoices and detailed in financial reports."
    },
    {
      question: "Can customers pay immediately after service completion?",
      answer: "Yes, our mobile payment feature allows technicians to process payments immediately upon job completion using their mobile devices. This improves cash flow by eliminating the delay between service delivery and payment receipt. Customers receive instant receipts via email or SMS, and payments are automatically reconciled with the corresponding invoices."
    },
    {
      question: "How do payment reminders work?",
      answer: "Our automated reminder system sends customizable email or SMS notifications for upcoming due dates, past-due invoices, and payment confirmations. You can set up multiple reminder sequences, personalize messaging, and track delivery and response rates. The system automatically escalates reminders for overdue accounts and can pause communications once payment is received."
    },
    {
      question: "What's the typical timeline for receiving payments?",
      answer: "With Fielduo, businesses typically see a 20% reduction in days-sales-outstanding. Electronic payments are usually processed within 1-3 business days, while traditional methods like checks may take 5-7 business days. Our automated reminders and multiple payment options help accelerate the payment process, improving overall cash flow."
    },
    {
      question: "Is the payment processing secure?",
      answer: "Security is our top priority. We use bank-level encryption, PCI DSS compliance, and tokenization to protect sensitive payment information. All transactions are processed through secure gateways with advanced fraud detection. We also provide detailed audit trails, user access controls, and regular security assessments to ensure the highest level of protection for your financial data."
    }
  ];

  const invoicingFeatures = [
    {
      title: "Professional Invoice Templates",
      description: "Customize layouts with branding, logos, and terms to maintain professional appearance across all client communications.",
      icon: "📄",
      detail: "Create unlimited templates with drag-and-drop editor, custom fields, and conditional logic"
    },
    {
      title: "Automated Invoice Generation",
      description: "Transform completed work orders into invoices with one click—no manual input required, reducing errors and saving time.",
      icon: "🤖",
      detail: "AI-powered data extraction and validation ensures 100% accuracy"
    },
    {
      title: "Multi-Currency Support",
      description: "Automatically convert amounts based on current exchange rates for global customers, ensuring accurate international billing.",
      icon: "🌍",
      detail: "Real-time exchange rates with automatic updates and historical tracking"
    },
    {
      title: "Recurring Billing",
      description: "Schedule automated invoices for service agreements, maintenance contracts, or subscriptions with flexible timing options.",
      icon: "🔄",
      detail: "Flexible scheduling with proration and automated adjustments"
    },
    {
      title: "Tax Management",
      description: "Calculate and apply taxes by region, ensuring compliance with local regulations and reducing administrative burden.",
      icon: "🧾",
      detail: "Automated tax calculations with jurisdiction-specific rules and exemptions"
    },
    {
      title: "Payment Terms",
      description: "Set net terms, early-pay discounts, and late fees to suit each customer and optimize cash flow management.",
      icon: "📅",
      detail: "Customizable terms with automated calculations and reminders"
    }
  ];

  const paymentFeatures = [
    {
      title: "Multiple Payment Methods",
      description: "Accept credit/debit cards, ACH, mobile wallets, and bank transfers—both online and in the field for maximum flexibility.",
      icon: "💳",
      detail: "Support for 50+ payment methods with automatic reconciliation"
    },
    {
      title: "Online Payment Portal",
      description: "Customers can securely view and pay invoices at any time, with instant receipt generation and payment confirmation.",
      icon: "🌐",
      detail: "White-labeled portal with custom branding and multi-language support"
    },
    {
      title: "Mobile Payments",
      description: "Technicians can process payments on their devices immediately upon job completion, improving cash flow speed.",
      icon: "📱",
      detail: "Offline-capable with instant sync and digital signature capture"
    },
    {
      title: "Payment Reminders",
      description: "Automate overdue notices via email or SMS to improve collections without manual intervention.",
      icon: "🔔",
      detail: "Intelligent reminder sequences with escalation and response tracking"
    },
    {
      title: "Payment Tracking",
      description: "Real-time dashboard shows which invoices are paid, pending, or past due with comprehensive analytics.",
      icon: "📊",
      detail: "Advanced analytics with aging reports and cash flow forecasting"
    }
  ];

  const benefits = [
    {
      title: "Improved Cash Flow",
      description: "Reduce days-sales-outstanding by up to 20% through faster invoicing and automated reminders.",
      icon: "💰",
      stat: "20%",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Reduced Administrative Work",
      description: "Free finance teams from manual billing tasks, allowing focus on strategic analysis and growth.",
      icon: "⏱️",
      stat: "75%",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Provide transparent billing, clear payment options, and instant receipts for better satisfaction.",
      icon: "😊",
      stat: "90%",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Error Reduction",
      description: "Eliminate manual data entry errors with automated invoice generation and validation.",
      icon: "✅",
      stat: "95%",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const paymentMethods = [
    { name: "Credit Cards", icon: "💳" },
    { name: "Debit Cards", icon: "💳" },
    { name: "ACH Transfer", icon: "🏦" },
    { name: "Apple Pay", icon: "🍎" },
    { name: "Google Pay", icon: "🤖" },
    { name: "Samsung Pay", icon: "📱" },
    { name: "Bank Transfer", icon: "🏧" },
    { name: "Digital Wallets", icon: "👛" }
  ];

  return (
    <>
      <Head>
        <title>Invoicing & Payments | Fielduo</title>
        <meta name="description" content="Accelerate billing cycles, minimize errors, and offer flexible payment options with Fielduo's financial management module" />
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
          
          {/* Floating Invoice Mockups */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-48 h-64 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform rotate-12"></div>
          </div>
          <div className="absolute top-1/3 left-10 opacity-20">
            <div className="w-48 h-64 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform -rotate-12"></div>
          </div>
          
          {/* Payment Cards Animation */}
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <div className="flex space-x-2">
              <div className="w-16 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg transform rotate-6"></div>
              <div className="w-16 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg transform -rotate-3"></div>
              <div className="w-16 h-10 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg transform rotate-3"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Financial Excellence</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Invoicing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Payments</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Accelerate billing cycles, minimize errors, and offer flexible payment options—all within a unified financial management module.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { title: "Start Free Trial", icon: "🚀" },
                  { title: "Watch Demo", icon: "🎬" }
                ].map((item, index) => (
                  <button 
                    key={index}
                    className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20"
                  >
                    <span className="text-xl mr-2">{item.icon}</span>
                    {item.title}
                  </button>
                ))}
              </div>
              
              {/* Payment Methods Showcase */}
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="flex items-center px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-xl mr-2">{method.icon}</span>
                    <span className="text-sm">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Overview</h2>
              <p className="text-lg text-gray-300 mb-12 text-center">
                Fast, accurate invoicing and seamless payment collection are critical for maintaining healthy cash flow. Fielduo's integrated billing suite automates the entire process from work order to payment reconciliation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl border border-blue-500/30 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
                    <span className="text-3xl mr-3">📄</span>
                    Streamlined Invoicing
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>One-click invoice generation from completed work orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Professional templates with custom branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Automated tax calculations and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Recurring billing for service contracts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl border border-purple-500/30 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center">
                    <span className="text-3xl mr-3">💳</span>
                    Flexible Payments
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Multiple payment methods including mobile wallets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Instant payment processing in the field</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Automated payment reminders and follow-ups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Real-time payment tracking and reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Features Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive tools designed to streamline your financial operations
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900 rounded-full p-1 flex">
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'invoicing' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('invoicing')}
                >
                  Invoicing
                </button>
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'payments' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('payments')}
                >
                  Payments
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {activeTab === 'invoicing' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {invoicingFeatures.map((feature, index) => (
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
              
              {activeTab === 'payments' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paymentFeatures.map((feature, index) => (
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

        {/* Financial Management Benefits Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Management Benefits</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Measurable improvements that transform your financial operations
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
                Get answers to common questions about our invoicing and payment capabilities
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Billing Process?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join thousands of field service companies that have streamlined their invoicing and payments with Fielduo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Start Free 14-Day Trial
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Schedule Demo
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