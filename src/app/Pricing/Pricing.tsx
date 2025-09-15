'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeTab, setActiveTab] = useState('pricing');
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

  const pricingTiers = [
    {
      name: "STARTER PLAN",
      monthlyPrice: "$36",
      annualPrice: "$324",
      savings: "79% cheaper than Salesforce",
      description: "Perfect for Small Businesses (1-5 Technicians)",
      features: [
        "Work order creation & management",
        "Task assignment & tracking",
        "Service history & documentation",
        "Multi-location support",
        "AI & Smart Features (Basic)",
        "IoT device connectivity (5 devices)",
        "Real-time equipment monitoring",
        "Mobile app (iOS/Android)",
        "Performance dashboards & KPI tracking",
        "Email support, no setup fees, cancel anytime"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "PROFESSIONAL PLAN",
      monthlyPrice: "$72",
      annualPrice: "$648",
      savings: "59% cheaper than Salesforce",
      description: "Perfect for 6-15 Technicians",
      features: [
        "All Starter features plus:",
        "Advanced AI & ML",
        "IoT integration (50 devices)",
        "Customer self-service portal",
        "Online booking & real-time technician tracking",
        "Inventory management & asset tracking",
        "Custom reporting & analytics",
        "Premium support & priority response"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "ENTERPRISE PLAN",
      monthlyPrice: "$120",
      annualPrice: "$1080",
      savings: "31% cheaper than Salesforce",
      description: "Perfect for 16+ Technicians",
      features: [
        "Full AI & ML automation suite",
        "120 IoT devices & advanced analytics",
        "Custom ML models & real-time network monitoring",
        "Unlimited technician licenses",
        "Customization, white-label & multi-tenant options",
        "Advanced asset & warranty management",
        "Executive dashboards & business intelligence",
        "Full API access & custom integrations",
        "Priority 24/7 support & dedicated management"
      ],
      cta: "Get Started",
      popular: false
    }
  ];
  
  const competitors = [
    { name: "Salesforce Field Service", price: "$175", type: "Technician License", savings: "Up to $139/month (79%)" },
    { name: "Microsoft Dynamics 365", price: "$105", type: "Full License", savings: "Up to $69/month (66%)" },
    { name: "Oracle Field Service", price: "$100", type: "Professional", savings: "Up to $64/month (64%)" },
    { name: "FieldAware Basic", price: "$70", type: "Basic", savings: "Up to $34/month (49%)" },
    { name: "IFS Field Service", price: "$65", type: "Basic", savings: "Up to $29/month (45%)" },
    { name: "Zuper Starter", price: "$65", type: "Starter", savings: "Up to $29/month (45%)" },
    { name: "Jobber Core", price: "$39", type: "Individual", savings: "Up to $3/month (8%)" }
  ];
  
  const addOns = [
    { service: "Additional Technician License", fielduoPrice: "$3.60/month", competitor: "Salesforce: $175/month", savings: "98% cheaper" },
    { service: "Advanced Analytics Package", fielduoPrice: "$12/month", competitor: "Tableau add-on: $70/month", savings: "83% cheaper" },
    { service: "Custom Integration Development", fielduoPrice: "Starting at $600", competitor: "Custom dev: $10,000+", savings: "94% cheaper" },
    { service: "Professional Implementation", fielduoPrice: "$240 (one-time)", competitor: "Implementation: $5,000+", savings: "95% cheaper" },
    { service: "Training and Onboarding", fielduoPrice: "$120/session", competitor: "Training: $2,000+/session", savings: "94% cheaper" }
  ];
  
  const roiScenarios = [
    { scenario: "Small Service Company (5 technicians)", fielduo: "$36/month", alternative: "$195/month ($39 × 5)", monthlySavings: "$159", annualSavings: "$1,908", threeYearROI: "$5,724" },
    { scenario: "Growing Service Business (10 technicians)", fielduo: "$72/month", alternative: "$1,050/month ($105 × 10)", monthlySavings: "$978", annualSavings: "$11,736", threeYearROI: "$35,208" },
    { scenario: "Enterprise Service Operation (25 technicians)", fielduo: "$120/month", alternative: "$4,375/month ($175 × 25)", monthlySavings: "$4,255", annualSavings: "$51,060", threeYearROI: "$153,180" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <section className={`py-20 px-4 bg-gradient-to-b from-gray-900 to-black transition-all duration-700 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-down"
          >
            Fielduo Pricing
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Unmatched value with 31-79% savings vs competitors with integrated AI, ML, IoT
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Fielduo Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div data-aos="fade-right">
                <div className="inline-block mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-900 text-blue-200 rounded-full">COST ADVANTAGE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Why Choose Fielduo?</h2>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Significant Cost Savings</h3>
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    Save $396-$51,060 annually depending on your business size. Leverage our advanced AI, ML, IoT features, and enjoy complete digital transformation at an unbeatable price.
                  </p>
                  <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 px-4 py-3 rounded-xl inline-block shadow-lg">
                    <span className="font-bold">Average savings of 55%</span> compared to leading competitors
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Advanced Technology Integration</h3>
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    Fielduo combines cutting-edge AI, machine learning, and IoT capabilities in a single platform, eliminating the need for multiple expensive solutions.
                  </p>
                  <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 px-4 py-3 rounded-xl inline-block shadow-lg">
                    <span className="font-bold">Enterprise-grade features</span> at small business prices
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="text-center mb-6">
                  <div className="inline-flex rounded-full bg-blue-900 px-4 py-1 text-sm font-medium text-blue-200 mb-4">
                    Billing Options
                  </div>
                  <div className="flex justify-center">
                    <div className="inline-flex bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-1 border border-gray-700">
                      <button 
                        className={`px-6 py-3 rounded-md transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'text-gray-300 hover:text-white'}`}
                        onClick={() => setBillingCycle('monthly')}
                      >
                        Monthly
                      </button>
                      <button 
                        className={`px-6 py-3 rounded-md transition-all ${billingCycle === 'annual' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'text-gray-300 hover:text-white'}`}
                        onClick={() => setBillingCycle('annual')}
                      >
                        Annual (Save 10%)
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-gray-850 bg-opacity-50 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-300">Starter Plan</span>
                    <span className="font-bold text-xl">{billingCycle === 'monthly' ? pricingTiers[0].monthlyPrice : pricingTiers[0].annualPrice}<span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span></span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-850 bg-opacity-50 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-300">Professional Plan</span>
                    <span className="font-bold text-xl">{billingCycle === 'monthly' ? pricingTiers[1].monthlyPrice : pricingTiers[1].annualPrice}<span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span></span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-850 bg-opacity-50 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-300">Enterprise Plan</span>
                    <span className="font-bold text-xl">{billingCycle === 'monthly' ? pricingTiers[2].monthlyPrice : pricingTiers[2].annualPrice}<span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span></span>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-blue-400 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      All plans include AI, ML, and IoT features at no extra cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-down">
              <span className="text-xs font-semibold px-3 py-1 bg-blue-900 text-blue-200 rounded-full">PRICING PLANS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down" data-aos-delay="100">Pricing Tiers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">Choose the plan that fits your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((plan, index) => (
              <div 
                key={index} 
                className={`group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-700'} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20`}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}</span>
                  <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <div className="text-blue-400 text-sm mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  {plan.savings}
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 group-hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg' : 'bg-gray-700 bg-opacity-50 backdrop-blur-sm hover:bg-gray-600'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tabs for additional information */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <div className="inline-flex bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-1 border border-gray-800">
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'pricing' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('pricing')}
              >
                Market Comparison
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'addons' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('addons')}
              >
                Add-On Services
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'roi' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('roi')}
              >
                ROI Analysis
              </button>
            </div>
          </div>
          
          {activeTab === 'pricing' && (
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <h3 className="text-2xl font-bold">Market Positioning Analysis</h3>
                <p className="text-gray-400">See how Fielduo compares to the competition</p>
              </div>
              <div className="grid grid-cols-4 p-4 font-bold bg-gray-800 bg-opacity-50">
                <div>Solution</div>
                <div>Monthly Price</div>
                <div>Plan Type</div>
                <div>vs Fielduo Saving</div>
              </div>
              {competitors.map((competitor, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 p-4 ${index % 2 === 0 ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-850 bg-opacity-50'} transition-colors hover:bg-gray-800`}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 50}
                >
                  <div className="font-medium">{competitor.name}</div>
                  <div>{competitor.price}</div>
                  <div className="text-gray-400">{competitor.type}</div>
                  <div className="text-green-400 font-semibold">{competitor.savings}</div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'addons' && (
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <h3 className="text-2xl font-bold">Fielduo Add-On Services Pricing (USD)</h3>
                <p className="text-gray-400">Additional services at unbeatable prices</p>
              </div>
              <div className="grid grid-cols-4 p-4 font-bold bg-gray-800 bg-opacity-50">
                <div>Service</div>
                <div>Fielduo Price</div>
                <div>Competitor</div>
                <div>Savings</div>
              </div>
              {addOns.map((addOn, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 p-4 ${index % 2 === 0 ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-850 bg-opacity-50'} transition-colors hover:bg-gray-800`}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 50}
                >
                  <div className="font-medium">{addOn.service}</div>
                  <div>{addOn.fielduoPrice}</div>
                  <div className="text-gray-400">{addOn.competitor}</div>
                  <div className="text-green-400 font-semibold">{addOn.savings}</div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'roi' && (
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <h3 className="text-2xl font-bold">Fielduo ROI Analysis: Real-World Scenarios</h3>
                <p className="text-gray-400">See how much you can save with Fielduo</p>
              </div>
              <div className="grid grid-cols-6 p-4 font-bold bg-gray-800 bg-opacity-50 text-sm">
                <div>Scenario</div>
                <div>Fielduo</div>
                <div>Alternative</div>
                <div>Monthly Savings</div>
                <div>Annual Savings</div>
                <div>3-Year ROI</div>
              </div>
              {roiScenarios.map((scenario, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-6 p-4 ${index % 2 === 0 ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-850 bg-opacity-50'} text-sm transition-colors hover:bg-gray-800`}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 50}
                >
                  <div className="font-medium">{scenario.scenario}</div>
                  <div>{scenario.fielduo}</div>
                  <div className="text-gray-400">{scenario.alternative}</div>
                  <div className="text-green-400 font-semibold">{scenario.monthlySavings}</div>
                  <div className="text-green-400 font-semibold">{scenario.annualSavings}</div>
                  <div className="text-green-400 font-semibold">{scenario.threeYearROI}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Key Value Propositions */}
      <section className="py-20 px-4 bg-gray-900 bg-opacity-70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">Fielduo Key Value Propositions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Unmatched Cost Efficiency</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>79% savings compared to Salesforce</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>66% savings compared to Dynamics 365</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>AI/ML/IoT included at every pricing tier</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>No hidden fees or surprise charges</span>
                </li>
              </ul>
            </div>
            
            <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-left">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Advanced Technology Integration</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>AI-powered scheduling and optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>Machine learning predictive maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>IoT device connectivity from starter plan</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span>Custom ML model training at enterprise level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" data-aos="fade-up">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Start your free 14-day trial today, no setup fees, cancel anytime!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center justify-center">
              Request a Demo
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

export default PricingPage;