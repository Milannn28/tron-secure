import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import HowTronsecureWork from './components/how-tronsecure-work';
import Trusted from './components/trusted';
import PlatformFeatures from './components/platform-features';
import WalletSecurity from './components/wallete-security';
import GasFreeFeature from './components/gas-free-feature';
import FrenquentyAskedQuestions from './components/frenquenty-asked-questions';
import UsdtTrading from './components/usdt-trading';
import Footer from './components/footer';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
        <Header />
        <Homepage />
        <HowTronsecureWork />
        <Trusted />
        <PlatformFeatures />    
        <WalletSecurity />  
        <GasFreeFeature/>
        <FrenquentyAskedQuestions/>
        <UsdtTrading/>
        <Footer/>
        
    </div>
  );
}

export default App;
