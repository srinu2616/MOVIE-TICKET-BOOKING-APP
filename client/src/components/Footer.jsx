import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="relative bg-dark-to-b from-dark-900 to-black border-t border-gray-800 overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative py-16 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            {/* Left Section - Logo and Links */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 xl:gap-32">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={assets.logo} 
                  alt="Logo" 
                  
                />
                <p className="mt-4 text-gray-400 text-lg max-w-xs leading-relaxed">
                  Your ultimate destination for cinematic experiences and movie magic.
                </p>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
                {/* Product Links */}
                <div>
                  <h3 className="text-white font-bold text-xl mb-6">Product</h3>
                  <ul className="space-y-4">
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Home</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Support</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Pricing</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Affiliate</a></li>
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="text-white font-bold text-xl mb-6">Resources</h3>
                  <ul className="space-y-4">
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Company</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Blogs</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Community</a></li>
                    <li>
                      <a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg flex items-center gap-2">
                        Careers
                       
                      </a>
                    </li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">About</a></li>
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h3 className="text-white font-bold text-xl mb-6">Legal</h3>
                  <ul className="space-y-4">
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Privacy</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Terms</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">Cookies</a></li>
                    <li><a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">License</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section - Social Media & Info */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-6">
              <p className="text-gray-300 text-xl max-w-80 leading-relaxed">
                Making every customer feel valued—no matter the size of your audience.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-6">
                <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer" className="group">
                  <div className="bg-gray-800 hover:bg-red-600 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white h-6 w-6">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                    </svg>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer" className="group">
                  <div className="bg-gray-800 hover:bg-red-600 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white h-6 w-6">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </a>
                
                <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer" className="group">
                  <div className="bg-gray-800 hover:bg-red-600 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white h-6 w-6">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                </a>
                
                <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer" className="group">
                  <div className="bg-gray-800 hover:bg-red-600 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white h-6 w-6">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </div>
                </a>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-800 pt-6 mt-4 w-full">
                <p className="text-gray-500 text-lg">
                  © 2025 <a href="/" className="text-red-400 hover:text-red-300 transition-colors duration-300">MovieFlix</a>. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer