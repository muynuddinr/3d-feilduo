'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const IndustriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const industries = [
    { 
      title: 'Landscaping & Lawn Care', 
      description: 'Professional landscaping and lawn care management software for outdoor service professionals.', 
      icon: '🌿',
      link: '/landscaping-lawn-care'
    },
    { 
      title: 'Janitorial & Cleaning', 
      description: 'Commercial cleaning management software for quality control and client satisfaction.', 
      icon: '🧹',
      link: '/janitorial-cleaning'
    },
    { 
      title: 'Security Services', 
      description: 'Optimize security operations with tools for installation, monitoring, and compliance.', 
      icon: '🛡️',
      link: '/security-services'
    },
    { 
      title: 'Medical Device Services', 
      description: 'Healthcare equipment management ensuring compliance and patient safety.', 
      icon: '💊',
      link: '/medical-device-services'
    },
    { 
      title: 'Healthcare Field Services', 
      description: 'Mobile healthcare service management for home health and patient care.', 
      icon: '🏥',
      link: '/healthcare-field-services'
    },
    { 
      title: 'Manufacturing', 
      description: 'Industrial equipment service management to minimize downtime and optimize safety.', 
      icon: '🏭',
      link: '/manufacturing'
    },
    { 
      title: 'Fire Safety & Inspection', 
      description: 'Comprehensive fire protection service management with compliance tracking.', 
      icon: '🔥',
      link: '/fire-safety-inspection'
    },
    { 
      title: 'Elevator Maintenance', 
      description: 'Specialized software for elevator and escalator maintenance and safety compliance.', 
      icon: '🛗',
      link: '/elevator-maintenance'
    },
    { 
      title: 'Locksmith Services', 
      description: 'Mobile locksmith service management with emergency dispatch and tracking.', 
      icon: '🔑',
      link: '/locksmith-services'
    },
    { 
      title: 'Water Treatment', 
      description: 'Manage water quality, chemical tracking, and compliance in treatment services.', 
      icon: '💧',
      link: '/water-treatment'
    },
    { 
      title: 'Waste Management', 
      description: 'Optimize waste collection routes, recycling, and environmental compliance.', 
      icon: '🗑️',
      link: '/waste-management'
    },
    { 
      title: 'Pool Service', 
      description: 'Comprehensive pool maintenance software with chemical tracking and scheduling.', 
      icon: '🏊',
      link: '/pool-service'
    },
    { 
      title: 'IT Services', 
      description: 'Field IT support management including remote troubleshooting and asset tracking.', 
      icon: '💻',
      link: '/it-services'
    },
    { 
      title: 'Telecommunications', 
      description: 'Manage telecom infrastructure, installations, and network performance.', 
      icon: '📡',
      link: '/telecommunications'
    },
    { 
      title: 'Construction', 
      description: 'Project management software for construction crews, equipment, and safety.', 
      icon: '👷',
      link: '/construction'
    },
    { 
      title: 'Energy & Utilities', 
      description: 'Comprehensive power and utility service management with outage response.', 
      icon: '⚡',
      link: '/energy-utilities'
    },
    { 
      title: 'Automotive Services', 
      description: 'Mobile automotive repair and fleet maintenance with diagnostics and tracking.', 
      icon: '🚗',
      link: '/automotive-services'
    },
    { 
      title: 'Oil & Gas', 
      description: 'Field operations for oil and gas with asset management and safety compliance.', 
      icon: '🛢️',
      link: '/oil-gas'
    },
    { 
      title: 'Solar & Renewable Energy', 
      description: 'Manage renewable energy systems with installation, monitoring, and reporting.', 
      icon: '☀️',
      link: '/solar-renewable-energy'
    },
    { 
      title: 'Internet Service Providers', 
      description: 'ISP field service management with installation, support, and optimization.', 
      icon: '🌐',
      link: '/internet-service-providers'
    },
    { 
      title: 'Home Security', 
      description: 'Residential security management with system installation and monitoring.', 
      icon: '🏠',
      link: '/home-security'
    },
    { 
      title: 'Fire Protection Systems', 
      description: 'Manage fire suppression installations, testing, and compliance effectively.', 
      icon: '🧯',
      link: '/fire-protection-systems'
    },
    { 
      title: 'Refrigeration Services', 
      description: 'Commercial refrigeration management with temperature and compliance tracking.', 
      icon: '❄️',
      link: '/refrigeration-services'
    },
    { 
      title: 'Roofing Services', 
      description: 'Field management for roofing installation, repairs, and warranty tracking.', 
      icon: '🏘️',
      link: '/roofing-services'
    },
    { 
      title: 'Flooring Services', 
      description: 'Flooring installation and maintenance management with project tracking.', 
      icon: '🧱',
      link: '/flooring-services'
    },
    { 
      title: 'Glass & Glazing', 
      description: 'Manage glass installation projects with precision measurement and tracking.', 
      icon: '🔍',
      link: '/glass-glazing'
    },
    { 
      title: 'Painting Services', 
      description: 'Painting project management for residential and commercial services.', 
      icon: '🎨',
      link: '/painting-services'
    },
    { 
      title: 'Restoration Services', 
      description: 'Disaster restoration and remediation management with emergency response.', 
      icon: '🔧',
      link: '/restoration-services'
    },
    { 
      title: 'Environmental Services', 
      description: 'Environmental testing and remediation with compliance and reporting tools.', 
      icon: '🌎',
      link: '/environmental-services'
    },
    { 
      title: 'Laboratory Services', 
      description: 'Mobile laboratory services with testing protocols and secure tracking.', 
      icon: '🧪',
      link: '/laboratory-services'
    },
    { 
      title: 'Veterinary Services', 
      description: 'Mobile veterinary service management with scheduling and medical records.', 
      icon: '🐾',
      link: '/veterinary-services'
    },
    { 
      title: 'Dental Services', 
      description: 'Mobile dental care services with scheduling, insurance, and compliance.', 
      icon: '🦷',
      link: '/dental-services'
    },
    { 
      title: 'Real Estate Services', 
      description: 'Inspection and property services with detailed reporting and compliance.', 
      icon: '🏢',
      link: '/real-estate-services'
    },
    { 
      title: 'Insurance Services', 
      description: 'Inspection and claims management with accurate assessments and reporting.', 
      icon: '📑',
      link: '/insurance-services'
    },
    { 
      title: 'Legal Services', 
      description: 'Legal process serving and support with document tracking and compliance.', 
      icon: '⚖️',
      link: '/legal-services'
    },
    { 
      title: 'Equipment Rental', 
      description: 'Rental and maintenance management with asset tracking and billing.', 
      icon: '🔧',
      link: '/equipment-rental'
    },
    { 
      title: 'Catering Services', 
      description: 'Field management for catering events with menu planning and safety.', 
      icon: '🍽️',
      link: '/catering-services'
    },
    { 
      title: 'Event Services', 
      description: 'Event setup and management software with resource and staff coordination.', 
      icon: '🎪',
      link: '/event-services'
    },
    { 
      title: 'Moving Services', 
      description: 'Manage moving and relocation with inventory, insurance, and route planning.', 
      icon: '🚚',
      link: '/moving-services'
    },
    { 
      title: 'Courier Services', 
      description: 'Delivery and courier management with real-time tracking and proof of delivery.', 
      icon: '📦',
      link: '/courier-services'
    },
    { 
      title: 'Pharmacy Services', 
      description: 'Mobile pharmacy service management with prescription tracking and delivery.', 
      icon: '💊',
      link: '/pharmacy-services'
    },
    { 
      title: 'Beauty & Wellness', 
      description: 'Mobile beauty and wellness management with scheduling and product tracking.', 
      icon: '💄',
      link: '/beauty-wellness'
    },
  ];

  const filteredIndustries = industries.filter(industry => 
    industry.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    industry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">40+ Industries Served</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore More
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Industries
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Fielduo powers 40+ specialized trades with tailored solutions designed for your unique business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-demo">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Request a Demo
              </button>
            </Link>
            <Link href="/contact-sales">
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search industries..."
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-400 absolute left-4 top-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tailored Solutions for Every Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Fielduo can transform operations in your specific industry with customized features and workflows.
            </p>
          </div>

          {filteredIndustries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <Link href={industry.link} className="flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No industries found</h3>
              <p className="text-gray-400">Try a different search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-400">40+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-400">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-400">88%</div>
              <div className="text-gray-300">First-Time Fix Rate</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-400">47%</div>
              <div className="text-gray-300">More Jobs Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Discover how Fielduo can revolutionize operations in your specific industry
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/free-trial">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;