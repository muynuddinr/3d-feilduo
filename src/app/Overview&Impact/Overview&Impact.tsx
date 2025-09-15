'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OverviewImpactPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const faqItems = [
    {
      question: "What is Fielduo?",
      answer: "Fielduo is an intelligent field service management platform that uses AI, machine learning, and IoT to streamline operations, optimize scheduling, and enhance customer experiences. It replaces manual processes with automated workflows to transform how field service businesses operate."
    },
    {
      question: "How does Fielduo reduce hidden costs?",
      answer: "Fielduo reduces hidden costs through intelligent route optimization that decreases fuel consumption by 30%, automated scheduling that increases job completion by 47%, and predictive maintenance that prevents costly equipment failures. Our platform also minimizes administrative overhead through automation."
    },
    {
      question: "What ROI can I expect?",
      answer: "Businesses typically see a 300%+ return on investment within the first year. This comes from increased job completion rates, reduced operational costs, improved technician productivity, and decreased customer churn. Most clients recover their investment within 3-6 months of implementation."
    },
    {
      question: "Which key metrics improve with Fielduo?",
      answer: "Key metrics that improve include: 47% increase in daily job completion, 30% reduction in travel costs, 88% first-time fix rate, 40% boost in technician productivity, 60% faster response times, and up to 76% reduction in customer churn. These improvements directly impact your bottom line."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-block mb-4" data-aos="fade-down" data-aos-delay="100">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-900 text-blue-200 rounded-full">TRANSFORM YOUR FIELD OPERATIONS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-right" data-aos-delay="200">
                Overview &
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Impact</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
                Transform your field service operations. Stop losing money on chaos and unlock exponential growth with Fielduo's intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-right" data-aos-delay="400">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                  See Live Demo
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">300%+</div>
                <div className="text-gray-300">Revenue Increase</div>
                <div className="text-sm text-blue-400 mt-2">ROI in Year One</div>
              </div>
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="300">
                <div className="text-4xl font-bold text-blue-400 mb-2">47%</div>
                <div className="text-gray-300">Job Completion</div>
                <div className="text-sm text-blue-400 mt-2">More daily jobs completed</div>
              </div>
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="400">
                <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-gray-300">Cost Savings</div>
                <div className="text-sm text-blue-400 mt-2">Reduction in travel costs</div>
              </div>
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="500">
                <div className="text-4xl font-bold text-blue-400 mb-2">88%</div>
                <div className="text-gray-300">First-Time Fix</div>
                <div className="text-sm text-blue-400 mt-2">Success rate improvement</div>
              </div>
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="600">
                <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Productivity</div>
                <div className="text-sm text-blue-400 mt-2">Technician efficiency boost</div>
              </div>
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="700">
                <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-gray-300">Response Time</div>
                <div className="text-sm text-blue-400 mt-2">Faster customer service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Problem Section */}
      <section className="py-16 px-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every minute your technicians run late, your customers are left waiting, and your back office drowns in paperwork— you're bleeding revenue. Fielduo replaces chaos with clarity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/10" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 p-3 rounded-xl mr-4 transform transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Lost Revenue</h3>
              </div>
              <p className="text-gray-300">Without smart scheduling, you're missing 47% more daily jobs</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500/10" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-xl mr-4 transform transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Wasted Fuel</h3>
              </div>
              <p className="text-gray-300">Inefficient routing increases mileage costs by 30%</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10" data-aos="fade-right" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-3 rounded-xl mr-4 transform transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customer Churn</h3>
              </div>
              <p className="text-gray-300">76% of clients leave after just one bad experience</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10" data-aos="fade-left" data-aos-delay="400">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-xl mr-4 transform transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Technician Frustration</h3>
              </div>
              <p className="text-gray-300">Low retention and productivity without real-time tools</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hidden Cost Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Hidden Cost of Chaos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how inefficient operations are silently impacting your bottom line
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-xl" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Without Fielduo</h3>
              <ul className="space-y-4">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">!</div>
                  <div>
                    <span className="font-bold text-red-400">Lost Revenue:</span> Inefficient scheduling costs you 47% more potential daily jobs
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">!</div>
                  <div>
                    <span className="font-bold text-red-400">Operational Waste:</span> Poor routing increases operational costs by 30%
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">!</div>
                  <div>
                    <span className="font-bold text-red-400">Customer Loss:</span> 76% of clients leave after one bad service experience
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">!</div>
                  <div>
                    <span className="font-bold text-red-400">Team Burnout:</span> Manual processes lead to high turnover and low productivity
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-xl" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-6 text-green-400">With Fielduo</h3>
              <ul className="space-y-4">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <div>
                    <span className="font-bold text-green-400">Revenue Growth:</span> AI scheduling increases daily jobs by 47%
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <div>
                    <span className="font-bold text-green-400">Cost Reduction:</span> Optimized routing decreases travel costs by 30%
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <div>
                    <span className="font-bold text-green-400">Customer Retention:</span> 88% first-time fix rate improves satisfaction
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <div>
                    <span className="font-bold text-green-400">Team Empowerment:</span> Real-time tools boost productivity by 40%
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Proven Impact Section */}
      <section className="py-16 px-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Business Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results achieved by businesses using Fielduo's intelligent platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-5xl font-bold text-blue-400 mb-4">300%+</div>
              <h3 className="text-xl font-bold mb-2">ROI</h3>
              <p className="text-gray-300">Return on investment in Year One</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-5xl font-bold text-blue-400 mb-4">47%</div>
              <h3 className="text-xl font-bold mb-2">Boost</h3>
              <p className="text-gray-300">In daily job completion rate</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-5xl font-bold text-blue-400 mb-4">30%</div>
              <h3 className="text-xl font-bold mb-2">Savings</h3>
              <p className="text-gray-300">On travel and fuel costs</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-5xl font-bold text-blue-400 mb-4">88%</div>
              <h3 className="text-xl font-bold mb-2">Success</h3>
              <p className="text-gray-300">First-time fix rate achievement</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="500">
              <div className="text-5xl font-bold text-blue-400 mb-4">40%</div>
              <h3 className="text-xl font-bold mb-2">Increase</h3>
              <p className="text-gray-300">In technician productivity</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-5xl font-bold text-blue-400 mb-4">76%</div>
              <h3 className="text-xl font-bold mb-2">Reduction</h3>
              <p className="text-gray-300">In customer churn rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about Fielduo's impact and capabilities
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transform transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-white hover:bg-gray-850 transition-colors duration-300"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="pr-4">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 ${activeQuestion === index ? 'transform rotate-180 text-blue-400' : 'text-gray-400'}`}
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
                  className={`overflow-hidden transition-all duration-300 ${activeQuestion === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-6 text-gray-300 border-t border-gray-800 bg-gray-900 bg-opacity-50">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-center relative z-10">
        <div className="container mx-auto max-w-3xl" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Field Operations?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of businesses that have unlocked exponential growth with Fielduo
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
              See Live Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewImpactPage;