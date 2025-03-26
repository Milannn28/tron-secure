import React from 'react'

import Header from '../components/header';
import Walletverification from './../components/wallet-verification';

const Verification = () => {
  return (
    <div className='bg-gradient-to-r from-[#f7c6a3] via-[#f4a3b5] to-[#a3d8f7] bg-[length:400%_400%] animate-gradient'>
    <Header/>
      <div className='h-screen content-center'>
        <Walletverification/>
      </div>
    </div>
  )
}

export default Verification