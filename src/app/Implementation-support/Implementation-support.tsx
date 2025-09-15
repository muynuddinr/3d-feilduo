// pages/implementation-support.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ImplementationSupport() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the typical deployment timeline?",
      answer: "Our typical deployment timeline is 6-8 weeks from kickoff to go-live. This includes 2 weeks for discovery and planning, 2 weeks for configuration and integration, 2 weeks for testing and training, and 2 weeks for go-live support and optimization. Enterprise deployments with complex integrations may require 10-12 weeks."
    },
    {
      question: "What training programs are included?",
      answer: "We offer comprehensive role-based training programs including administrator certification, manager training, end-user training, and train-the-trainer programs. Training is delivered through a mix of live virtual sessions, recorded videos, hands-on labs, and detailed documentation. We also provide customized training materials tailored to your specific workflows."
    },
    {
      question: "What level of post-launch support do you provide?",
      answer: "All customers receive our Standard Support with business hours assistance, knowledge base access, and monthly updates. Premium Support adds 24/7 priority support, a dedicated account manager, quarterly business reviews, and priority feature requests. Enterprise Support includes a named technical architect, custom SLAs, strategic planning, and custom development services."
    },
    {
      question: "Which enterprise systems integrate out of the box?",
      answer: "Fielduo offers pre-built connectors for Salesforce, SAP, Oracle, Microsoft Dynamics, QuickBooks, NetSuite, and over 100 other business applications. Our integration marketplace includes connectors for CRM, ERP, accounting, inventory, HR, and communication systems. All connectors are maintained and updated by our integration team."
    },
    {
      question: "Can custom integrations be developed?",
      answer: "Absolutely. Our Advanced API Framework provides RESTful APIs, webhooks, and real-time synchronization capabilities for custom development. We offer professional services for custom integration development, or your team can build using our comprehensive developer documentation, SDKs, and sandbox environment."
    },
    {
      question: "How do you ensure secure data migration?",
      answer: "We follow a rigorous data migration process including data assessment, cleansing, mapping, validation, and testing. All migrations are performed in secure environments with encryption in transit and at rest. We provide detailed validation reports and maintain full audit trails throughout the migration process. For sensitive data, we offer anonymization and tokenization options."
    }
  ];

  const timeToValue = [
    {
      title: "Get operational within weeks, not months",
      description: "With our proven deployment methodology",
      icon: "⏱️"
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 compliant processes with end-to-end encryption and audit trails",
      icon: "🔒"
    },
    {
      title: "Expert Guidance",
      description: "Dedicated implementation specialists with deep industry expertise",
      icon: "👨‍💼"
    }
  ];

  const implementationServices = [
    {
      title: "Professional Deployment",
      icon: "🚀",
      items: [
        "Strategic Planning & Discovery",
        "Comprehensive business requirements analysis and technical architecture design"
      ]
    },
    {
      title: "Accelerated Configuration",
      icon: "⚙️",
      items: [
        "Platform setup optimized for your specific business processes and compliance requirements"
      ]
    },
    {
      title: "Professional Training Programs",
      icon: "🎓",
      items: [
        "Role-specific certification programs for administrators, managers, and end users"
      ]
    },
    {
      title: "Go-Live Support & Monitoring",
      icon: "📊",
      items: [
        "Dedicated support during launch with real-time performance monitoring and optimization"
      ]
    }
  ];

  const enterpriseIntegration = [
    {
      title: "Pre-Built Enterprise Connectors",
      icon: "🔌",
      description: "Native integrations with Salesforce, SAP, Oracle, Microsoft Dynamics, and 100+ business applications"
    },
    {
      title: "Advanced API Framework",
      icon: "🔗",
      description: "RESTful APIs, webhooks, and real-time data synchronization capabilities"
    },
    {
      title: "Secure Data Migration",
      icon: "💾",
      description: "Enterprise-grade migration with validation, testing, and zero-downtime cutover"
    },
    {
      title: "Custom Workflow Engine",
      icon: "⚙️",
      description: "Configure approval chains, compliance rules, and automated business processes"
    }
  ];

  const supportTiers = [
    {
      name: "Standard Support",
      tag: "Included with all plans",
      features: [
        "Business hours support (8x5)",
        "Online knowledge base",
        "Community forums",
        "Monthly platform updates"
      ],
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "Premium Support",
      tag: "RECOMMENDED",
      features: [
        "24/7 priority support",
        "Dedicated account manager",
        "Quarterly business reviews",
        "Priority feature requests",
        "Performance analytics"
      ],
      color: "from-blue-700 to-indigo-800"
    },
    {
      name: "Enterprise Support",
      tag: "White-glove service",
      features: [
        "Named technical architect",
        "Custom SLA agreements",
        "Strategic roadmap planning",
        "Custom development services",
        "Executive reporting"
      ],
      color: "from-purple-700 to-pink-800"
    }
  ];

  const implementationProcess = [
    {
      step: 1,
      title: "Discovery",
      duration: "Week 1-2",
      description: "Requirements gathering, stakeholder interviews, and technical assessment"
    },
    {
      step: 2,
      title: "Configuration",
      duration: "Week 3-4",
      description: "Platform setup, workflow design, and initial integration development"
    },
    {
      step: 3,
      title: "Testing & Training",
      duration: "Week 5-6",
      description: "User acceptance testing, training delivery, and performance validation"
    },
    {
      step: 4,
      title: "Go-Live & Optimization",
      duration: "Week 7+",
      description: "Production deployment, monitoring, and continuous improvement"
    }
  ];

  return (
    <>
      <Head>
        <title>Implementation & Support Services | Fielduo</title>
        <meta name="description" content="Discover Fielduo's comprehensive implementation and support services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
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
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Enterprise-Grade Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Implementation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span> Services
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Accelerate your digital transformation with our comprehensive implementation services. From initial deployment to ongoing optimization, we ensure your success every step of the way.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { title: "99.9% Uptime SLA", icon: "📈" },
                  { title: "24/7 Support", icon: "🛟" },
                  { title: "SOC 2 Certified", icon: "🛡️" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="text-2xl mr-3">{item.icon}</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Accelerated Time-to-Value Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Accelerated Time-to-Value</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get operational quickly with our proven methodology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {timeToValue.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comprehensive Implementation Services Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Implementation Services</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our proven methodology ensures rapid deployment with minimal business disruption
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {implementationServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-blue-400">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Integration Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Integration</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Seamlessly connect Fielduo with your existing business systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {enterpriseIntegration.map((integration, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{integration.icon}</div>
                    <h3 className="text-xl font-bold text-blue-400">{integration.title}</h3>
                  </div>
                  <p className="text-gray-300">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ongoing Support & Success Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Support & Success</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Choose the support level that matches your business requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${tier.color} rounded-2xl border p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                    hoveredTier === index ? 'border-blue-500 shadow-xl' : 'border-gray-800'
                  }`}
                  onMouseEnter={() => setHoveredTier(index)}
                  onMouseLeave={() => setHoveredTier(null)}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      tier.tag === 'RECOMMENDED' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {tier.tag}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-bold transition ${
                    tier.tag === 'RECOMMENDED' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}>
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Process Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Implementation Process</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A structured approach developed from hundreds of successful enterprise deployments
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Process Line */}
                <div className="absolute left-4 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>
                
                <div className="space-y-12 relative z-10">
                  {implementationProcess.map((step, index) => (
                    <div 
                      key={index}
                      className="flex"
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xl font-bold mr-6">
                        {step.step}
                      </div>
                      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border p-6 flex-grow transition-all duration-300 ${
                        hoveredStep === index ? 'border-blue-500 shadow-xl' : 'border-gray-800'
                      }`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-blue-400">{step.title}</h3>
                          <div className="text-sm bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">{step.duration}</div>
                        </div>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Implementation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join over 2,000+ organizations that have successfully deployed our platform. Schedule a consultation with our implementation specialists today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Download Implementation Guide
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get answers to common implementation and support questions
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

        {/* Contact Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Additional Information?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Our implementation experts are standing by to answer your specific questions.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Contact Implementation Team →
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
          background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}