
import React from 'react'

const gasFreeFeature = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-purple-900/10 to-white">
                      <div className="container mx-auto px-4">
                    <div className="text-center mb-16 ">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 uppercase">Gas-Free Future Awaits</h2>
                        <p className="text-xl text-gray-600">Join the revolution in USDT trading</p>
                    </div>
                    <div className="mb-16 " >
                        <div className="rounded-lg border text-card-foreground shadow-sm bg-purple-50 border-purple-200">
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-white rounded-full shadow-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-6 w-6 text-red-500">
                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                            </svg>
                                        </div>
                                        <div className='text-start'>
                                            <p className="text-sm text-gray-600">Current Gas Price</p>
                                            <p className="text-xl font-semibold">$6.50</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-white rounded-full shadow-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-6 w-6 text-purple-500">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                        </div>
                                        <div className='text-start'>
                                            <p className="text-sm text-gray-600">Users in Waitlist</p>
                                            <p className="text-xl font-semibold">250</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-white rounded-full shadow-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-6 w-6 text-green-500">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </div>
                                        <div className='text-start'>
                                            <p className="text-sm text-gray-600">Joined Last Hour</p>
                                            <p className="text-xl font-semibold">+147</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16 ">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-purple-200">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-purple-900 mb-6">Your Potential Monthly Savings</h3>
                                <div className="mb-8">
                                    <span dir="ltr" data-orientation="horizontal" aria-disabled="false" className="radix-slider-thumb  relative flex touch-none select-none items-center w-full" >
                                        <span data-orientation="horizontal" className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                                            <span data-orientation="horizontal" className="absolute h-full bg-primary left-0 right-[55.55555555555556%]"></span>
                                        </span>
                                        <span className="absolute left-0 radix-slider-thumb-transform">
                                            <span role="slider" aria-valuemin="5" aria-valuemax="50" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "  data-radix-collection-item=""></span>
                                            <input className='hidden'/>
                                        </span>
                                    </span>
                                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                                        <span>5 Txns/day</span>
                                        <span>50 Txns/day</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-purple-600">$
                                    
                                    4875.00</p>
                                    <p className="text-gray-600">saved per month</p>
                                    <p className="text-gray-600 text-xs">25
                                    
                                    Txns/day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16 ">
                        <h3 className="text-2xl font-semibold text-purple-900 mb-8">Early Access Benefits</h3>
                        <div className="gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-3">
                            <div className="flex items-center space-x-4 w-fit">
                                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                <div className="flex-1 bg-white border border-purple-400 rounded-full py-3 px-6">
                                    <p className="text-gray-800">Priority Access to Gas-Free Transactions</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 w-fit">
                                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                <div className="flex-1 bg-white border border-purple-400 rounded-full py-3 px-6">
                                    <p className="text-gray-800">Extended Free Trial Period (30 Days)</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 w-fit">
                                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                                <div className="flex-1 bg-white border border-purple-400 rounded-full py-3 px-6">
                                    <p className="text-gray-800">Founding Member Badge &amp;Premium Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-lg border shadow-sm bg-purple-900 text-white">
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-start ">
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1 uppercase">Your Waitlist Position</h4>
                                        <p className="text-sm text-purple-200">Earlier you join, better the benefits</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-3xl font-bold mr-4">#
                                
                                        251</span>
                                        <a href="/dashboard">
                                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-purple-800 text-white hover:bg-purple-700">
                                                Join Now
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-2 h-4 w-4">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default gasFreeFeature
