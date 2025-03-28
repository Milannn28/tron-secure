
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WalletVerification = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const navigate = useNavigate();

  const handleCheck = () => {
    // Simple validation - 111 is correct, 000 is wrong
    const isValid = walletAddress === "111";
    setVerificationResult(isValid);
  };

  const handleReset = () => {
    setWalletAddress("");
    setVerificationResult(null);
  };

  const handleSecureWallet = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container md:max-w-xl mx-auto px-4 md:px-10 bg-white/20 rounded-3xl py-12 backdrop-blur-sm max-w-[96%]">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold font-oswald uppercase">Wallet Verification</h1>
        <p className="text-sm text-gray-500">
          Check if a wallet is valid and if it has a valid certificate
        </p>
      </div>

      {verificationResult === null ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-sm font-medium"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <button 
            onClick={handleCheck}
            className="bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-slate-500 h-10 px-4 py-2"
          >
            Check
          </button>
        </div>
      ) : verificationResult ? (
        // Right section (shown when input is "111")
        <div className="w-full flex flex-col items-center gap-4">
          <p className="bg-white/10 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 text-green-500">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </p>          
          <p className="sm:text-lg font-medium">Congratulations! Your wallet is secure!</p>
          <button 
            onClick={handleReset}
            className="w-max bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-slate-500 h-10 px-4 py-2"
          >
            Reset
          </button>
        </div>
      ) : (
        // Wrong section (shown when input is anything without 111)
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="bg-white/10 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6 text-red-500">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </p>
          <p className="sm:text-lg font-medium">Your wallet is not secure, please use the wallet verification tool to secure your wallet</p>
          <div className="grid grid-flow-row md:grid-flow-col gap-3 w-full md:grid-cols-2 justify-center items-center">
            <button 
              onClick={handleSecureWallet}
              className="bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-slate-500 h-10 px-4 py-2"
            >
              Secure wallet 
            </button>
            <button 
              onClick={handleReset}
              className="bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-slate-500 h-10 px-4 py-2"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletVerification;