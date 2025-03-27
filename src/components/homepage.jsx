import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import VerificationIcon from "../icons/verification.json"
import dollarIcon from "../icons/dollar_coin.json"
import Lottie from "react-lottie";

const Homepage = () => {

  const VerificationSVG = {
    loop: true, // Make sure the animation loops continuously
    autoplay: true, // Play the animation on load
    animationData: VerificationIcon, // Animation data for the first animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Adjust rendering
    },
}
  const DollarIcon = {
    loop: true, // Make sure the animation loops continuously
    autoplay: true, // Play the animation on load
    animationData: dollarIcon, // Animation data for the first animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Adjust rendering
    },
}

  const navigate = useNavigate();

  return (
    <div id="waitlist" class="relative pt-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div class="container px-4 mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <motion.div class="space-y-8 text-left" initial={{ opacity: 0, translateY:20 }}
            animate={{ opacity: 1, translateY:0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}>
            <h1 class="uppercase text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-oswald">
              Tired of High Gas Fees and Unsafe USDT Trading?
            </h1>
            <p class="text-xl text-gray-600">
              Experience the future of secure and efficient USDT trading with
              TronSecure. Say goodbye to high gas fees and hello to peace ofy
              mind.
            </p>
            <div class="space-y-6">
              <div class="flex items-start gap-3">
                <div class="mt-1 rounded-full bg-purple-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-zap h-6 w-6 text-purple-500"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                    Gas Free Trading
                  </h3>
                  <p class="mt-1 text-gray-600">
                    Enjoy up to 5 free daily transactions with instant energy
                    delegation
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 rounded-full bg-purple-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-shield h-6 w-6 text-green-500"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                    Advanced Security
                  </h3>
                  <p class="mt-1 text-gray-600">
                    State-of-the-art wallet verification and security
                    certificates for unparalleled protection
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/dashboard">
                <button onClick={() => navigate("/dashboard")} class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-11 rounded-md px-8 group bg-purple-600  hover:bg-black text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                  Start Free Trial
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
              <a href="/wallet-verification">
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 group border-purple-500 text-purple-600 shadow-sm hover:shadow-md transition-all hover:text-black ">
                  Verify Wallet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-wallet ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>
          <div class="relative" >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <motion.div
                class="premium-card p-4 rounded-xl flex flex-col w-full"
                initial={{ opacity: 0, translateX:-50 }}
            animate={{ opacity: 1, translateX:0 }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
              >
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-1 rounded-lg bg-purple-100 text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-sm font-oswald uppercase">Energy Delegation</h3>
                </div>
                <div class="icon-background-image aspect-video rounded-lg flex items-center justify-center mb-2 flex-1">
                  <div>
                  <Lottie options={DollarIcon} height={250} width={320} />
                   
                  </div>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <div>
                    <p class="text-muted-foreground">Gas-Free Transactions</p>
                    <p class="font-semibold text-primary text-start">5 / day</p>
                  </div>
                  <a href="/dashboard">
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md bg-purple-600 text-white text-xs py-1 px-2 hover:bg-purple-700">
                      Start Trial
                    </button>
                  </a>
                </div>
              </motion.div>
             
              <motion.div
                class="premium-card p-4 rounded-xl"
                initial={{ opacity: 0, translateX:50 }}
            animate={{ opacity: 1, translateX:0 }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
              >
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-1 rounded-lg bg-purple-100 text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-sm uppercase font-oswald">Wallet Verification</h3>
                </div>
                <div class="icon-background-image aspect-video rounded-lg flex items-center justify-center mb-2">
                  <div>
                    
                  <Lottie options={VerificationSVG} height={250} width={320} />



                  </div>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <div>
                    <p class="text-muted-foreground">Limited Time Offer</p>
                    <div class="flex items-center gap-1 text-start">
                      <span class="line-through text-muted-foreground">
                        $10/scan
                      </span>
                      <span class="font-semibold text-primary">FREE</span>
                    </div>
                  </div>
                  <a href="/wallet-verification">
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md bg-purple-600 text-white text-xs py-1 px-2 hover:bg-purple-700">
                      Verify Now
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
