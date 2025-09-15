// pages/core-platform-capabilities.js
'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CorePlatformCapabilities() {
  const [activeFaq, setActiveFaq] = useState(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    "How does AI-Powered Technician Matching work?",
    "What is Smart Route Optimization?",
    "Can schedules adjust in real time?",
    "Does the mobile app work offline?",
    "How are digital work orders handled?",
    "How does Fielduo manage inventory?",
    "What billing features are included?",
    "What analytics are available?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-down">Core Platform Technology</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-400" data-aos="fade-down" data-aos-delay="100">Fielduo's Core Platform Capabilities</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10" data-aos="fade-down" data-aos-delay="200">
          Transforming chaos into clarity and profitability with four powerful modules that work together to deliver unmatched efficiency and growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            Watch Demo
          </button>
          <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore Features
          </button>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Complete Field Service Solution</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
            Fielduo's comprehensive platform tackles the toughest field service challenges head-on. From intelligent scheduling to seamless customer communication and streamlined back-office operations, these four modules work together to deliver unmatched efficiency and growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "88%", label: "First-Time Fix Rate" },
              { value: "47%", label: "More Jobs Daily" },
              { value: "30%", label: "Travel Cost Savings" },
              { value: "300%", label: "ROI in Year One" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center hover:border-blue-500 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modules Section */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Four Powerful Modules</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
            Each module is designed to solve specific field service challenges while working seamlessly together.
          </p>
          
          <div className="space-y-24">
            {/* Module 1: Smart Scheduling & Dispatching */}
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="md:flex">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Smart Scheduling & Dispatching</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">The Problem:</h4>
                    <p className="text-gray-300">Double-booked technicians, missed appointment windows, and skill mismatches.</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Our Solution:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>AI-Powered Technician Matching:</strong> Assigns jobs based on skills, location, and availability</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Smart Route Optimization:</strong> Reduces travel time by up to 30% with live traffic data</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Dynamic Schedule Adjustments:</strong> Auto-reshuffles for emergencies or cancellations</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Result:</h4>
                    <p className="text-gray-300">88% first-time fix rate & 47% more jobs daily</p>
                  </div>
                </div>
                <div className="md:w-1/2 bg-black bg-opacity-50 p-10 flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-6 text-center">Smart Scheduling & Dispatching</h4>
                  <ul className="space-y-4">
                    {["AI-Powered Technician Matching", "Smart Route Optimization", "Dynamic Schedule Adjustments"].map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]"
                        data-aos="fade-left"
                        data-aos-delay={300 + index * 100}
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Module 2: Mobile Workforce Management */}
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-black bg-opacity-50 p-10 flex flex-col justify-center order-2 md:order-1">
                  <h4 className="text-xl font-bold mb-6 text-center">Mobile Workforce Management</h4>
                  <ul className="space-y-4">
                    {["Complete Job Briefings", "Offline-First Mobile App", "Digital Work Orders"].map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]"
                        data-aos="fade-right"
                        data-aos-delay={400 + index * 100}
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 p-10 order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Mobile Workforce Management</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">The Problem:</h4>
                    <p className="text-gray-300">Technicians arrive unprepared, causing delays and repeat visits.</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Our Solution:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Complete Job Briefings:</strong> Full history, specs & instructions on mobile devices</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Offline-First Mobile App:</strong> Works without internet, auto-syncs when back online</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Digital Work Orders:</strong> Paperless with photos, e-signatures, and real-time updates</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Result:</h4>
                    <p className="text-gray-300">40% more jobs completed & fewer repeat visits</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Module 3: Customer Experience Management */}
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl" data-aos="fade-up" data-aos-delay="400">
              <div className="md:flex">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Customer Experience Management</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">The Problem:</h4>
                    <p className="text-gray-300">Lack of proactive communication increases churn & complaints.</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Our Solution:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Real-Time Notifications:</strong> SMS, email & voice updates for customers</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Live Technician Tracking:</strong> Interactive maps show exact ETA</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Self-Service Customer Portal:</strong> 24/7 scheduling, history & invoices</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Result:</h4>
                    <p className="text-gray-300">Reduced complaints & churn rates</p>
                  </div>
                </div>
                <div className="md:w-1/2 bg-black bg-opacity-50 p-10 flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-6 text-center">Customer Experience Management</h4>
                  <ul className="space-y-4">
                    {["Real-Time Notifications", "Live Technician Tracking", "Self-Service Customer Portal"].map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]"
                        data-aos="fade-left"
                        data-aos-delay={500 + index * 100}
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Module 4: Business Operations Optimization */}
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl" data-aos="fade-up" data-aos-delay="500">
              <div className="md:flex">
                <div className="md:w-1/2 bg-black bg-opacity-50 p-10 flex flex-col justify-center order-2 md:order-1">
                  <h4 className="text-xl font-bold mb-6 text-center">Business Operations Optimization</h4>
                  <ul className="space-y-4">
                    {["Inventory Management", "Quote & Estimate Generation", "Automated Invoicing & Payments", "Comprehensive Reporting"].map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]"
                        data-aos="fade-right"
                        data-aos-delay={600 + index * 100}
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 p-10 order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Business Operations Optimization</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">The Problem:</h4>
                    <p className="text-gray-300">Manual processes slow inventory, quotes, and billing.</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Our Solution:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Inventory Management:</strong> Real-time parts tracking & automated reorders</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Quote & Estimate Generation:</strong> Faster approvals with templates & e-sign</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Automated Invoicing & Payments:</strong> E-invoices, reminders & multiple payment options</span>
                      </li>
                      <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Comprehensive Reporting:</strong> KPIs like profitability & utilization rates</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Result:</h4>
                    <p className="text-gray-300">Save hours weekly & gain up to 300% ROI in year one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Transform Service Delivery into a Competitive Advantage</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
            Fielduo equips your business to schedule intelligently, empower your field workforce, delight your customers, and optimize every operational process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
            Get detailed answers about our core platform capabilities
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-850 transition duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-blue-400' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 text-gray-400 bg-gray-900 bg-opacity-50">
                    <p>
                      Our platform provides comprehensive solutions to address each of these concerns. For detailed information about {faq.toLowerCase()}, please contact our support team or refer to our documentation.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Final CTA Section */}
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Get Started Today</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
            Join thousands of field service businesses transforming their operations with Fielduo.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30" data-aos="fade-up" data-aos-delay="200">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}