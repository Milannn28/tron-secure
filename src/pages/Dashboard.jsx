import React from 'react'

import ConnectWallet from '../components/connect-your-wallet';
import Header from '../components/header';

const Dashboard = () => {
  return (
    <div>
    <Header/>
      <div className='h-screen content-center'>
        <ConnectWallet/>
      </div>
    </div>
  )
}

export default Dashboard
