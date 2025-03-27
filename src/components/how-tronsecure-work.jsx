import React, {useState} from 'react'
import { motion } from "framer-motion";


export default function HowTronsecureWork () {
    const [sliderValue, setSliderValue] = useState(0);

    const [isOpen, setIsOpen] = useState(1)

    const handleIsOpen = (value) => {
        setIsOpen(value)
    }

  const handleHover = (value) => {
    setSliderValue(value);
    if (value === 1) setSliderValue(0)
    else if(value === 2) setSliderValue(50)
    else setSliderValue(100)
  };

    return (
        <div className="py-24 bg-gradient-to-b from-white to-purple-50" id='how-it-works'>
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900 uppercase font-oswald" >How TronSecure Works</h2>
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-200 -translate-y-1/2"> 
                        <div className="absolute top-0 left-0 h-full bg-purple-600" style={{width: `${sliderValue}%`}}></div>
                    </div>
                    <div className="relative grid md:grid-cols-3 gap-8">
                        <div className="relative" onMouseEnter={() => handleHover(1)}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto bg-white border-2 transition-colors duration-300 shadow-lg border-purple-600 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-8 w-8">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <div className= {`bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all  ${isOpen === 1 && "ring-2 ring-purple-500"}`} onClick={() => handleIsOpen(1)}>
                                <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 uppercase font-oswald">Wallet Check</h3>
                                <p className="text-gray-600 text-center mb-4">Instant security scan of your wallet</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-chevron-down h-5 w-5 mx-auto text-purple-500 transition-transform ${isOpen === 1 ? "rotate-180" : "rotate-0"}`}>
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <div className={`mt-4 pt-4 border-t border-gray-200 overflow-hidden transition-all duration-300 ${isOpen === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} >
                                    <ul className="space-y-2">
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Advanced multi-factor verification</span>
                                        </li>
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Real-time security analysis</span>
                                        </li>
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Blockchain-verified security certificate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative" onMouseEnter={() => handleHover(2)}>
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto bg-white border-2 transition-colors duration-300 shadow-lg ${sliderValue == 50 || sliderValue == 100 ? " border-purple-600 text-purple-600" : " border-purple-200 text-purple-300"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-checks h-8 w-8">
                                    <path d="m3 17 2 2 4-4"></path>
                                    <path d="m3 7 2 2 4-4"></path>
                                    <path d="M13 6h8"></path>
                                    <path d="M13 12h8"></path>
                                    <path d="M13 18h8"></path>
                                </svg>
                            </div>
                            <div className={`bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all ${isOpen === 2 && "ring-2 ring-purple-500"}`} onClick={() => handleIsOpen(2)}>
                                <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 uppercase font-oswald">Join Waitlist</h3>
                                <p className="text-gray-600 text-center mb-4">Secure priority access to TronSecure</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-chevron-down h-5 w-5 mx-auto text-purple-500 transition-transform ${isOpen === 2 ? "rotate-180" : "rotate-0"}`}>
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <div className={`mt-4 pt-4 border-t border-gray-200 overflow-hidden transition-all duration-300 ${isOpen === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} >
                                    <ul className="space-y-2">
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start " >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Exclusive early access to platform features</span>
                                        </li>
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Extended 30-day free trial period</span>
                                        </li>
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Premium support and personalized onboarding</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative" onMouseEnter={() => handleHover(3)}>
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto bg-white border-2 transition-colors duration-300 shadow-lg ${sliderValue == 100 ? " border-purple-600 text-purple-600" : " border-purple-200 text-purple-300"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-8 w-8">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                            </div>
                            <div className= {`bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all ${isOpen === 3 && "ring-2 ring-purple-500"}`} onClick={() => handleIsOpen(3)}>
                                <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 uppercase font-oswald">Access Platform</h3>
                                <p className="text-gray-600 text-center mb-4">Start trading USDT without gas fees</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-chevron-down h-5 w-5 mx-auto text-purple-500 transition-transform ${isOpen === 3 ? "rotate-180" : "rotate-0" }`}>
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                                <div className={`mt-4 pt-4 border-t border-gray-200 overflow-hidden transition-all duration-300 ${isOpen === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <ul className="space-y-2">
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Up to 5 daily gas-free transactions</span>
                                        </li>
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Instant energy delegation system</span>
                                        </li>
                                        <li className="grid grid-flow-col items-center gap-2 text-gray-600 place-content-start text-start" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            <span>Advanced trading features and analytics</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 max-w-md mx-auto">
                    <div className="bg-purple-100 h-2 rounded-full overflow-hidden">
                        {/* <div className="h-full bg-purple-600" ></div> */}
                        <motion.div
                            className=" h-full bg-purple-600 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${sliderValue}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>Wallet Check</span>
                        <span>Join Waitlist</span>
                        <span>Access Platform</span>
                    </div>
                </div>
                <div className="mt-12 text-center" >
                    <a href="/dashboard">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-purple-600 text-white hover:bg-purple-700">
                            Get Started Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>
                </div>
                <p className="text-center text-gray-600 mt-8" >Click on each step to learn more about the process</p>
            </div>
        </div>
    )
}