import React from 'react'

const usdtTrading = () => {
  return (
    <div class="py-24 bg-purple-600">   
    <div class="container mx-auto px-4">
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 uppercase font-oswald">Ready to Revolutionize Your USDT Trading?</h2>
            <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Join TronSecure today and experience gas-free transactions, advanced security, and a new era of cryptocurrency trading.</p>
            <a href="/dashboard">
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-purple-600 hover:bg-purple-50 transition-colors duration-300">
                    Get Started Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-5 w-5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
            </a>
        </div>
    </div>
</div>
  )
}

export default usdtTrading
