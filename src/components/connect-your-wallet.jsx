// import React from "react";

// const Connectwallet = () => {
//   return (
//     <div className="pt-14">
//         <div className="container md:max-w-3xl mx-auto px-4 md:px-10 bg-[#ffffff33] rounded-3xl py-12 max-w-[96%]">
//         <div className="mb-12">
//             <div
//             aria-valuemax="100"
//             aria-valuemin="0"
//             role="progressbar"
//             data-state="indeterminate"
//             data-max="100"
//             className="relative h-2 w-full overflow-hidden rounded-full bg-secondary mb-8"
//             >
//             <div
//                 data-state="indeterminate"
//                 data-max="100"
//                 className="h-full w-full flex-1 bg-purple-500 transition-all"
               
//             ></div>
//             </div>
//             <div className="grid grid-cols-4 gap-4">
// {/* stpe 1 icon */}
//             <div className="flex flex-col items-center gap-2 text-purple-500">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500 text-white">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-wallet h-4 w-4"
//                 >
//                     <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
//                     <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
//                 </svg>
//                 </div>
//                 <span className="text-sm font-medium">Connect</span>
//             </div>
// {/* stpe 2 icon */}
//             <div className="flex flex-col items-center gap-2 text-muted-foreground">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary bg-white">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-shield h-4 w-4"
//                 >
//                     <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                 </svg>
//                 </div>
//                 <span className="text-sm font-medium">Scan</span>
//             </div>
// {/* stpe 3 icon */}
//             <div className="flex flex-col items-center gap-2 text-muted-foreground">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary bg-white">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-file-check h-4 w-4"
//                 >
//                     <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
//                     <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//                     <path d="m9 15 2 2 4-4"></path>
//                 </svg>
//                 </div>
//                 <span className="text-sm font-medium">Results</span>
//             </div>
// {/* stpe 4 icon */}
//             <div className="flex flex-col items-center gap-2 text-muted-foreground">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary bg-white">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-users h-4 w-4"
//                 >
//                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="9" cy="7" r="4"></circle>
//                     <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//                 </div>
//                 <span className="text-sm font-medium">Waitlist</span>
//             </div>
//             </div>
//         </div>

// {/* step 1 */}

//         <div className="text-start space-y-6">
           
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Connect Your Wallet</h2>
//                     <p className="text-muted-foreground">
//                     Choose your preferred wallet to begin the security verification
//                     </p>
//                 </div>
//                 <div className="space-y-4">
//                     <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-full bg-[#deddddb4] flex items-center justify-center">
//                             <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             className="lucide lucide-wallet w-6 h-6 text-primary"
//                             >
//                             <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
//                             <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
//                             </svg>
//                         </div>
//                         <div>
//                             <h3 className="font-semibold uppercase font-oswald">Trust Wallet</h3>
//                             <p className="text-sm text-muted-foreground">
//                             Universal Wallet
//                             </p>
//                         </div>
//                         </div>
//                         <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground hover:bg-black text-white h-10 px-4 py-2 bg-purple-500">
//                         Verify Now
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             className="lucide lucide-arrow-right ml-2 h-4 w-4"
//                         >
//                             <path d="M5 12h14"></path>
//                             <path d="m12 5 7 7-7 7"></path>
//                         </svg>
//                         </button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-[#ffffff52]">
//                     <div className="flex gap-4">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         className="lucide lucide-shield w-8 h-8 text-primary"
//                     >
//                         <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                     </svg>
//                     <div className="text-start ">
//                         <h3 className="font-semibold mb-1 uppercase font-oswald">
//                         Your security is our priority.
//                         </h3>
//                         <p className="text-sm text-muted-foreground">
//                         We only require view access to analyze your wallet. No
//                         transactions or approvals needed.
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//         </div>

// {/* stpe 2 scan */}

//         <div className="text-start space-y-6 grid gap-6">
           
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Scan your wallet</h2>
//                     <p className="text-muted-foreground">
//                     start scanning your wallet to get your security score
//                     </p>
//                 </div>
//                 <div className="space-y-4">
//                     <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 flex gap-2 justify-center flex-col items-center">
//                         <div className="p-2 border-2 border-gray-400 w-fit rounded-full">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 className="lucide lucide-shield h-12 w-12"
//                             >
//                                 <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//                             </svg>
//                         </div>
//                         <div
//                             aria-valuemax="100"
//                             aria-valuemin="0"
//                             role="progressbar"
//                             data-state="indeterminate"
//                             data-max="100"
//                             className="relative h-2 w-full overflow-hidden rounded-full bg-secondary"
//                             >
//                             <div
//                                 data-state="indeterminate"
//                                 data-max="100"
//                                 className="h-full w-full flex-1 bg-purple-500 transition-all"
                            
//                             ></div>
//                         </div>
//                         <p>Wrfnirnfrnnecwew</p>
//                     </div>
//                 </div>
//                 <button className="inline-flex items-center justify-center place-self-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-black text-white h-10 px-4 py-2 bg-purple-500">
//                         Start Scan
//                 </button>
//         </div>

// {/* stpe 3 */}

//             <div className="text-start space-y-0 grid gap-6">
                    
//                     <div className="text-center">
//                         <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Scan Complete</h2>
//                         <p className="text-muted-foreground">
//                         Your wallet <br /> Wrfnirnfrnnecwew has been successfully analyzed
//                         </p>
//                     </div>
//                     <div className="space-y-0">
//                         <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 flex gap-4 justify-center flex-col items-center">
                           
//                             <div className="p-2 h-24 w-24 border-4 border-purple-600  rounded-full grid justify-center items-center">
//                                 <p className="font-bold text-3xl text-purple-600">90</p>
//                             </div>

//                             <div className="grid gap-2 w-full">
//                                 <p className="w-full grid justify-between grid-flow-col">Transaction Analyzed:
//                                     <span className="font-semibold">Secure Wallet</span>
//                                 </p>
//                                 <p className="w-full grid justify-between grid-flow-col">Clean Transaction Rate:
//                                     <span className="font-semibold">Excelient</span>
//                                 </p>
//                                 <p className="w-full grid justify-between grid-flow-col">Risk Level:
//                                     <span className="font-semibold text-green-500">Medium</span>
//                                 </p>
//                             </div>

//                             <p>*The reports are sourced directly from the blockchain. If TRX was deducted for the test due to high demand, it will be refunded within 24 hours. Typically, we cover the gas fees for the test.</p>
//                         </div>
//                     </div>
//                     <div className="grid grid-flow-row md:grid-flow-col gap-4">
//                         <button className="inline-flex items-center justify-center place-self-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-black text-white h-10 px-4 py-2 bg-purple-500">
//                                 Download Report
//                         </button>
//                         <button className="inline-flex items-center justify-center place-self-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-black hover:text-white text-black h-10 px-4 py-2 bg-white">
//                                 Download Certificate
//                         </button>
//                     </div>
//             </div>

// {/* stpe 4  */}

//             <div className="text-start grid gap-6">
                    
//                     <div className="text-center">
//                         <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Welcome to the waitlist!</h2>
//                         <p className="text-muted-foreground">
//                         you are now in line for exclusive access to gas-free transactions.we'll notify you when it's your turn to experience the future of USDT trading
//                         </p>
//                     </div>

//                         <div className="text-center rounded-lg border bg-white text-card-foreground shadow-sm p-4 grid grid-flow-col gap-2 justify-between md:justify-around flex-col items-center">
//                             <p className="grid ">Your Position <span className="text-purple-600 text-2xl font-semibold">#522500</span></p>
//                             <p className="grid ">Estimated Wait Time <span className="text-purple-600 text-2xl font-semibold"> ~8-10 days</span></p>
//                         </div>
//             </div>

//         </div>
//     </div>

//   );
// };

// export default Connectwallet;


import React, { useState } from "react";

const Connectwallet = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="pt-14">
      <div className="container md:max-w-3xl mx-auto px-4 md:px-10 bg-[#ffffff33] rounded-3xl py-12 max-w-[96%]">
        <div className="mb-12">
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            className="relative h-2 w-full overflow-hidden rounded-full bg-secondary mb-8"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              className="h-full w-full flex-1 bg-purple-500 transition-all"
              style={{ width: `${(activeStep) * 25}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* step 1 icon */}
            <div 
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setActiveStep(1)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-purple-500 text-white' : 'bg-white'}`}>
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
                  className="lucide lucide-wallet h-4 w-4"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </div>
              <span className={`text-sm font-medium ${activeStep >= 1 ? 'text-purple-500' : 'text-muted-foreground'}`}>Connect</span>
            </div>
            
            {/* step 2 icon */}
            <div 
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setActiveStep(2)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-purple-500 text-white' : 'bg-white'}`}>
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
                  className="lucide lucide-shield h-4 w-4"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <span className={`text-sm font-medium ${activeStep >= 2 ? 'text-purple-500' : 'text-muted-foreground'}`}>Scan</span>
            </div>
            
            {/* step 3 icon */}
            <div 
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setActiveStep(3)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-purple-500 text-white' : 'bg-white'}`}>
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
                  className="lucide lucide-file-check h-4 w-4"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="m9 15 2 2 4-4"></path>
                </svg>
              </div>
              <span className={`text-sm font-medium ${activeStep >= 3 ? 'text-purple-500' : 'text-muted-foreground'}`}>Results</span>
            </div>
            
            {/* step 4 icon */}
            <div 
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setActiveStep(4)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 4 ? 'bg-purple-500 text-white' : 'bg-white'}`}>
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
                  className="lucide lucide-users h-4 w-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className={`text-sm font-medium ${activeStep >= 4 ? 'text-purple-500' : 'text-muted-foreground'}`}>Waitlist</span>
            </div>
          </div>
        </div>

        {/* Conditional rendering based on activeStep */}
        {activeStep === 1 && (
          <div className="text-start space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Connect Your Wallet</h2>
              <p className="text-muted-foreground">
                Choose your preferred wallet to begin the security verification
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#deddddb4] flex items-center justify-center">
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
                        className="lucide lucide-wallet w-6 h-6 text-primary"
                      >
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold uppercase font-oswald">Trust Wallet</h3>
                      <p className="text-sm text-muted-foreground">
                        Universal Wallet
                      </p>
                    </div>
                  </div>
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground hover:bg-black text-white h-10 px-4 py-2 bg-purple-500"
                    onClick={() => setActiveStep(2)}
                  >
                    Verify Now
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
                      className="lucide lucide-arrow-right ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-[#ffffff52]">
              <div className="flex gap-4">
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
                  className="lucide lucide-shield w-8 h-8 text-primary"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div className="text-start ">
                  <h3 className="font-semibold mb-1 uppercase font-oswald">
                    Your security is our priority.
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We only require view access to analyze your wallet. No
                    transactions or approvals needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="text-start space-y-6 grid gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Scan your wallet</h2>
              <p className="text-muted-foreground">
                start scanning your wallet to get your security score
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 flex gap-6 justify-center flex-col items-center">
                <div className="p-2 border-2 border-gray-400 w-fit rounded-full">
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
                    className="lucide lucide-shield h-12 w-12"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  role="progressbar"
                  data-state="indeterminate"
                  data-max="100"
                  className="relative h-2 w-full overflow-hidden rounded-full bg-secondary"
                >
                  <div
                    data-state="indeterminate"
                    data-max="100"
                    className="h-full w-full flex-1 bg-purple-500 transition-all"
                  ></div>
                </div>
                <p>Wrfnirnfrnnecwew</p>
              </div>
            </div>
            <button 
              className="inline-flex items-center justify-center place-self-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-black text-white h-10 px-4 py-2 bg-purple-500"
              onClick={() => setActiveStep(3)}
            >
              Start Scan
            </button>
          </div>
        )}

        {activeStep === 3 && (
          <div className="text-start space-y-0 grid gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Scan Complete</h2>
              <p className="text-muted-foreground">
                Your wallet <br /> Wrfnirnfrnnecwew has been successfully analyzed
              </p>
            </div>
            <div className="space-y-0">
              <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 flex gap-4 justify-center flex-col items-center">
                <div className="p-2 h-24 w-24 border-4 border-purple-600  rounded-full grid justify-center items-center">
                  <p className="font-bold text-3xl text-purple-600">90</p>
                </div>

                <div className="grid gap-2 w-full">
                  <p className="w-full grid justify-between grid-flow-col">Transaction Analyzed:
                    <span className="font-semibold">Secure Wallet</span>
                  </p>
                  <p className="w-full grid justify-between grid-flow-col">Clean Transaction Rate:
                    <span className="font-semibold">Excelient</span>
                  </p>
                  <p className="w-full grid justify-between grid-flow-col">Risk Level:
                    <span className="font-semibold text-green-500">Medium</span>
                  </p>
                </div>

                <p>*The reports are sourced directly from the blockchain. If TRX was deducted for the test due to high demand, it will be refunded within 24 hours. Typically, we cover the gas fees for the test.</p>
              </div>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col gap-4">
              <button className="inline-flex items-center justify-center place-self-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-black text-white h-10 px-4 py-2 bg-purple-500">
                Download Report
              </button>
              <button 
                className="inline-flex items-center justify-center place-self-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-black hover:text-white text-black h-10 px-4 py-2 bg-white"
                onClick={() => setActiveStep(4)}
              >
                Download Certificate
              </button>
            </div>
          </div>
        )}

        {activeStep === 4 && (
          <div className="text-start grid gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 uppercase font-oswald">Welcome to the waitlist!</h2>
              <p className="text-muted-foreground">
                you are now in line for exclusive access to gas-free transactions.we'll notify you when it's your turn to experience the future of USDT trading
              </p>
            </div>

            <div className="text-center rounded-lg border bg-white text-card-foreground shadow-sm p-4 grid grid-flow-col gap-2 justify-between md:justify-around flex-col items-center">
              <p className="grid ">Your Position <span className="text-purple-600 text-2xl font-semibold">#522500</span></p>
              <p className="grid ">Estimated Wait Time <span className="text-purple-600 text-2xl font-semibold"> ~8-10 days</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connectwallet;