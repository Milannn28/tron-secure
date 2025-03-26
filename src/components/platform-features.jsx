import React, { useState } from "react";
import certiIcon from "../icons/certificates.json"
import securityIcon from "../icons/security_metrics.json"
import pdfIcon from "../icons/pdf_analysis.json"
import verificationIcon from "../icons/verification.json"
import Lottie from "react-lottie";
const PlatformFeatures = () => {
  const [type, setType] = useState("wallet");
  const CertificateIcon = {
    loop: true, // Make sure the animation loops continuously
    autoplay: true, // Play the animation on load
    animationData: certiIcon, // Animation data for the first animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Adjust rendering
    },
  };
  const SecurityIcon = {
    loop: true, // Make sure the animation loops continuously
    autoplay: true, // Play the animation on load
    animationData: securityIcon, // Animation data for the first animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Adjust rendering
    },
  };
  const PdfIcon = {
    loop: true, // Make sure the animation loops continuously
    autoplay: true, // Play the animation on load
    animationData: pdfIcon, // Animation data for the first animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Adjust rendering
    },
  };
  const VerificationIcon = {
    loop: true, // Make sure the animation loops continuously
    autoplay: true, // Play the animation on load
    animationData: verificationIcon, // Animation data for the first animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optional: Adjust rendering
    },
  };
  // Handle the click event to change the feature type
  const handleFeatureChange = (newType) => {
    setType(newType);
  };
  return (
    <div
      class="py-24 bg-gradient-to-b from-white to-purple-50"
      id="features"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-8" >
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase font-oswald">
            Platform Features
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Advanced security features and energy delegation system
          </p>
        </div>
        <div
          class="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-8"
          
        >
          <div class="flex items-start space-x-3">
            <div class="p-2 bg-purple-100 rounded-lg">
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
                class="lucide lucide-triangle-alert h-5 w-5 text-purple-500"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <div class="text-start">
              <h3 class="text-lg font-semibold text-purple-600 mb-1 uppercase font-oswald">
                Why Check Your Transaction History?
              </h3>
              <p class="text-purple-500">
                Receiving questionable transactions today could lead to account
                restrictions tomorrow.
              </p>
            </div>
          </div>
        </div>
        <div class="flex space-x-4 mb-8">
          <button onClick={() => handleFeatureChange("wallet")} class={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${type === 'wallet'?'bg-purple-600 text-white shadow-lg':'bg-white text-gray-600 border border-purple-200 hover:border-purple-300'}`}>
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
              class="lucide lucide-shield h-5 w-5"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span>Wallet Security</span>
          </button>
          <button  onClick={() => handleFeatureChange("energy")} class={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${type !== 'wallet'?'bg-purple-600 text-white shadow-lg':'bg-white text-gray-600 border border-purple-200 hover:border-purple-300'}`}>
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
              class="lucide lucide-zap h-5 w-5"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <span>Energy Delegation</span>
          </button>
        </div>
        {
          type==="wallet" ?
          <div
          class="grid md:grid-cols-2 gap-8"
          
        >
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-shield h-6 w-6"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                Verification Process
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Advanced multi-step verification ensures your wallet's security
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32 ">
                  <div>
                  <Lottie options={VerificationIcon} height={128} width={128} />
                  
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-chart-column h-6 w-6"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                Security Metrics
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Real-time security scoring and risk assessment
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32">
                  <div>
                  <Lottie options={SecurityIcon} height={128} width={128} />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-file-text h-6 w-6"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                PDF Report &amp; Certificate
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Detailed security analysis report with recommendations
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32">
                  <div>
                  <Lottie options={PdfIcon} height={128} width={128} />

                   </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-award h-6 w-6"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                Certificate Preview
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Blockchain-verified security certificates
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32">
                  <div>
                  <Lottie options={CertificateIcon} height={128} width={128} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div
          class="grid md:grid-cols-2 gap-8"
          
        >
        
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-shield h-6 w-6"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                Verification Process
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Advanced multi-step verification ensures your wallet's security
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32 ">
                  <div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-chart-column h-6 w-6"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                Security Metrics
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Real-time security scoring and risk assessment
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32">
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-file-text h-6 w-6"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                PDF Report &amp; Certificate
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Detailed security analysis report with recommendations
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32">
                  <div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transform transition-all duration-300"
            
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
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
                  class="lucide lucide-award h-6 w-6"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 uppercase font-oswald">
                Certificate Preview
              </h3>
            </div>
            <p class="text-gray-600 mb-6 text-start">
              Blockchain-verified security certificates
            </p>
            <div class="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="w-32 h-32">
                  <div>
                    </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        }
        <p class="text-center text-gray-500 text-sm mt-8 opacity-100">
          Hover on features for detailed information • Click tabs to switch
          between security and energy features
        </p>
      </div>
    </div>
  );
};

export default PlatformFeatures;
