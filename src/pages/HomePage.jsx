import React from 'react'
import Header from "../components/header";
import HowTronsecureWork from "../components/how-tronsecure-work";
import Trusted from "../components/trusted";
import PlatformFeatures from "../components/platform-features";
import WalletSecurity from "../components/wallet-security";
import GasFreeFeature from "../components/GasFreeFeature";
import FrenquentyAskedQuestions from "../components/frenquenty-asked-questions";
import UsdtTrading from "../components/usdt-trading";
import Footer from "../components/footer";
import Homepage from "../components/homepage";
const HomePage = () => {
  return (
    <>
    <Header />
        <Homepage />
        <HowTronsecureWork />
        <Trusted />
        <PlatformFeatures />
        <WalletSecurity />
        <GasFreeFeature />
        <FrenquentyAskedQuestions />
        <UsdtTrading />
        <Footer />
    </>
  )
}

export default HomePage
