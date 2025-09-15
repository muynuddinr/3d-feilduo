// pages/scheduling-dispatching.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function SchedulingDispatching() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    productivity: 0,
    satisfaction: 0,
    costs: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
              if (newCounters.productivity < 30) newCounters.productivity += 2;
              if (newCounters.satisfaction < 85) newCounters.satisfaction += 5;
              if (newCounters.costs < 25) newCounters.costs += 2;
              
              if (
                newCounters.productivity >= 30 &&
                newCounters.satisfaction >= 85 &&
                newCounters.costs >= 25
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
      question: "What's the difference between scheduling and dispatching?",
      answer: "Scheduling involves planning and assigning jobs to technicians in advance based on availability, skills, and location. Dispatching is the real-time coordination and communication of those assignments, including managing changes, emergencies, and providing support during the workday. Fielduo integrates both processes seamlessly for optimal workforce management."
    },
    {
      question: "How does AI-powered optimization work?",
      answer: "Our AI algorithms analyze multiple variables including technician skills, certifications, location, traffic patterns, job duration estimates, and customer preferences. The system continuously learns from historical data to improve scheduling accuracy, reduce travel time, and increase first-time fix rates. It can process thousands of variables in seconds to create optimal schedules that would be impossible to calculate manually."
    },
    {
      question: "Can the system handle emergency scheduling?",
      answer: "Yes, our emergency scheduling feature allows dispatchers to flag high-priority jobs for immediate insertion into schedules. The AI automatically reoptimizes the remaining assignments to minimize disruption while ensuring the emergency gets prompt attention. The system also notifies affected technicians and customers about any changes."
    },
    {
      question: "How does GPS tracking benefit dispatching?",
      answer: "GPS tracking provides real-time visibility into technician locations, enabling dispatchers to make informed decisions about job assignments and routing. It allows for accurate ETAs to be communicated to customers, helps identify the closest technician for emergency calls, and provides data for analyzing travel patterns and optimizing future schedules."
    },
    {
      question: "What happens when technicians are offline or have connectivity issues?",
      answer: "Our mobile app is designed to work offline, storing all necessary data locally. Technicians can access job details, update statuses, and capture information without an internet connection. Once connectivity is restored, the app automatically syncs all data with the central system, ensuring no information is lost and dispatchers have up-to-date information."
    },
    {
      question: "How does skills-based assignment work?",
      answer: "Skills-based assignment matches technicians to jobs based on their specific qualifications, certifications, experience levels, and performance history. The system maintains a comprehensive profile for each technician and uses this data to ensure the right person is assigned to each job, increasing first-time fix rates and customer satisfaction."
    },
    {
      question: "Can supervisors make real-time adjustments in the field?",
      answer: "Absolutely. Our platform provides supervisors with mobile access to scheduling tools, allowing them to make real-time adjustments from anywhere. They can reassign jobs, adjust schedules, and communicate with technicians directly through the app, ensuring flexibility and responsiveness to changing field conditions."
    }
  ];

  const schedulingFeatures = [
    {
      title: "Drag-and-Drop Interface",
      description: "The visual calendar makes manual adjustments simple—drag jobs to new slots or swap technicians in seconds.",
      icon: "🖱️"
    },
    {
      title: "AI-Powered Optimization",
      description: "Algorithms consider skills, certifications, location, and traffic to assign jobs automatically for peak efficiency.",
      icon: "🤖"
    },
    {
      title: "Real-Time Scheduling",
      description: "Instantly reprioritize or reroute technicians in response to emergency calls or cancellations.",
      icon: "⏱️"
    },
    {
      title: "Skills-Based Assignment",
      description: "Match technicians to tasks based on expertise levels and specialized certifications.",
      icon: "🎯"
    },
    {
      title: "Geographic Optimization",
      description: "Cluster appointments to reduce travel miles and improve on-time arrival rates.",
      icon: "🗺️"
    },
    {
      title: "Capacity Planning",
      description: "Balance daily workloads to prevent overbooking and technician burnout.",
      icon: "⚖️"
    }
  ];

  const dispatchingCapabilities = [
    {
      title: "Real-Time Communication",
      description: "Push job updates and instructions to technicians' mobile apps, ensuring clarity and accountability.",
      icon: "💬"
    },
    {
      title: "GPS Tracking",
      description: "Monitor live technician locations and provide customers with accurate arrival ETAs.",
      icon: "📍"
    },
    {
      title: "Emergency Scheduling",
      description: "Flag high-priority jobs for immediate insertion into schedules.",
      icon: "🚨"
    },
    {
      title: "Resource Management",
      description: "Track parts and equipment availability in real time to avoid on-site delays.",
      icon: "🔧"
    }
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description: "Boost technician utilization by up to 30% through smarter job assignments.",
      icon: "📈",
      stat: "30%"
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Reduce wait times and provide reliable arrival windows.",
      icon: "😊",
      stat: "85%"
    },
    {
      title: "Reduced Operating Costs",
      description: "Cut fuel and mileage expenses with optimized routing.",
      icon: "💰",
      stat: "25%"
    },
    {
      title: "Enhanced Flexibility",
      description: "Adapt instantly to changing field conditions and urgent requests.",
      icon: "🔄",
      stat: "100%"
    }
  ];

  return (
    <>
      <Head>
        <title>Scheduling & Dispatching | Fielduo</title>
        <meta name="description" content="Transform workforce management with advanced scheduling algorithms and dynamic dispatch tools" />
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
          
          {/* Calendar Mockup */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-64 h-64 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-xs text-gray-400">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className={`h-6 rounded ${i === 15 ? 'bg-blue-500' : i === 16 ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Workforce Management</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Scheduling & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dispatching</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform workforce management with advanced scheduling algorithms and dynamic dispatch tools, ensuring the right technician arrives at the right time
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Explore Features
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  View Benefits
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Overview</h2>
              <p className="text-lg text-gray-300 mb-12 text-center">
                Efficient scheduling and dispatching are the backbone of great field service. Fielduo's solution marries intuitive interfaces with AI-driven optimization to cut travel time, maximize technician utilization, and seamlessly adapt to day-of changes.
              </p>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-800 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 mb-6">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Intelligent Scheduling</h3>
                      <p className="text-gray-300">
                        Our AI-powered scheduling engine analyzes multiple variables to create optimal assignments that maximize efficiency and customer satisfaction.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-purple-400">Dynamic Dispatching</h3>
                      <p className="text-gray-300">
                        Real-time communication and tracking capabilities ensure seamless coordination between office staff and field technicians.
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-4 border-gray-700 p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm font-bold">Schedule</div>
                          <div className="text-xs text-gray-400">Today</div>
                        </div>
                        
                        <div className="space-y-3">
                          {[
                            { time: "9:00 AM", job: "HVAC Repair", tech: "John D.", status: "completed" },
                            { time: "11:30 AM", job: "Installation", tech: "Sarah M.", status: "in-progress" },
                            { time: "2:00 PM", job: "Maintenance", tech: "Mike R.", status: "scheduled" },
                            { time: "4:30 PM", job: "Inspection", tech: "Lisa K.", status: "scheduled" }
                          ].map((item, index) => (
                            <div key={index} className="p-3 bg-gray-700/50 rounded-lg">
                              <div className="flex justify-between items-center mb-1">
                                <div className="text-sm font-medium">{item.time}</div>
                                <div className={`text-xs px-2 py-1 rounded-full ${
                                  item.status === 'completed' ? 'bg-green-900/50 text-green-400' :
                                  item.status === 'in-progress' ? 'bg-blue-900/50 text-blue-400' :
                                  'bg-gray-700 text-gray-400'
                                }`}>
                                  {item.status}
                                </div>
                              </div>
                              <div className="text-sm">{item.job}</div>
                              <div className="text-xs text-gray-400">{item.tech}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Scheduling Features Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Scheduling Features</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Powerful tools designed to optimize your workforce and maximize efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {schedulingFeatures.map((feature, index) => (
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

        {/* Dispatching Capabilities Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dispatching Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Real-time tools to coordinate field operations and respond to changing conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {dispatchingCapabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6">{capability.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{capability.title}</h3>
                  <p className="text-gray-400">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Measurable improvements that impact your bottom line
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-5xl mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{benefit.title}</h3>
                  <p className="text-gray-400 mb-6">{benefit.description}</p>
                  <div className="text-3xl font-bold text-blue-400">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Scheduling & Dispatching — FAQs</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get answers to common questions about our scheduling and dispatching capabilities
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Field Operations?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join thousands of businesses already transforming their workforce management
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Get Started Today
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