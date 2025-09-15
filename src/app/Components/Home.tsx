'use client';
import { useState, useEffect } from 'react';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  useEffect(() => {
    const loadSpline = async () => {
      try {
        const Spline = (await import('@splinetool/react-spline')).default;
        setSplineComponent(() => Spline);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load Spline component:', error);
        setIsLoading(false);
      }
    };
    loadSpline();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced background with black gradient and particles */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-90"></div>
        {/* Subtle particle effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gray-400 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.1,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      {/* Main Content - Adjusted downward */}
      <div className="relative pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content - Below on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 lg:pl-12 z-10 order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left">
              Transform Your Service Business with <span className="text-blue-400">Fielduo</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              The All-in-One Field Service Management Platform for HVAC, Plumbing, Electrical, Appliance Repair & more.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 lg:mb-12 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 md:px-7 md:py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                Book a Demo
              </button>
              <button className="bg-transparent hover:bg-gray-800/40 text-white border border-gray-700 px-5 py-3 md:px-7 md:py-3.5 rounded-lg font-medium transition-all duration-300 hover:border-gray-500">
                Start Free Trial
              </button>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 lg:mb-12">
              {[
                { title: 'No Setup Fees', icon: '💰' },
                { title: '30-Day Free Trial', icon: '📅' },
                { title: '24/7 Support', icon: '🛟' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-sm md:text-base text-gray-300">{feature.title}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-6 md:gap-8 border-t border-gray-800 pt-6 md:pt-8">
              {[
                { value: '98%', label: 'Customer Satisfaction' },
                { value: '500+', label: 'Service Businesses' },
                { value: '24/7', label: 'Field Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Spline 3D Model - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 order-1 lg:order-2 relative">
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] flex items-center justify-center">
              {isLoading && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2 md:mb-3"></div>
                  <p className="text-gray-400 text-xs md:text-sm">Loading 3D experience...</p>
                </div>
              )}
              {SplineComponent && (
                <div className="w-full h-full">
                  <SplineComponent
                    scene="https://prod.spline.design/Nps6tQaZIpAcFT9W/scene.splinecode"
                    style={{ 
                      background: 'transparent',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
              )}
              {!isLoading && !SplineComponent && (
                <div className="text-center text-gray-400">
                  <p className="text-sm">3D Model failed to load</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="mt-2 text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced floating elements - Hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute top-1/3 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/2 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40"></div>
        <div className="absolute top-2/3 left-20 w-5 h-5 bg-blue-600 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>

    </div>
  );
}