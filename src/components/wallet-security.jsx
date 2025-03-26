import { Progress } from '@radix-ui/themes'
import React from 'react'

const walletSecurity = () => {
  return (
    <div className='py-24 bg-gradient-to-b from-purple-100 to-white'>
                      <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase font-oswald">Premium Wallet Security Report</h2>
                        <p className="text-xl text-purple-600 font-semibold" >
                            <span className="line-through">Valued at $10</span>
                            - Now Available for FREE
                        </p>    
                    </div>
                    <div className="mb-16" >
                        <div className="rounded-lg border bg-card text-card-foreground border-purple-200 shadow-lg">
                            <div className="flex flex-col space-y-1.5 p-6 bg-purple-50 border-b border-purple-100">
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-check h-6 w-6 text-purple-600">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="m9 15 2 2 4-4"></path>
                                    </svg>
                                    <h3 className="text-lg font-semibold text-gray-900 uppercase font-oswald">Comprehensive Security Analysis Report</h3>
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4" >
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-4 w-4">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <path d="m21 21-4.3-4.3"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 space-y-2 text-start ">
                                            <p className="text-sm font-medium ">CEX Blacklist Check</p>
                                            {/* <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-purple-200 to-purple-600" style={{"width": "95%"}}></div>
                                            </div> */}
                                        <Progress className='h-full bg-gradient-to-r  '  size={"3"} value={75} />

                                        </div>
                                        <span className="text-sm font-medium text-primary w-16 text-right">95
                                        %</span>
                                    </div>
                                    <div className="flex items-center gap-4" >
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-alert h-4 w-4">
                                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                                <path d="M12 9v4"></path>
                                                <path d="M12 17h.01"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 space-y-2 text-start">
                                            <p className="text-sm font-medium">Transaction Analysis</p>
                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-purple-200 to-purple-600" ></div>
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium text-primary w-16 text-right">87

                                        %</span>
                                    </div>
                                    <div className="flex items-center gap-4" >
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-network h-4 w-4">
                                                <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                                                <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                                                <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                                                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                                                <path d="M12 12V8"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 space-y-2 text-start">
                                            <p className="text-sm font-medium">Trust Network</p>
                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-purple-200 to-purple-600" ></div>
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium text-primary w-16 text-right">100
                                        %</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-start uppercase font-oswald" >What &#x27;s Included in Your Report</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group">
                                <div className="rounded-lg border bg-card text-card-foreground  shadow-sm border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
                                    <div className="p-6 bg-white  rounded-xl">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-xl  text-purple-600 bg-purple-100 transition-colors duration-300 group-hover:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-6 w-6">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <path d="m21 21-4.3-4.3"></path>
                                                </svg>
                                            </div>
                                            <div className="grid text-start ">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-oswald uppercase">CEX Blacklist Check</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Cross-reference with major exchanges</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Blacklist database verification</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Risk level assessment</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group" >
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
                                    <div className="p-6 bg-white rounded-xl">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-xl  text-purple-600 bg-purple-100 transition-colors duration-300 group-hover:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-alert h-6 w-6">
                                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                                    <path d="M12 9v4"></path>
                                                    <path d="M12 17h.01"></path>
                                                </svg>
                                            </div>
                                            <div className="grid text-start">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-oswald uppercase">Transaction Analysis</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Complete history review</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Suspicious pattern detection</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Source of funds verification</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
                                    <div className="p-6 bg-white rounded-xl">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-xl  text-purple-600 bg-purple-100 transition-colors duration-300 group-hover:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-network h-6 w-6">
                                                    <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                                                    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                                                    <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                                                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                                                    <path d="M12 12V8"></path>
                                                </svg>
                                            </div>
                                            <div className="grid text-start">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-oswald uppercase">Trust Network</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Shared with major exchanges</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Verified wallet recognition</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Enhanced trading privileges</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
                                    <div className="p-6 bg-white rounded-xl">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-xl  text-purple-600 bg-purple-100 transition-colors duration-300 group-hover:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award h-6 w-6">
                                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                                    <circle cx="12" cy="8" r="6"></circle>
                                                </svg>
                                            </div>
                                            <div className="grid text-start">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-oswald uppercase">Digital Certificate</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Blockchain-verified certificate</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Shareable security badge</span>
                                                    </li>
                                                    <li className="flex items-center space-x-2 text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 flex-shrink-0">
                                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                        <span>Valid for all platforms</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-purple-600 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center space-x-3 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-6 w-6">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                </svg>
                                <p className="text-lg lg:text-xl font-semibold">Get Your Free Security Report + Priority Access to Gas-Free Transactions</p>
                            </div>
                            <a href="/dashboard">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-indigo-700 hover:bg-indigo-50 group">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default walletSecurity
