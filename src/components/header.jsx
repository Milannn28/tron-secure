// import React from 'react'
// import { useState, useEffect } from "react";

// const Header = () => {

//     const [isScrolled, setIsScrolled] = useState(false);
//       const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         document.body.classList.toggle("menu-open"); // Add/remove class for body (animation effect)
//       };
    

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}>
//                   <div className="container mx-auto px-4">
//                 <div className="flex items-center justify-between h-20">
//                     <a className="flex items-center space-x-2" href="/">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cuboid h-8 w-8 text-purple-600">
//                             <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"></path>
//                             <path d="M10 22v-8L2.25 9.15"></path>
//                             <path d="m10 14 11.77-6.87"></path>
//                         </svg>
//                         <span className="text-2xl font-bold text-gray-900">TronSecure</span>
//                     </a>
//                     <nav className={`hidden md:flex space-x-8  ${isMobileMenuOpen ? "open" : "hidden"}`}>
//                         <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/#features">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-4 w-4">
//                                 <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
//                             </svg>
//                             <span>Features</span>
//                         </a>
//                         <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/#how-it-works">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-4 w-4">
//                                 <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                             </svg>
//                             <span>How It Works</span>
//                         </a>
//                         <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/checker">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock h-4 w-4">
//                                 <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
//                                 <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
//                             </svg>
//                             <span>Verification Status</span>
//                         </a>
//                         <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/#faq">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-4 w-4">
//                                 <circle cx="12" cy="12" r="10"></circle>
//                                 <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
//                                 <path d="M12 17h.01"></path>
//                             </svg>
//                             <span>FAQ</span>
//                         </a>
//                     </nav>
//                     <div className="hidden md:flex items-center space-x-4">             
//                         <a href="/dashboard">
//                             <button className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 flex items-center space-x-2">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check h-5 w-5">
//                                     <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                                     <path d="m9 12 2 2 4-4"></path>
//                                 </svg>
//                                 <span>Wallet Security Check</span>
//                             </button>
//                         </a>
//                     </div>

//                     <div className="md:hidden text-gray-600 hover:text-purple-600 transition-colors" onClick={toggleMobileMenu}>
//                         <div className="mobileIcon">
//                             <div></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Header


import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.classList.toggle("menu-open"); // Add/remove class for animation
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a className="flex items-center space-x-2" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cuboid h-8 w-8 text-purple-600"
            >
              <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"></path>
              <path d="M10 22v-8L2.25 9.15"></path>
              <path d="m10 14 11.77-6.87"></path>
            </svg>
            <span className="text-2xl font-bold text-gray-900">TronSecure</span>
          </a>

          {/* Menu Button (Mobile) */}
          <div className="md:hidden text-gray-600 hover:text-purple-600 transition-colors" onClick={toggleMobileMenu}>
                         <div className="mobileIcon">
                             <div></div>
                         </div>
                     </div>

         
          <nav
            className={`absolute md:relative gap-2 top-20 md:top-0 left-0 w-full justify-between md:max-w-[68%] md:justify-between bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 flex flex-col md:flex-row md:space-x-8 transition-all duration-300 md:items-center items-start ${
              isMobileMenuOpen ? "flex" : "hidden md:flex"
            }`}
          >
                        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center items-start">
                                    <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/#features">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-4 w-4">
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                        </svg>
                                        <span>Features</span>
                                    </a>
                                    <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/#how-tronsecure-work">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-4 w-4">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        </svg>
                                        <span>How It Works</span>
                                    </a>
                                    <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/wallet-verification">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock h-4 w-4">
                                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <span>Verification Status</span>
                                    </a>
                                    <a className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-1" href="/#frenquenty-asked-questions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-4 w-4">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                            <path d="M12 17h.01"></path>
                                        </svg>
                                        <span>FAQ</span>
                                    </a>
                        </div>
                      <a href="/dashboard">
                        <button className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 flex items-center space-x-2 w-full md:w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check h-5 w-5">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span>Wallet Security Check</span>
                        </button>
                      </a>  

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
