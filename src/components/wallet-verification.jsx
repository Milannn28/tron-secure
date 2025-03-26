import React from "react";

const WalletVerification = () => {
  return (
    <div className="container md:max-w-xl mx-auto px-4 md:px-10 bg-white/20 rounded-3xl py-12 backdrop-blur-sm max-w-[96%]">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold font-oswald">Wallet Verification</h1>
        <p className="text-sm text-gray-500">
          Check if a wallet is valid and if it has a valid certificate
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-sm font-medium"
          placeholder="Enter wallet address"
          value=""
        />
        <button class=" bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-slate-500 h-10 px-4 py-2">
          Check
        </button>
      </div>
    </div>
  );
};

export default WalletVerification;
