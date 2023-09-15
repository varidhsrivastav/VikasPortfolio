import './App.css';
import "./Componants/buttons/buttons.css";
import "../node_modules/@flaticon/flaticon-uicons/css/all/all.css"
import FAQ from './Componants/FAQs/FAQ'
import Testimonilas from './Componants/Testimonials/Testimonilas'
import Work from './Componants/WhatWeOffer/WhatweOffer';
import StandFor from './Componants/SatndFor/StandFor';
import JoinCard from './Componants/JoinCard/JoinCard';
import Intro from './Componants/Intro/Intro';
import FAQspalne from './Componants/FAQsPlane/FAQspalne';
import Footer from './Componants/Footer/Footer';


function App() {

  return (
    <>
    <Intro/>
    <StandFor/>
    <Work/>
    <Testimonilas/>
    {/* <FAQ/> */}
    <FAQspalne/>
    <JoinCard/>
    <Footer/>
    </>
  )
}

export default App
