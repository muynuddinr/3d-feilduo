'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompetitorComparison = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const comparisonData = [
    {
      category: 'pricing',
      differentiator: 'Pricing',
      fielduo: 'Best-in-class value, no core gaps',
      competitors: '$0 to $119/month, features may restrict',
      fielduoIcon: '✅',
      competitorIcon: '⚠️'
    },
    {
      category: 'scheduling',
      differentiator: 'Scheduling',
      fielduo: 'AI-powered and easy to deploy',
      competitors: 'Robust but complex',
      fielduoIcon: '✅',
      competitorIcon: '⚠️'
    },
    {
      category: 'mobile',
      differentiator: 'Mobile + Offline',
      fielduo: 'Full features, easy setup',
      competitors: 'Advanced offline use may be limited',
      fielduoIcon: '✅',
      competitorIcon: '⚠️'
    },
    {
      category: 'portal',
      differentiator: 'Customer Portal',
      fielduo: 'Fully integrated and seamless',
      competitors: 'Often requires add-ons',
      fielduoIcon: '✅',
      competitorIcon: '⚠️'
    },
    {
      category: 'support',
      differentiator: 'Customer Support',
      fielduo: '24/7 dedicated support with quick response times',
      competitors: 'Limited hours or premium support tiers',
      fielduoIcon: '✅',
      competitorIcon: '⚠️'
    },
    {
      category: 'onboarding',
      differentiator: 'Onboarding',
      fielduo: 'Personalized setup and training included',
      competitors: 'Self-service or additional fees for onboarding',
      fielduoIcon: '✅',
      competitorIcon: '⚠️'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'scheduling', label: 'Scheduling' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'portal', label: 'Portal' },
    { id: 'support', label: 'Support' },
    { id: 'onboarding', label: 'Onboarding' }
  ];

  const filteredData = activeCategory === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.category === activeCategory);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Fielduo vs Competitors
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Fielduo stands out from the competition with superior features and value
          </p>
        </div>
        
        {/* Category Filter - Mobile */}
        <div className="lg:hidden mb-8" data-aos="fade-up" data-aos-delay="100">
          <select 
            className="w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm border border-gray-800 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
        <div className="hidden lg:flex justify-center mb-12 flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
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
              data-aos-delay={150 + index * 50}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div 
          className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 p-5 border-b border-gray-700">
            <div className="font-bold text-lg text-gray-300">Differentiator</div>
            <div className="font-bold text-lg text-blue-400 flex items-center">
              <span className="mr-2">🚀</span> Fielduo Advantage
            </div>
            <div className="font-bold text-lg text-gray-400 flex items-center">
              <span className="mr-2">🏢</span> Competitors
            </div>
          </div>
          
          {/* Table Body */}
          {filteredData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-3 p-5 transition-all duration-300 hover:bg-gray-850 ${
                index % 2 === 0 ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-900 bg-opacity-30'
              }`}
              data-aos="fade-up"
              data-aos-delay={250 + index * 50}
            >
              {/* Differentiator */}
              <div className="flex items-start mb-4 md:mb-0">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-1.5 h-14 mr-4 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-lg text-white">{item.differentiator}</h3>
                </div>
              </div>
              
              {/* Fielduo Advantage */}
              <div className="flex items-start mb-4 md:mb-0 group">
                <span className="text-green-400 mr-3 text-xl mt-1 group-hover:scale-110 transition-transform">{item.fielduoIcon}</span>
                <div>
                  <h4 className="font-semibold text-blue-300">Fielduo Advantage</h4>
                  <p className="text-gray-300">{item.fielduo}</p>
                </div>
              </div>
              
              {/* Competitors */}
              <div className="flex items-start group">
                <span className="text-yellow-400 mr-3 text-xl mt-1 group-hover:scale-110 transition-transform">{item.competitorIcon}</span>
                <div>
                  <h4 className="font-semibold text-gray-400">Competitors</h4>
                  <p className="text-gray-400">{item.competitors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Takeaways */}
        <div 
          className="mt-16 bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Fielduo?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-right" data-aos-delay="350">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300">Superior value with no hidden costs or feature restrictions</p>
            </div>
            
            <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="400">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300">Advanced AI features that are actually easy to use</p>
            </div>
            
            <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-right" data-aos-delay="450">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300">Complete feature set with no need for expensive add-ons</p>
            </div>
            
            <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="500">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300">Reliable offline functionality that just works</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="550">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 mr-4 mb-4 md:mb-0">
            Start Free Trial
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
            Request Competitive Comparison
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparison;