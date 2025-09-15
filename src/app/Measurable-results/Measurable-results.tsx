// pages/measurable-results.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MeasurableResults() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What performance metrics can I track with Fielduo?",
      answer: "Fielduo provides comprehensive tracking of key performance indicators including first-time fix rates, technician utilization, travel time vs. work time, customer satisfaction scores, inventory turnover, revenue per job, and ROI. Our customizable dashboards allow you to monitor these metrics in real-time and set benchmarks for continuous improvement."
    },
    {
      question: "How are performance improvements measured and reported?",
      answer: "Fielduo automatically tracks all operational data and generates detailed reports showing before-and-after comparisons. We provide weekly, monthly, and quarterly performance reviews with actionable insights. Our analytics engine identifies trends, anomalies, and opportunities for further optimization."
    },
    {
      question: "Can you share specific client success stories?",
      answer: "Absolutely. We have numerous case studies across industries. For example, a national HVAC company reduced travel costs by 32% and increased daily jobs by 51% within six months. A plumbing services provider achieved a 92% first-time fix rate and reduced parts inventory costs by 28% in their first year."
    }
  ];

  const metrics = [
    {
      title: "ROI (Year One)",
      value: "300%+",
      icon: "📈",
      color: "from-green-500 to-teal-500",
      description: "Average return on investment within the first year of implementation"
    },
    {
      title: "Daily Job Completion",
      value: "+47%",
      icon: "✅",
      color: "from-blue-500 to-indigo-500",
      description: "Increase in number of jobs completed per technician per day"
    },
    {
      title: "Fuel & Travel Costs",
      value: "-30%",
      icon: "⛽",
      color: "from-yellow-500 to-orange-500",
      description: "Reduction in fuel expenses and travel-related operational costs"
    },
    {
      title: "First-Time Fix Rate",
      value: "88%",
      icon: "🔧",
      color: "from-purple-500 to-pink-500",
      description: "Percentage of jobs resolved on the first technician visit"
    },
    {
      title: "Technician Productivity",
      value: "+40%",
      icon: "👷",
      color: "from-red-500 to-orange-500",
      description: "Increase in productive billable hours per technician"
    },
    {
      title: "Customer Satisfaction",
      value: "Significant ↑",
      icon: "😊",
      color: "from-cyan-500 to-blue-500",
      description: "Measurable improvement in customer satisfaction scores"
    }
  ];

  const results = [
    {
      title: "47% More Jobs Per Day",
      description: "Intelligent technician matching and real-time route optimization dramatically increases daily throughput and operational efficiency.",
      icon: "📊",
      stat: "47%",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "30% Reduction in Travel Costs",
      description: "Advanced routing algorithms and live traffic analysis minimize fuel consumption and vehicle wear while maximizing billable work hours.",
      icon: "🛣️",
      stat: "-30%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "88% First-Time Fix Rate",
      description: "Complete job history and customer details accessible on mobile devices enable technicians to resolve issues correctly on the first visit.",
      icon: "✅",
      stat: "88%",
      color: "from-green-500 to-teal-500"
    }
  ];

  const testimonial = {
    quote: "Within six months of implementing Fielduo, we achieved a 25% reduction in overtime costs and saw our customer satisfaction scores improve by 20 points. The transformation has been remarkable.",
    author: "Sarah Patel",
    role: "COO, Acme Plumbing Solutions",
    initials: "SP"
  };

  return (
    <>
      <Head>
        <title>Measurable Results | Fielduo</title>
        <meta name="description" content="Discover the measurable results and ROI achieved with Fielduo's field service platform" />
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
          
          {/* Animated Graph Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-full h-1/2">
              <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="w-full h-full">
                <path 
                  d="M0,600 C200,450 400,300 600,350 C800,400 1000,250 1200,400 L1200,600 Z" 
                  fill="url(#gradient)" 
                  transform={`translateY(${scrollPosition * 0.1}px)`}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Proven Business Impact</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Results</span> with Fielduo
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your field operations—enhance team performance, cut operational costs, and exceed customer expectations through data-driven optimization.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Get Your ROI Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Performance Impact Overview */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Impact Overview</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Real metrics from real clients achieving extraordinary results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                    hoveredMetric === index ? 'border-blue-500 shadow-xl shadow-blue-500/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredMetric(index)}
                  onMouseLeave={() => setHoveredMetric(null)}
                >
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                  <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <p className="text-gray-400">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Results Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Results Achieved</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                How Fielduo delivers measurable improvements across critical business metrics
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {results.map((result, index) => (
                <div key={index} className="mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                      <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{result.icon}</div>
                        <h3 className="text-2xl font-bold">{result.title}</h3>
                      </div>
                      <p className="text-lg text-gray-300 mb-6">{result.description}</p>
                      <div className="flex items-center">
                        <div className={`text-6xl font-bold mr-4 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                          {result.stat}
                        </div>
                        <div className="text-gray-400">Average improvement</div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative w-64 h-64">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 rounded-full border-8 border-gray-700"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-40 h-40 rounded-full border-8 border-${result.color.split('-')[1]}-500`}></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-4xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                            {result.stat}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-800 p-8 md:p-12">
                <div className="flex items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{testimonial.author}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="text-2xl text-gray-300 mb-8 italic">
                  "{testimonial.quote}"
                </div>
                
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-yellow-400 text-2xl">★</div>
                    ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Results — Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get answers to common questions about measuring and tracking performance improvements
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join successful companies already achieving measurable improvements with Fielduo
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Request Your ROI Forecast
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