import './App.css';
import "./Componants/buttons/buttons.css";
import "../node_modules/@flaticon/flaticon-uicons/css/all/all.css"
import Testimonilas from './Componants/Testimonials/Testimonilas'
import Work from './Componants/WhatWeOffer/WhatweOffer';
import StandFor from './Componants/SatndFor/StandFor';
import JoinCard from './Componants/JoinCard/JoinCard';
import Intro from './Componants/Intro/Intro';
import FAQspalne from './Componants/FAQsPlane/FAQspalne';
import Footer from './Componants/Footer/Footer';
import TradPartner from './Componants/TradPartner/TradPartner';
import WhatsappRev from './Componants/WhatsappRe/WhatsappRev';
import Post from './sendPost/Post';


function App() {

  return (
    <div className='overflow-hidden'>
    <Intro/>
    <Post/>
    <StandFor/>
    <Work/>
    <TradPartner/>
    <WhatsappRev/>
    <Testimonilas/>
    <FAQspalne/>
    <JoinCard/>
    <Footer/>
    </div>
  )
}

export default App
