'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseFielduo = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const keyValues = [
    {
      title: "Streamline Operations",
      description: "Automated scheduling, dispatching, and work order management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Boost Productivity",
      description: "Mobile-first workflows with full offline support for field teams.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Enhance Customer Experience",
      description: "24/7 customer portal with real-time updates and transparency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Increase Revenue",
      description: "Smart pricing tools, upsell workflows, and retention boosters.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  const features = [
    {
      title: "AI-Powered Scheduling",
      description: "Auto-assign jobs based on skills, location, and availability—minimizing admin and maximizing field efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mobile App (Offline-First)",
      description: "Works seamlessly with or without WiFi/data. No connectivity? No problem—fieldwork continues and syncs automatically.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Real-Time Analytics",
      description: "Instant dashboards and reporting for all your jobs, revenue, and technician KPIs in a single view.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "IoT & AI Integration",
      description: "Integrate smart devices, sensors, and leverage AI automation with zero hassle—future-proof your operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Secure Cloud Platform",
      description: "Reliable, scalable, and accessible worldwide. Rock-solid infrastructure with encryption and compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];
  
  const industries = [
    { name: "HVAC", description: "Heating, Ventilation, and Air Conditioning" },
    { name: "Plumbing", description: "Expert plumbing solutions" },
    { name: "Electrical", description: "Professional electrical services" },
    { name: "Appliance Repair", description: "Reliable appliance fixes" },
    { name: "Facility Management", description: "Comprehensive facility services" },
    { name: "Pest Control", description: "Effective pest solutions" }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Why Choose Fielduo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the features that make Fielduo the perfect solution for your business needs
          </p>
        </div>
        
        {/* Key Value Propositions */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center" data-aos="fade-up">Key Value Propositions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyValues.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-3 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 border-b border-gray-800" data-aos="fade-up">
          <button 
            className={`px-8 py-4 text-lg font-medium transition-all duration-300 ${activeTab === 'features' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`px-8 py-4 text-lg font-medium transition-all duration-300 ${activeTab === 'industries' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('industries')}
          >
            Industries
          </button>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'features' && (
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-3 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'industries' && (
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-3 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h4 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{industry.name}</h4>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center" data-aos="fade-up">
              <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105">
                Click to see All Industries →
              </button>
            </div>
          </div>
        )}
        
        {/* Specialized Trades Section */}
        <div 
          className="bg-gradient-to-r from-gray-900 to-black p-10 rounded-2xl border border-gray-800 text-center mb-20 transform transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20"
          data-aos="fade-up"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Beyond the Basics</h3>
          <p className="text-xl text-gray-300 mb-6">Fielduo Powers 40+ Specialized Trades</p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            From janitorial services to pool maintenance, landscaping to locksmiths, we tailor smart solutions for every field force.
          </p>
        </div>
        
        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 mr-4 mb-4 md:mb-0">
            Get Started Today
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFielduo;