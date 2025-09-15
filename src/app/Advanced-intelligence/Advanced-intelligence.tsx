// pages/advanced-intelligence.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AdvancedIntelligence() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What predictive analytics capabilities are offered?",
      answer: "Fielduo's predictive analytics include demand forecasting, equipment failure prediction, technician performance analysis, and customer behavior modeling. Our AI algorithms analyze historical data patterns to predict future needs with up to 95% accuracy, enabling proactive resource allocation and service planning."
    },
    {
      question: "How does preventive maintenance work?",
      answer: "Our preventive maintenance system continuously monitors equipment performance data and service histories. It identifies subtle patterns and anomalies that precede failures, then automatically generates maintenance alerts and work orders. This approach reduces unplanned downtime by up to 65% and extends equipment lifespan."
    },
    {
      question: "Can I integrate IoT devices?",
      answer: "Absolutely. Fielduo supports integration with thousands of IoT devices and sensors through our open API framework. We provide pre-built connectors for major manufacturers and a flexible SDK for custom integrations. Once connected, sensor data flows directly into our analytics engine for real-time monitoring and automated responses."
    },
    {
      question: "How is customer sentiment analyzed?",
      answer: "Our sentiment analysis uses natural language processing to evaluate customer feedback from multiple channels—surveys, call transcripts, emails, and social media. The system identifies emotional tone, key themes, and emerging issues, then generates actionable insights and alerts for service teams to address concerns proactively."
    }
  ];
  
  const aiFeatures = [
    {
      title: "Predictive Scheduling",
      icon: "📊",
      description: "Leverage historical job data, technician performance, and seasonal trends to forecast demand. Our AI automatically allocates the right technician at the right time—minimizing idle time and maximizing billable hours.",
      stat: "47% more jobs completed"
    },
    {
      title: "Smart Route Planning",
      icon: "🗺️",
      description: "Go beyond basic GPS with dynamic route optimization. Real-time traffic, weather, and job priority feeds adjust routes on the fly, slashing travel time and fuel costs by up to 30%.",
      stat: "30% travel time reduction"
    },
    {
      title: "Preventive Maintenance Alerts",
      icon: "🔧",
      description: "Identify early warning signs of equipment failure by applying anomaly detection to service histories and performance metrics. Receive automated alerts so you can schedule maintenance before costly breakdowns occur.",
      stat: "65% fewer breakdowns"
    },
    {
      title: "Customer Sentiment Analysis",
      icon: "💬",
      description: "Mine customer feedback—surveys, call notes, and social reviews—to gauge satisfaction. Natural language processing highlights pain points and emerging service issues, enabling you to address concerns before they escalate into churn.",
      stat: "40% improved satisfaction"
    },
    {
      title: "Demand Forecasting",
      icon: "📈",
      description: "Predict service volumes and resource needs weeks or months in advance. Use these insights for smarter staffing, parts stocking, and budget planning, ensuring you're never caught off guard by spikes in service requests.",
      stat: "90% accuracy rate"
    }
  ];
  
  const iotFeatures = [
    {
      title: "Real-Time Equipment Monitoring",
      icon: "📡",
      description: "Stream sensor data—temperature, pressure, runtime hours—directly into Fielduo. Monitor asset health continuously and visualize trends with built-in dashboards.",
      stat: "24/7 monitoring"
    },
    {
      title: "Automatic Work Order Generation",
      icon: "📝",
      description: "Link IoT alerts to your work order engine. When a sensor breach or anomaly is detected, Fielduo auto-creates a service request, complete with customer info, location, and fault description.",
      stat: "80% faster response"
    },
    {
      title: "Remote Diagnostics",
      icon: "🔍",
      description: "Technicians or support staff can access live device telemetry to troubleshoot issues before dispatching. Reduce unnecessary site visits and accelerate resolution times.",
      stat: "50% fewer visits"
    },
    {
      title: "Performance Analytics",
      icon: "📉",
      description: "Drive data-backed decisions with comprehensive reports on equipment utilization, failure rates, and maintenance costs. Identify top-performing assets and under-serviced locations to optimize your service portfolio.",
      stat: "Data-driven decisions"
    },
    {
      title: "New Revenue Streams",
      icon: "💰",
      description: "Monetize continuous monitoring by offering premium maintenance contracts and alert-based service packages. Differentiate your business with value-added IoT services that cement customer loyalty.",
      stat: "35% revenue growth"
    }
  ];
  
  const finalFeatures = [
    {
      title: "AI-Driven Insights",
      subtitle: "Smart predictions and recommendations",
      icon: "🧠",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Real-Time Monitoring",
      subtitle: "Continuous equipment oversight",
      icon: "📊",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Automated Workflows",
      subtitle: "Streamlined service processes",
      icon: "⚙️",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Revenue Growth",
      subtitle: "New service opportunities",
      icon: "📈",
      color: "from-red-500 to-pink-500"
    }
  ];
  
  const testimonials = [
    {
      quote: "Fielduo's predictive analytics transformed our operations. We've reduced unplanned downtime by 60% and increased technician productivity by 45%.",
      author: "Sarah Johnson",
      role: "Operations Director, TechServe Inc."
    },
    {
      quote: "The IoT integration capabilities are game-changing. We can now monitor equipment remotely and address issues before they become critical.",
      author: "Michael Chen",
      role: "CTO, Global Maintenance Co."
    },
    {
      quote: "Customer satisfaction has soared since implementing Fielduo's sentiment analysis. We're now proactive rather than reactive to customer needs.",
      author: "Emily Rodriguez",
      role: "Service Manager, FieldTech Solutions"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Advanced Intelligence | Fielduo</title>
        <meta name="description" content="Discover Fielduo's AI-driven insights and IoT integration for proactive field service" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        {/* Hero Section with Dynamic Background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black z-0"></div>
          
          {/* Dynamic Canvas Background */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{ background: 'radial-gradient(circle at center, #1e3a8a 0%, #000 70%)' }}
          />
          
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
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
          
          {/* Mouse Follower */}
          <div 
            className="fixed pointer-events-none z-50 transition-opacity duration-300"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              opacity: 0.5
            }}
          />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div 
                className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <span className="text-blue-400 font-medium">Next-Generation Field Service Intelligence</span>
              </div>
              <h1 
                className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence</span>
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                Elevate your field service operations with AI-driven insights and IoT integration
              </p>
              <p 
                className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                Transform from reactive to proactive service delivery with predictive analytics, real-time monitoring, and automated workflows
              </p>
              <div 
                className="flex flex-col sm:flex-row justify-center gap-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Get Started Today
                </button>
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="py-16 bg-gradient-to-b from-gray-900 to-black relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: "95%", label: "Prediction Accuracy", icon: "🎯" },
                { value: "65%", label: "Downtime Reduction", icon: "⏱️" },
                { value: "47%", label: "Productivity Increase", icon: "📈" },
                { value: "35%", label: "Revenue Growth", icon: "💰" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group transform transition-all duration-500 hover:-translate-y-2"
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tabbed Content Section */}
        <div className="py-20 bg-black relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Intelligence Capabilities
              </h2>
              <p 
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Explore our advanced AI and IoT features designed to revolutionize field service
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div 
              className="flex justify-center mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-full p-1 flex">
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'ai' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('ai')}
                >
                  AI-Powered Intelligence
                </button>
                <button
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${activeTab === 'iot' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('iot')}
                >
                  IoT Integration
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {activeTab === 'ai' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {aiFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                        hoveredFeature === index ? 'border-blue-500 shadow-xl shadow-blue-500/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      data-aos="fade-up"
                      data-aos-delay={300 + index * 100}
                    >
                      <div className="text-5xl mb-6">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                      <p className="text-gray-400 mb-6">{feature.description}</p>
                      <div className="bg-blue-900/20 rounded-lg p-3 text-center">
                        <div className="text-sm text-blue-300 font-medium">{feature.stat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'iot' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {iotFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                        hoveredFeature === index ? 'border-blue-500 shadow-xl shadow-blue-500/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      data-aos="fade-up"
                      data-aos-delay={300 + index * 100}
                    >
                      <div className="text-5xl mb-6">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                      <p className="text-gray-400 mb-6">{feature.description}</p>
                      <div className="bg-green-900/20 rounded-lg p-3 text-center">
                        <div className="text-sm text-green-300 font-medium">{feature.stat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Success Stories
              </h2>
              <p 
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                See how businesses are transforming with Fielduo's Advanced Intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="text-blue-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Interactive Dashboard Preview */}
        <div className="py-20 bg-black relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Live Intelligence Dashboard
              </h2>
              <p 
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Monitor your entire operation in real-time with our intelligent dashboard
              </p>
            </div>
            
            <div 
              className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Active Devices", value: "1,247", change: "+12%", icon: "📱" },
                  { title: "Alerts Today", value: "23", change: "-8%", icon: "⚠️" },
                  { title: "Uptime", value: "99.8%", change: "+0.2%", icon: "📊" }
                ].map((metric, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10"
                    data-aos="zoom-in"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">{metric.icon}</div>
                      <div className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.title}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Real-Time Equipment Status</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "HVAC Unit A-102", status: "Optimal", location: "Building 1", temp: "72°F" },
                    { name: "Generator B-205", status: "Warning", location: "Building 2", temp: "185°F" },
                    { name: "Conveyor C-311", status: "Critical", location: "Warehouse", temp: "92°F" },
                    { name: "Pump D-408", status: "Optimal", location: "Plant 3", temp: "68°F" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition transform hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay={400 + index * 50}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'Optimal' ? 'bg-green-500' : 
                          item.status === 'Warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.status}</div>
                        <div className="text-sm text-gray-400">{item.temp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
            >
              Unlock Predictive Power and Connectivity
            </h2>
            <p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              With Fielduo's Advanced Intelligence, you're not just managing field service—you're anticipating needs, preventing disruptions, and delivering a superior customer experience at every touchpoint.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Start Your Trial
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-20 bg-black relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Advanced Intelligence — FAQs
              </h2>
              <p 
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Get answers to common questions about our AI and IoT capabilities
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
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
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
        <div className="bg-gradient-to-b from-gray-900 to-black py-20 relative z-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
            >
              Transform Your Field Service Operations
            </h2>
            <p 
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-16"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the power of predictive analytics and IoT integration working together
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              {finalFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group transform hover:-translate-y-2"
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                >
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.subtitle}</p>
                </div>
              ))}
            </div>
            
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Get Started Free
            </button>
            <p 
              className="mt-8 text-gray-500"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </p>
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