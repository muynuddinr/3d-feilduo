// pages/b2b-field-services.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function B2BFieldServices() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the typical implementation timeline for enterprise deployments?",
      answer: "Our typical enterprise implementation timeline is 6-12 weeks, depending on complexity and integration requirements. This includes 1-2 weeks for discovery and planning, 2-3 weeks for configuration and setup, 2-3 weeks for integration and testing, and 1-2 weeks for training and go-live support. We provide a detailed project plan with milestones and deliverables at each stage."
    },
    {
      question: "What training and certification programs do you offer?",
      answer: "We offer comprehensive role-based training programs including administrator certification, manager training, end-user training, and train-the-trainer programs. Training is delivered through live virtual sessions, recorded videos, hands-on labs, and detailed documentation. We also provide customized training materials tailored to your specific workflows and ongoing learning resources through our customer portal."
    },
    {
      question: "What level of ongoing support is included with each tier?",
      answer: "Standard support includes business hours support, online documentation, community forums, and a 48-hour response SLA. Professional support adds 24/7 priority support, a dedicated customer success manager, quarterly business reviews, enhanced SLA with 4-hour response, priority feature requests, and advanced analytics. Enterprise support includes a named technical account manager, custom SLAs, strategic roadmap consultation, custom development services, executive reporting, and dedicated infrastructure options."
    },
    {
      question: "Which enterprise systems integrate out of the box?",
      answer: "We offer 100+ pre-built connectors for major enterprise systems including Salesforce, Microsoft Dynamics, SAP, Oracle, ServiceNow, Workday, NetSuite, HubSpot, Zendesk, and Slack. Our integration marketplace is continuously expanding with new connectors developed and maintained by our expert integration team. All connectors are designed for seamless data synchronization and are regularly updated to work with the latest versions of the connected systems."
    },
    {
      question: "How do you handle data security and compliance during implementation?",
      answer: "We follow industry-leading security practices throughout the implementation process. All data is encrypted in transit and at rest using AES-256 encryption. We maintain SOC 2 Type II certification and comply with GDPR, CCPA, and other major regulations. Our implementation includes comprehensive security assessments, role-based access controls, audit trails, and detailed compliance documentation. We also offer advanced security features like single sign-on (SSO), multi-factor authentication, and custom data retention policies."
    },
    {
      question: "What happens if we need customizations beyond standard features?",
      answer: "We offer flexible customization options to meet your unique business requirements. Our Professional and Enterprise support tiers include custom development services. We work closely with your team to understand your specific needs and develop tailored solutions using our extensible platform architecture. Customizations are designed to be upgrade-friendly and fully supported through our standard update process. We also provide comprehensive documentation and training for any custom features."
    }
  ];

  const implementationServices = [
    {
      title: "Accelerated Implementation",
      subtitle: "Enterprise-Ready in 6-12 Weeks",
      icon: "🚀",
      items: [
        "Strategic Discovery & Planning",
        "Comprehensive business process analysis, stakeholder interviews, and technical architecture design"
      ]
    },
    {
      title: "Intelligent Configuration",
      subtitle: "",
      icon: "⚙️",
      items: [
        "Platform optimization based on your specific workflows, compliance requirements, and business objectives"
      ]
    },
    {
      title: "Comprehensive Training Programs",
      subtitle: "",
      icon: "🎓",
      items: [
        "Role-based certification courses, administrator workshops, and ongoing learning resources"
      ]
    },
    {
      title: "Go-Live Excellence",
      subtitle: "",
      icon: "📊",
      items: [
        "Dedicated launch support with real-time monitoring, performance optimization, and immediate issue resolution"
      ]
    }
  ];

  const enterpriseIntegration = [
    {
      title: "Native Enterprise Connectors",
      icon: "🔌",
      description: "Pre-built integrations with Salesforce, SAP, Oracle, Microsoft Dynamics, and other mission-critical systems"
    },
    {
      title: "Advanced API Framework",
      icon: "🔗",
      description: "RESTful APIs, webhooks, and real-time data synchronization for seamless connectivity"
    },
    {
      title: "Secure Data Migration",
      icon: "💾",
      description: "Enterprise-grade migration with validation checkpoints, rollback procedures, and zero-downtime cutover"
    },
    {
      title: "Custom Workflow Engine",
      icon: "⚙️",
      description: "Configurable business rules, approval processes, and compliance workflows tailored to your operations"
    }
  ];

  const popularIntegrations = [
    "Salesforce", "Microsoft Dynamics", "SAP", "Oracle", 
    "ServiceNow", "Workday", "NetSuite", "HubSpot", "Zendesk", "Slack"
  ];

  const implementationProcess = [
    {
      step: 1,
      duration: "1-2 Weeks",
      title: "Discovery & Planning",
      description: "Comprehensive business analysis, technical assessment, and strategic roadmap development",
      deliverables: [
        "Technical architecture design",
        "Implementation timeline",
        "Risk assessment",
        "Resource planning"
      ]
    },
    {
      step: 2,
      duration: "2-3 Weeks",
      title: "Configuration & Setup",
      description: "Platform configuration, workflow design, and initial system integration",
      deliverables: [
        "Environment setup",
        "Workflow configuration",
        "User role definition",
        "Security configuration"
      ]
    },
    {
      step: 3,
      duration: "2-3 Weeks",
      title: "Integration & Testing",
      description: "Enterprise system integration, data migration, and comprehensive testing protocols",
      deliverables: [
        "System integrations",
        "Data migration",
        "UAT completion",
        "Performance validation"
      ]
    },
    {
      step: 4,
      duration: "1-2 Weeks",
      title: "Training & Go-Live",
      description: "User training delivery, production deployment, and post-launch monitoring",
      deliverables: [
        "Training completion",
        "Production deployment",
        "Go-live support",
        "Performance metrics"
      ]
    }
  ];

  const supportTiers = [
    {
      name: "Standard",
      tag: "Essential Support",
      price: "Included",
      features: [
        "Business hours support (9 AM - 6 PM)",
        "Online documentation & resources",
        "Community forums access",
        "Standard SLA (48-hour response)",
        "Monthly platform updates"
      ],
      color: "from-gray-700 to-gray-800",
      button: "Learn More"
    },
    {
      name: "Professional",
      tag: "Most Popular",
      price: "Custom Pricing",
      features: [
        "24/7 priority technical support",
        "Dedicated customer success manager",
        "Quarterly business reviews",
        "Enhanced SLA (4-hour response)",
        "Priority feature requests",
        "Advanced analytics & reporting"
      ],
      color: "from-blue-700 to-indigo-800",
      button: "Get Quote"
    },
    {
      name: "Enterprise",
      tag: "White-Glove Service",
      price: "Custom Pricing",
      features: [
        "Named technical account manager",
        "Custom SLA agreements available",
        "Strategic roadmap consultation",
        "Custom development services",
        "Executive-level reporting",
        "Dedicated infrastructure options"
      ],
      color: "from-purple-700 to-pink-800",
      button: "Contact Sales"
    }
  ];

  const stats = [
    { value: "2,000+", label: "Successful Deployments" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "45%", label: "Average ROI Increase" },
    { value: "6 Weeks", label: "Average Go-Live" }
  ];

  return (
    <>
      <Head>
        <title>B2B Field Services | Fielduo</title>
        <meta name="description" content="Enterprise implementation and support services for field service management" />
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
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Trusted by 2,000+ Organizations</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span> & Support Services
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your operations with confidence. Our proven methodology and dedicated experts ensure rapid deployment, seamless integration, and continuous optimization for long-term success.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { title: "99.9% Uptime SLA", icon: "📈" },
                  { title: "SOC 2 Type II Certified", icon: "🛡️" },
                  { title: "24/7 Expert Support", icon: "🛟" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="text-2xl mr-3">{item.icon}</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Schedule Implementation Consultation
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Download Implementation Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Implementation Services Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Implementation Services</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our expert-led approach ensures your platform delivers value from day one while positioning you for long-term growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {implementationServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{service.title}</h3>
                      {service.subtitle && <p className="text-gray-400">{service.subtitle}</p>}
                    </div>
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
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Integration</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                100+ Pre-Built Connectors for seamless connectivity with your existing systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Popular Integrations:</h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {popularIntegrations.map((integration, index) => (
                  <div key={index} className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Proven Implementation Methodology Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Implementation Methodology</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our structured approach, refined through 2,000+ successful deployments, ensures predictable outcomes and rapid time-to-value
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
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
                          <div>
                            <h3 className="text-xl font-bold text-blue-400">{step.title}</h3>
                            <div className="text-sm bg-gray-700 px-3 py-1 rounded-full mt-2 inline-block">{step.duration}</div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        <div>
                          <h4 className="text-sm font-bold text-gray-400 mb-2">Key Deliverables:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.deliverables.map((deliverable, i) => (
                              <div key={i} className="flex items-center">
                                <span className="text-blue-400 mr-2">•</span>
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Support & Success Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Support & Success</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Choose the support level that aligns with your business requirements and growth objectives
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
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                      tier.tag === 'Most Popular' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {tier.tag}
                    </div>
                    <div className="text-xl font-bold">{tier.price}</div>
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
                    tier.tag === 'Most Popular' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}>
                    {tier.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Implementation Services?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our proven track record speaks for itself. We've successfully deployed our platform across diverse industries, delivering measurable results and exceptional ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation FAQs</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get detailed answers to common questions about our implementation process
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Implementation Journey?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our implementation specialists are ready to discuss your specific requirements and create a customized deployment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Schedule Discovery Call
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Contact Implementation Team
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