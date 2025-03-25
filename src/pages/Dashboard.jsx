import React from 'react'

import ConnectWallet from '../components/connect-your-wallet';
import Header from '../components/header';

const Dashboard = () => {
  return (
    <div className='bg-gradient-to-r from-[#f7c6a3] via-[#f4a3b5] to-[#a3d8f7] bg-[length:400%_400%] animate-gradient'>
    <Header/>
      <div className='h-screen content-center'>
        <ConnectWallet/>
      </div>
    </div>
  )
}

export default Dashboard
