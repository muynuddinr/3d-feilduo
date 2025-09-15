
// pages/mobile-app-features.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MobileAppFeatures() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [syncStatus, setSyncStatus] = useState('offline');

  useEffect(() => {
    // Simulate sync status changes
    const interval = setInterval(() => {
      setSyncStatus(prev => prev === 'offline' ? 'syncing' : 'offline');
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which platforms does the mobile app support?",
      answer: "Fielduo's mobile app is available for both iOS and Android platforms. We provide native applications optimized for each platform, ensuring the best performance and user experience on all modern smartphones and tablets."
    },
    {
      question: "What compliance features are built in?",
      answer: "Our app includes comprehensive compliance features such as digital checklists, automated data validation, electronic signatures, audit trails, and customizable forms to meet industry-specific regulations. All data is securely stored with timestamped records for legal compliance."
    },
    {
      question: "How is inventory managed on the app?",
      answer: "The mobile app provides real-time inventory management with barcode scanning, parts usage tracking, automated replenishment requests, and availability alerts. Technicians can view current stock levels, reserve parts for jobs, and update inventory counts directly from the field."
    },
    {
      question: "Does the app include GPS navigation?",
      answer: "Yes, Fielduo's mobile app includes integrated GPS navigation with AI-optimized routes, live traffic updates, and turn-by-turn directions. The routing system considers job priorities, technician skills, and traffic conditions to minimize travel time and maximize productivity."
    }
  ];

  const features = [
    {
      title: "Complete Job Information",
      description: "Access customer profiles, service history, equipment specifications, and detailed service instructions directly from the mobile app.",
      icon: "📋"
    },
    {
      title: "Digital Forms & Compliance",
      description: "Customizable digital checklists with automated data validation and compliance tracking for all regulatory requirements.",
      icon: "📝"
    },
    {
      title: "Photo & Video Capture",
      description: "Document job conditions, before/after results, and parts used with images/videos attached to work orders.",
      icon: "📷"
    },
    {
      title: "Inventory Management",
      description: "Real-time parts usage tracking, on-demand replenishment, and parts availability alerts.",
      icon: "📦"
    },
    {
      title: "GPS Navigation & Routing",
      description: "Integrated mapping with AI-optimized routes and live traffic updates.",
      icon: "🗺️"
    },
    {
      title: "Team Collaboration",
      description: "Instantly share updates, photos, and notes with dispatchers and office staff.",
      icon: "👥"
    }
  ];

  const whyChoose = [
    {
      title: "Offline Ready",
      description: "Work anywhere, sync everywhere",
      icon: "🌐"
    },
    {
      title: "Lightning Fast",
      description: "Optimized for field performance",
      icon: "⚡"
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security",
      icon: "🔒"
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface design",
      icon: "👍"
    }
  ];

  return (
    <>
      <Head>
        <title>Mobile App Features | Fielduo</title>
        <meta name="description" content="Discover Fielduo's powerful mobile app features for field technicians" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
                style={{
                  width: `${Math.random() * 100 + 20}px`,
                  height: `${Math.random() * 100 + 20}px`,
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
                <span className="text-blue-400 font-medium">Field Technician Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mobile App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Empower your field technicians with a mobile app designed for excellence—whether online or offline. Fielduo's native iOS and Android applications put everything needed for first-time fixes in the palm of their hands.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Offline-First Design Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">Seamless Offline-First Design</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Technicians never miss a beat, even in remote locations without connectivity. Data syncs automatically once online.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Works completely offline", icon: "📵" },
                      { title: "Auto-sync when connected", icon: "🔄" },
                      { title: "Local data cached", icon: "💾" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                        <div className="text-2xl mr-4">{item.icon}</div>
                        <div className="font-medium">{item.title}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700 flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      syncStatus === 'offline' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <div className="font-medium">Mobile Sync Status</div>
                      <div className="text-sm text-gray-400">
                        {syncStatus === 'offline' ? 'Offline mode active' : 'Ready to sync when online'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] border-8 border-gray-800 shadow-xl overflow-hidden relative">
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
                      
                      <div className="pt-16 px-6">
                        <div className="text-center mb-6">
                          <div className="text-2xl font-bold mb-2">Fielduo</div>
                          <div className="text-sm text-gray-400">Technician Dashboard</div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-700/50 rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">Today's Jobs</div>
                              <div className="text-sm text-blue-400">3 of 5</div>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-gray-700/50 rounded-xl">
                            <div className="flex items-center mb-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              <div className="font-medium">Next Job</div>
                            </div>
                            <div className="text-sm text-gray-400">Commercial HVAC Repair</div>
                            <div className="text-xs text-gray-500">2:00 PM - Downtown</div>
                          </div>
                          
                          <div className="p-4 bg-gray-700/50 rounded-xl">
                            <div className="flex items-center mb-2">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                              <div className="font-medium">Sync Status</div>
                            </div>
                            <div className="text-sm text-gray-400">
                              {syncStatus === 'offline' ? 'Offline - Data stored locally' : 'Syncing with server...'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Mobile Capabilities Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Mobile Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything technicians need to excel in the field, all in one powerful application
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
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Signature Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">Digital Signature</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Capture customer sign-off securely for completed jobs, safety disclaimers, and change orders. Eliminate paperwork and ensure legal compliance with tamper-proof digital signatures.
                  </p>
                  
                  <div className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 mb-8">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">🔒</div>
                      <div className="font-bold text-lg">Secure & legally compliant</div>
                    </div>
                    <p className="text-gray-300">
                      All digital signatures are encrypted and timestamped, providing a legally binding record of customer approval that meets industry compliance standards.
                    </p>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium">Customer signature area</div>
                      <div className="text-sm text-gray-400">Electronic Signatures</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] border-8 border-gray-800 shadow-xl overflow-hidden relative">
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
                      
                      <div className="pt-16 px-6">
                        <div className="text-center mb-6">
                          <div className="text-lg font-bold mb-2">Job Completion</div>
                          <div className="text-sm text-gray-400">Commercial HVAC Repair</div>
                        </div>
                        
                        <div className="space-y-4 mb-8">
                          <div className="p-3 bg-gray-700/50 rounded-lg">
                            <div className="text-sm text-gray-400 mb-1">Customer</div>
                            <div className="font-medium">Sarah Johnson</div>
                          </div>
                          
                          <div className="p-3 bg-gray-700/50 rounded-lg">
                            <div className="text-sm text-gray-400 mb-1">Technician</div>
                            <div className="font-medium">Michael Chen</div>
                          </div>
                          
                          <div className="p-3 bg-gray-700/50 rounded-lg">
                            <div className="text-sm text-gray-400 mb-1">Date</div>
                            <div className="font-medium">Oct 15, 2023</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="text-sm text-gray-400 mb-2">Customer Signature</div>
                          <div className="h-24 bg-gray-700/30 rounded-lg border border-dashed border-gray-600 flex items-center justify-center">
                            <div className="text-gray-500">Sign here</div>
                          </div>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg">
                          Complete Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Get the Fielduo Mobile App</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Download our native mobile application and start empowering your field technicians today
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="relative">
                <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] border-8 border-gray-800 shadow-xl overflow-hidden relative">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
                  
                  <div className="pt-16 px-6">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold mb-2">Fielduo</div>
                      <div className="text-sm text-gray-400">Field Service Excellence</div>
                    </div>
                    
                    <div className="flex justify-center mb-8">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                        <div className="text-5xl">📱</div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-8">
                      <div className="text-lg font-bold mb-2">Download Now</div>
                      <div className="text-sm text-gray-400">Available on iOS and Android</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <button className="flex items-center bg-black border border-gray-700 rounded-xl p-4 hover:bg-gray-900 transition duration-300 w-64">
                  <div className="text-3xl mr-4">🍎</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </button>
                
                <button className="flex items-center bg-black border border-gray-700 rounded-xl p-4 hover:bg-gray-900 transition duration-300 w-64">
                  <div className="text-3xl mr-4">🤖</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-lg font-bold">Play Store</div>
                  </div>
                </button>
                
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
                  <div className="font-bold mb-2">Scan to Download</div>
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-black text-xs">QR Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Mobile App Features — FAQs</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get answers to common questions about our mobile application
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

        {/* Why Choose Fielduo Mobile Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Fielduo Mobile?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Built specifically for field service excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {whyChoose.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Field Operations?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join thousands of field service professionals who trust Fielduo to deliver exceptional customer experiences every day.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Get Started
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