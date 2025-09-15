'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  
  // Refs for dropdown containers to detect outside clicks
  const productsDropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsDropdownOpen && productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
      if (solutionsDropdownOpen && solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }
      if (industriesDropdownOpen && industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIndustriesDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [productsDropdownOpen, solutionsDropdownOpen, industriesDropdownOpen]);
  
  const navItems = [
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'Overview & Impact', href: '/Overview&Impact', description: 'Comprehensive product suite' },
        { name: 'Core Platform Capabilities', href: '/Core-platform-capabilities', description: 'Robust and scalable' },
        { name: 'Advanced Intelligence', href: '/Advanced-intelligence', description: 'AI-driven solutions' },
        { name: 'Mobile App Features', href: '/Mobile-app-features', description: 'On-the-go functionality' },
        { name: 'Measurable Results', href: '/Measurable-results', description: 'Data-driven insights' },
        { name: 'Implementation & Support', href: '/Implementation-support', description: 'Seamless onboarding' },
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'B2B Field Service', href: '/B2B-field-services', description: 'Enterprise-grade solutions' },
        { name: 'B2C Self-Service Portal', href: '/B2C-Self-Service-Portal', description: 'Customer-centric design' },
        { name: 'Scheduling & Dispatching', href: '/Scheduling-Dispatching', description: 'Streamlined operations' },
        { name: 'Invoicing & Payments', href: '/Invoicing-Payments', description: 'End-to-end management' },
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      dropdown: [
        { name: 'HVAC', href: '/Hvac', description: 'Heating, Ventilation, and Air Conditioning' },
        { name: 'Plumbing', href: '/Plumbing', description: 'Expert plumbing solutions' },
        { name: 'Electrical', href: '/Electrical', description: 'Professional electrical services' },
        { name: 'Appliance Repair', href: '/Appliance-repair', description: 'Reliable appliance fixes' },
        { name: 'Facility Management', href: '/Facility-management', description: 'Comprehensive facility services' },
        { name: 'Pest Control', href: '/Pest-control', description: 'Effective pest solutions' },
        { name: 'More...', href: '/Industries/', description: 'See all industries' },
      ]
    },
    { name: 'Pricing', href: '/Pricing' },
    { name: 'Blogs', href: '/Blogs' },
    { name: 'About', href: '/About' },
  ];
  
  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
    setSolutionsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };
  
  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
    setProductsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };
  
  const toggleIndustriesDropdown = () => {
    setIndustriesDropdownOpen(!industriesDropdownOpen);
    setProductsDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  };
  
  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  
  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-black/95 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative mr-3 sm:mr-4 bg-white p-1.5 sm:p-2 rounded-lg shadow-lg">
              <Image 
                src="/logo.png" 
                alt="Fielduo Logo" 
                width={40} 
                height={40}
                className="transition-transform duration-300 group-hover:rotate-12 w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
              Fielduo
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div ref={
                    item.name === 'Products' ? productsDropdownRef : 
                    item.name === 'Solutions' ? solutionsDropdownRef : 
                    industriesDropdownRef
                  }>
                    <button
                      onClick={
                        item.name === 'Products' ? toggleProductsDropdown : 
                        item.name === 'Solutions' ? toggleSolutionsDropdown : 
                        toggleIndustriesDropdown
                      }
                      className="relative text-gray-300 hover:text-white px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 flex items-center"
                    >
                      {item.name}
                      <svg className={`ml-1 h-4 w-4 transition-transform ${
                        (item.name === 'Products' && productsDropdownOpen) || 
                        (item.name === 'Solutions' && solutionsDropdownOpen) || 
                        (item.name === 'Industries' && industriesDropdownOpen) ? 'rotate-180' : ''
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    </button>
                    
                    {/* Products Dropdown */}
                    {item.name === 'Products' && productsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl z-50 overflow-hidden border border-gray-800">
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-3">Products</h3>
                          <div className="grid gap-2">
                            {item.dropdown.map((product, index) => (
                              <Link
                                key={index}
                                href={product.href}
                                className="block p-3 rounded-md hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={() => setProductsDropdownOpen(false)}
                              >
                                <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">{product.name}</h4>
                                <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl z-50 overflow-hidden border border-gray-800">
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-3">Solutions</h3>
                          <div className="grid gap-2">
                            {item.dropdown.map((solution, index) => (
                              <Link
                                key={index}
                                href={solution.href}
                                className="block p-3 rounded-md hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">{solution.name}</h4>
                                <p className="text-gray-400 text-sm mt-1">{solution.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Industries Dropdown */}
                    {item.name === 'Industries' && industriesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl z-50 overflow-hidden border border-gray-800">
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-3">Industries</h3>
                          <div className="grid gap-2">
                            {item.dropdown.map((industry, index) => (
                              <Link
                                key={index}
                                href={industry.href}
                                className="block p-3 rounded-md hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={() => setIndustriesDropdownOpen(false)}
                              >
                                <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">{industry.name}</h4>
                                <p className="text-gray-400 text-sm mt-1">{industry.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-gray-300 hover:text-white px-3 py-1.5 rounded text-sm font-medium transition-all duration-200"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-all duration-200 ml-2">
              Contact
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Menu</span>
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform -translate-y-1/2 transition-transform ${isOpen ? 'rotate-45' : ''}`}></span>
                <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform -translate-y-1/2 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform -translate-y-1/2 transition-transform ${isOpen ? '-rotate-45' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-gray-900/95 backdrop-blur-lg rounded-b-lg border-t border-gray-800">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="py-1">
                    <button 
                      onClick={() => {
                        if (item.name === 'Products') {
                          setProductsDropdownOpen(!productsDropdownOpen);
                          setSolutionsDropdownOpen(false);
                          setIndustriesDropdownOpen(false);
                        } else if (item.name === 'Solutions') {
                          setSolutionsDropdownOpen(!solutionsDropdownOpen);
                          setProductsDropdownOpen(false);
                          setIndustriesDropdownOpen(false);
                        } else if (item.name === 'Industries') {
                          setIndustriesDropdownOpen(!industriesDropdownOpen);
                          setProductsDropdownOpen(false);
                          setSolutionsDropdownOpen(false);
                        }
                      }}
                      className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white px-3 py-3 rounded text-base font-medium transition-all duration-200"
                    >
                      <span>{item.name}</span>
                      <svg className={`h-5 w-5 transform transition-transform ${
                        (item.name === 'Products' && productsDropdownOpen) || 
                        (item.name === 'Solutions' && solutionsDropdownOpen) || 
                        (item.name === 'Industries' && industriesDropdownOpen) ? 'rotate-180' : ''
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                      (item.name === 'Products' && productsDropdownOpen) || 
                      (item.name === 'Solutions' && solutionsDropdownOpen) || 
                      (item.name === 'Industries' && industriesDropdownOpen) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="block text-gray-400 hover:text-white px-3 py-3 rounded text-sm font-medium transition-all duration-200 hover:bg-gray-800/50"
                          onClick={() => {
                            setIsOpen(false);
                            setProductsDropdownOpen(false);
                            setSolutionsDropdownOpen(false);
                            setIndustriesDropdownOpen(false);
                          }}
                        >
                          <div className="font-medium">{subItem.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-3 rounded text-base font-medium transition-all duration-200 hover:bg-gray-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded text-base font-medium transition-colors duration-200 mt-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;