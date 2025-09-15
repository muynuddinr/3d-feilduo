'use client';
import React, { useState, useEffect } from 'react';
import Hari from '../../../public/Hari.jpeg';
import Kiruthiga from '../../../public/Kiruthiga.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutFielduo = () => {
  const [activeTeamTab, setActiveTeamTab] = useState('leadership');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <section className={`py-24 px-4 bg-gradient-to-b from-gray-900 to-black transition-all duration-700 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-down"
          >
            About Fielduo
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Revolutionizing field service management with innovative technology
          </p>
          <div 
            className="mt-10 animate-bounce"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Who We Are Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div data-aos="fade-right">
                <div className="inline-block mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-900 text-blue-200 rounded-full">WHO WE ARE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Empowering Field Service Excellence</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Fielduo, we empower businesses with seamless field-service management and real-time operational insights. Founded in 2025 in USA by Hari (CEO) and Kiruthiga (CTO), our startup brings together passionate technologists and industry experts dedicated to transforming field operations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-right" data-aos-delay="100">
                <button className="group flex items-center justify-between px-6 py-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm hover:bg-gray-800 rounded-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-blue-400 group-hover:text-blue-300 font-medium">Field Service Excellence</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 text-blue-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button className="group flex items-center justify-between px-6 py-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm hover:bg-gray-800 rounded-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-blue-400 group-hover:text-blue-300 font-medium">Innovation Journey</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 text-blue-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 h-full">
                <div className="flex items-center mb-6">
                  <div className="h-0.5 w-10 bg-blue-500 mr-4"></div>
                  <h3 className="text-2xl font-bold text-blue-400">Our Story</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Hari and Kiruthiga launched Fielduo after witnessing firsthand the struggles of manual reporting, fragmented schedules, and delayed data in field teams. Driven by a shared vision of effortless digital workflows, they developed a mobile-first prototype that quickly gained traction among local service providers.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we continue to iterate and grow, guided by customer feedback and a commitment to simplicity.
                </p>
                
                <div className="flex items-center mt-8 pt-6 border-t border-gray-800">
                  <div className="flex -space-x-3 mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">H</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">K</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Founded by</p>
                    <p className="font-medium">Hari & Kiruthiga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Sets Us Apart Section */}
      <section className="py-20 px-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-down">
              <span className="text-xs font-semibold px-3 py-1 bg-blue-900 text-blue-200 rounded-full">OUR DIFFERENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down" data-aos-delay="100">What Sets Us Apart</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">
              Discover the unique advantages that make Fielduo the preferred choice for field service management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-4xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4">User-Centric Design</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Every feature is crafted for field technicians—minimizing taps, supporting offline use, and delivering clear task guidance.
              </p>
              <button className="group flex items-center text-blue-400 hover:text-blue-300 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Feature 2 */}
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4">Actionable Analytics</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Real-time dashboards highlight job progress, resource utilization, and customer satisfaction, empowering managers to make data-driven decisions instantly.
              </p>
              <button className="group flex items-center text-blue-400 hover:text-blue-300 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Feature 3 */}
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-4xl mb-6">🔗</div>
              <h3 className="text-2xl font-bold mb-4">Easy Integration</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our lightweight API and pre-built connectors to popular ERP and CRM platforms mean rapid deployment with minimal IT overhead.
              </p>
              <button className="group flex items-center text-blue-400 hover:text-blue-300 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Feature 4 */}
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-4xl mb-6">🔐</div>
              <h3 className="text-2xl font-bold mb-4">Scalable & Secure</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Built on a modern cloud-native stack, fielduo scales with your team. Role-based access controls and ISO-aligned security practices protect your data from end to end.
              </p>
              <button className="group flex items-center text-blue-400 hover:text-blue-300 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Feature 5 */}
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 md:col-span-2 lg:col-span-1 lg:mx-auto" data-aos="zoom-in" data-aos-delay="500">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We work hand in hand with every client. From personalized onboarding sessions to ongoing check-ins, our small but dedicated customer success team ensures you get the most value from fielduo.
              </p>
              <button className="group flex items-center text-blue-400 hover:text-blue-300 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-down">
              <span className="text-xs font-semibold px-3 py-1 bg-blue-900 text-blue-200 rounded-full">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down" data-aos-delay="100">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">
              Passionate individuals dedicated to transforming field service management
            </p>
          </div>
          
          {/* Team Tabs */}
          <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-full p-1 border border-gray-800 inline-flex">
              <button 
                className={`px-6 py-3 text-lg font-medium rounded-full transition-all ${activeTeamTab === 'leadership' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTeamTab('leadership')}
              >
                Leadership Team
              </button>
              <button 
                className={`px-6 py-3 text-lg font-medium rounded-full transition-all ${activeTeamTab === 'extended' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTeamTab('extended')}
              >
                Extended Team
              </button>
            </div>
          </div>
          
          {/* Team Content */}
          {activeTeamTab === 'leadership' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hari */}
              <div className="group bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-blue-500 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-right" data-aos-delay="400">
                <div className="relative w-32 h-32 rounded-full mx-auto mb-8 group-hover:scale-105 transition-transform overflow-hidden">
                  <img 
                    src={Hari.src}
                    alt="Hari - CEO & Co-founder" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-3xl font-bold mb-2">Hari</h3>
                <p className="text-blue-400 mb-6 text-lg">CEO & Co-founder</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Brings 12 years of product leadership and a passion for operational excellence.
                </p>
                <button className="group flex items-center justify-center text-blue-400 hover:text-blue-300 font-medium mx-auto">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Kiruthiga */}
              <div className="group bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-blue-500 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="500">
                <div className="relative w-32 h-32 rounded-full mx-auto mb-8 group-hover:scale-105 transition-transform overflow-hidden">
                  <img 
                    src={Kiruthiga.src}
                    alt="Kiruthiga - CTO & Co-founder" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-3xl font-bold mb-2">Kiruthiga</h3>
                <p className="text-blue-400 mb-6 text-lg">CTO & Co-founder</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  A seasoned software architect with deep expertise in mobile and cloud technologies.
                </p>
                <button className="group flex items-center justify-center text-blue-400 hover:text-blue-300 font-medium mx-auto">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          
          {activeTeamTab === 'extended' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Engineering & Design */}
              <div className="group bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-right" data-aos-delay="400">
                <div className="text-5xl mb-6">👨‍💻</div>
                <h3 className="text-2xl font-bold mb-4">Engineering & Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Five full-stack developers and UX designers focused on building intuitive, reliable solutions.
                </p>
              </div>
              
              {/* Customer Success */}
              <div className="group bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left" data-aos-delay="500">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold mb-4">Customer Success</h3>
                <p className="text-gray-300 leading-relaxed">
                  Two specialists committed to guiding your team from day one.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="group bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-right">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To revolutionise field-service operations worldwide by delivering an intuitive, data-driven platform that empowers organisations to achieve peak efficiency, exceptional customer satisfaction, and sustainable growth.
              </p>
            </div>
            
            {/* Mission */}
            <div className="group bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Fielduo exists to simplify and enhance every aspect of field-service management. We will:
              </p>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Develop a user-first mobile and web platform that streamlines job scheduling, reporting, and communication</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Harness AI-powered analytics to deliver real-time insights and predictive maintenance alerts</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Ensure seamless integration with existing business systems through open APIs and pre-built connectors</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Provide unrivalled customer support and continuous innovation to help our clients adapt and excel</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Uphold the highest standards of security, reliability, and privacy in all our solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 text-center bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" data-aos="fade-up">Ready to Transform Your Field Operations?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Join the growing number of businesses that trust Fielduo for their field service management needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center justify-center">
              Contact Sales
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFielduo;