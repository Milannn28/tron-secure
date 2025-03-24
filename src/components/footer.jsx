import React from 'react'

const footer = () => {
  return (
    <div class="bg-slate-50 border-t border-slate-200">
    <div class="container mx-auto px-4">
        <div class="py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cuboid h-5 w-5 text-purple-600">
                                <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"></path>
                                <path d="M10 22v-8L2.25 9.15"></path>
                                <path d="m10 14 11.77-6.87"></path>
                            </svg>
                        </div>
                        <span class="text-lg font-semibold text-gray-900">TronSecure</span>
                    </div>
                    <p class="text-gray-600 text-sm">
                        Making USDT trading secure<br/>and gas-free
                    </p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-sm font-semibold text-gray-900">Product</h3>
                    <ul class="space-y-3">
                        <li>
                            <a class="text-sm text-gray-600 hover:text-purple-600 transition-colors" href="#features">Features</a>
                        </li>
                        <li>
                            <a class="text-sm text-gray-600 hover:text-purple-600 transition-colors" href="#how-it-works">How it Works</a>
                        </li>
                        <li>
                            <a class="text-sm text-gray-600 hover:text-purple-600 transition-colors" href="#security">Security</a>
                        </li>
                        <li>
                            <a class="text-sm text-gray-600 hover:text-purple-600 transition-colors" href="#waitlist">Waitlist</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-4"></div>
            </div>
        </div>
        <div class="py-6 border-t border-slate-200">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p class="text-sm text-gray-600">© 

                2025
    
                TronSecure. All rights reserved.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default footer
