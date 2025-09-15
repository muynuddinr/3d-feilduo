'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const faqData = [
    {
      category: 'general',
      question: 'What is Fielduo and how does it work?',
      answer: 'Fielduo is a comprehensive field service management platform that helps businesses streamline operations, dispatch technicians, manage work orders, and improve customer communication. Our AI-powered system automates scheduling while our mobile app enables field teams to work efficiently even offline.'
    },
    {
      category: 'pricing',
      question: 'What is Fielduo\'s pricing structure?',
      answer: 'We offer transparent, tiered pricing designed to provide the best value in the industry. Unlike competitors who charge extra for core features, our plans include all essential functionality starting at $49/user/month. We also offer custom enterprise solutions for larger teams.'
    },
    {
      category: 'onboarding',
      question: 'How long does it take to get started with Fielduo?',
      answer: 'Most businesses can be up and running within 24-48 hours. Our onboarding process includes data migration assistance, training sessions, and dedicated support to ensure a smooth transition. We also offer customized onboarding for complex requirements.'
    },
    {
      category: 'technical',
      question: 'How does the offline functionality work?',
      answer: 'Our mobile app automatically syncs data when connected to the internet and stores everything needed for fieldwork locally on the device. When connectivity is lost, technicians can continue accessing job details, recording work, capturing signatures, and more. All data syncs automatically once connection is restored.'
    },
    {
      category: 'technical',
      question: 'Can Fielduo integrate with my existing software?',
      answer: 'Yes! Fielduo offers integrations with popular accounting software, CRM systems, payment processors, and marketing tools. We also provide API access for custom integrations. Our team can help configure these connections during onboarding.'
    },
    {
      category: 'support',
      question: 'What kind of customer support do you offer?',
      answer: 'We provide 24/7 customer support via chat, email, and phone for all plans. Our dedicated support team has extensive knowledge of field service operations and can help with technical issues, best practices, and workflow optimization.'
    },
    {
      category: 'security',
      question: 'How secure is my data with Fielduo?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards. All data is backed up redundantly across multiple geographic locations to ensure business continuity.'
    },
    {
      category: 'pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start the trial, and you\'ll have access to our support team during this period to help you evaluate the platform.'
    },
    {
      category: 'general',
      question: 'What industries does Fielduo serve?',
      answer: 'We serve over 40 specialized trades including HVAC, plumbing, electrical, appliance repair, facility management, pest control, janitorial services, pool maintenance, landscaping, locksmiths, and many more. Our platform is flexible enough to accommodate the unique needs of each industry.'
    },
    {
      category: 'technical',
      question: 'How often do you update the platform?',
      answer: 'We release new features and improvements every two weeks. These updates are automatically applied to your account at no extra cost. We also take customer feedback seriously and often implement feature requests from our user community.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'technical', label: 'Technical' },
    { id: 'onboarding', label: 'Onboarding' },
    { id: 'support', label: 'Support' },
    { id: 'security', label: 'Security' }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Fielduo
          </p>
        </div>
        
        {/* Search Box */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm border border-gray-800 text-white rounded-xl p-5 pl-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-400 absolute left-5 top-5" 
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
        
        {/* Category Filter - Mobile */}
        <div className="lg:hidden mb-8" data-aos="fade-up" data-aos-delay="150">
          <select 
            className="w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm border border-gray-800 text-white rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Category Filter - Desktop */}
        <div className="hidden lg:flex justify-center mb-12 flex-wrap gap-3" data-aos="fade-up" data-aos-delay="150">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-gray-900 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-800'
              }`}
              onClick={() => setActiveCategory(category.id)}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 50}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                data-aos="fade-up"
                data-aos-delay={250 + index * 50}
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left font-medium text-white hover:bg-gray-850 transition-colors duration-300"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180 text-blue-400' : 'text-gray-400'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-5 text-gray-300 border-t border-gray-800 bg-gray-900 bg-opacity-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400" data-aos="fade-up">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 mx-auto mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <p className="text-lg">No questions found matching your search.</p>
              <button 
                className="text-blue-400 hover:text-blue-300 mt-4 px-4 py-2 rounded-lg border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-300"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-gradient-to-r from-gray-900 to-black p-10 rounded-2xl border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">Can't find the answer you're looking for? Please chat with our friendly team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                Get in touch
              </button>
              <button className="border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;