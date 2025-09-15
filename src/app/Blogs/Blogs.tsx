'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [expandedArticle, setExpandedArticle] = useState(null); // Track expanded article
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'technology', label: 'Technology' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'guide', label: 'Guide' },
    { id: 'customer-service', label: 'Customer Service' }
  ];

  const articles = [
    {
      category: 'technology',
      title: 'How AI is Revolutionizing Field Service Operations',
      date: '9/3/2025',
      readTime: '4 min read',
      excerpt: 'The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, AI is transforming how field services are delivered, scheduled, and optimized.',
      author: 'Fielduo Team',
      image: '🤖',
      content: `The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, AI is transforming how field services are delivered, scheduled, and optimized.
      Artificial Intelligence is no longer a futuristic concept but a practical tool that's reshaping field service operations. Machine learning algorithms can now predict equipment failures before they happen, schedule technicians more efficiently, and provide real-time guidance during complex repairs.
      One of the most significant impacts is in predictive maintenance. By analyzing historical data and current performance metrics, AI systems can identify patterns that precede equipment failures. This allows service companies to address issues before they cause downtime, saving both time and money.
      Another area where AI excels is in optimizing technician schedules. Traditional scheduling methods often result in inefficient routes and wasted time. AI-powered scheduling tools consider factors like traffic, technician skills, and parts availability to create optimal schedules that maximize productivity.
      During service calls, AI can provide technicians with real-time assistance through augmented reality interfaces. These systems can overlay digital information onto physical equipment, guiding technicians through complex repairs step by step.
      As AI technology continues to evolve, we can expect even more sophisticated applications in field service operations. From autonomous drones for inspections to advanced natural language processing for customer interactions, the possibilities are endless.`
    },
    {
      category: 'innovation',
      title: 'The Impact of IoT on Predictive Maintenance in Field Services',
      date: '9/2/2025',
      readTime: '5 min read',
      excerpt: 'In today\'s rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is revolutionizing how field service businesses operate.',
      author: 'Fielduo Team',
      image: '📱',
      content: `In today's rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is revolutionizing how field service businesses operate.
      IoT devices are now embedded in equipment across virtually every industry, from manufacturing to healthcare. These sensors continuously collect data on equipment performance, environmental conditions, and usage patterns. This real-time data stream provides unprecedented visibility into the health of assets.
      The true power of IoT in field services lies in its ability to enable predictive maintenance. By analyzing the data collected from IoT sensors, machine learning algorithms can identify subtle patterns that indicate impending failures. This allows service organizations to intervene before problems occur, minimizing downtime and reducing emergency repair costs.
      One of the key benefits of IoT-enabled predictive maintenance is the shift from calendar-based maintenance to condition-based maintenance. Instead of performing maintenance on a fixed schedule, organizations can service equipment only when needed. This approach reduces unnecessary maintenance activities while preventing unexpected failures.
      IoT technology also enhances the efficiency of field service operations. When a potential issue is detected, the system can automatically create a work order, identify the closest qualified technician, and ensure they have the necessary parts before dispatch. This level of automation significantly reduces response times and improves first-time fix rates.
      As IoT technology continues to advance, we can expect even greater integration with other technologies like augmented reality and artificial intelligence. These combined technologies will create a seamless ecosystem for managing field service operations, from issue detection to resolution.`
    },
    {
      category: 'guide',
      title: 'The Ultimate Guide to Choosing the Right Service Scheduling Software',
      date: '9/1/2025',
      readTime: '6 min read',
      excerpt: 'Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor. This guide helps you choose the right solution.',
      author: 'Fielduo Team',
      image: '📅',
      content: `Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor. This guide helps you choose the right solution.
      Selecting the right service scheduling software is one of the most critical decisions a field service business can make. The right solution can streamline operations, improve customer satisfaction, and boost profitability, while the wrong choice can lead to inefficiency and frustration.
      When evaluating scheduling software, start by identifying your specific needs. Consider factors like the size of your team, the complexity of your scheduling requirements, and any industry-specific challenges you face. A solution that works well for a small HVAC company might not be suitable for a large telecommunications provider.
      Integration capabilities should be high on your priority list. The best scheduling software should seamlessly integrate with your existing systems, including CRM, inventory management, and accounting software. This integration eliminates data silos and ensures information flows smoothly across your organization.
      Mobile functionality is non-negotiable in today's field service environment. Your technicians need access to schedules, customer information, and work orders on their mobile devices. Look for software that offers robust mobile apps with offline capabilities, ensuring productivity even in areas with poor connectivity.
      Don't overlook the importance of user experience. Complex, difficult-to-use software will lead to low adoption rates among your team. Choose a solution with an intuitive interface that requires minimal training. This will help ensure your team embraces the new system and uses it effectively.
      Finally, consider the scalability of the solution. Your business will grow and evolve, and your scheduling software should be able to grow with you. Look for flexible solutions that can accommodate increasing numbers of users, more complex scheduling scenarios, and additional functionality as your needs change.`
    },
    {
      category: 'customer-service',
      title: '5 Ways to Improve Customer Communication in Your Service Business',
      date: '9/1/2025',
      readTime: '4 min read',
      excerpt: 'In today\'s competitive service landscape, exceptional customer communication isn\'t just nice to have—it\'s essential for business growth and customer retention.',
      author: 'Hari',
      image: '💬',
      content: `In today's competitive service landscape, exceptional customer communication isn't just nice to have—it's essential for business growth and customer retention.
      Effective communication begins with setting clear expectations. When a customer schedules a service, they should receive immediate confirmation with all relevant details, including the appointment time, technician information, and what to expect during the visit. Automated notifications can keep customers informed about appointment status changes, reducing uncertainty and building trust.
      Real-time tracking capabilities have become a customer expectation in the service industry. Providing customers with the ability to track their technician's location and estimated arrival time through a mobile app or web portal significantly enhances the customer experience. This transparency reduces the need for customers to call for updates and demonstrates respect for their time.
      Personalized communication goes a long way in building customer relationships. Use customer data to tailor communications based on service history, preferences, and past interactions. Addressing customers by name and referencing previous services shows that you value their business and understand their specific needs.
      Proactive communication about potential issues or delays can turn a negative situation into a positive customer experience. If a technician is running late or if an unexpected problem is discovered during service, notifying the customer immediately with an explanation and revised timeline helps maintain trust and reduces frustration.
      Finally, establishing multiple communication channels ensures customers can interact with your business in the way that's most convenient for them. While phone calls remain important, offering options like text messaging, email, and chat accommodates different preferences and can improve response times.`
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const toggleArticle = (index) => {
    if (expandedArticle === index) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-down"
          >
            Fielduo Blog
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Insights and updates on field service management software
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* About Section */}
            <div 
              className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-800 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
              data-aos="fade-right"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">About Fielduo</h2>
              <p className="text-gray-300 mb-4">
                Welcome to Fielduo, your go-to blog for insights and updates on field service management software. We aim to empower businesses with knowledge and tools for efficient operations.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-blue-400">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                At Fielduo, we are dedicated to providing valuable content that helps businesses optimize their field service management processes and enhance productivity through effective software solutions.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-blue-400">Who We Are</h3>
              <p className="text-gray-300">
                At Fielduo, we are a team of industry experts, software developers, and field service professionals who understand the challenges you face daily. Our combined experience allows us to provide insights that are both practical and innovative.
              </p>
            </div>
            
            {/* Subscribe Section */}
            <div 
              className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Subscribe for Updates</h2>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest insights and trends in field service management
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Articles Section */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-900 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-800'}`}
                  onClick={() => setActiveCategory(category.id)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Articles Grid */}
            <div className="space-y-8">
              {filteredArticles.map((article, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4 transform transition-transform duration-300 hover:scale-110">{article.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span className="capitalize px-2 py-1 bg-gray-800 bg-opacity-50 rounded-full">{article.category}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                        {article.author === 'Hari' && (
                          <>
                            <span className="mx-2">•</span>
                            <span>By {article.author}</span>
                          </>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                        {article.title}
                      </h2>
                      
                      {/* Article Content - Conditionally Rendered */}
                      {expandedArticle === index ? (
                        <div className="text-gray-300 mb-4 whitespace-pre-line">
                          {article.content}
                        </div>
                      ) : (
                        <p className="text-gray-300 mb-4">
                          {article.excerpt}
                        </p>
                      )}
                      
                      <button 
                        className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                        onClick={() => toggleArticle(index)}
                      >
                        {expandedArticle === index ? 'Read Less' : 'Read More'}
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${expandedArticle === index ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12" data-aos="fade-up">
              <div className="flex space-x-2">
                <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/20">1</button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105">2</button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105">3</button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;