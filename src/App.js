import React from 'react'
import { About, Contact, Explore, Feedback, GetStarted, Hero, Insights,  WhatsNew, Work, World } from './sections';
import { Footer, Navbar } from './components';
import CookieConsent from "react-cookie-consent";
const App = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
      <Work />
    
    </div>
    <World />
    
    <div className="relative">
    <Feedback />
      <div className="gradient-04 z-0" />
    <Contact />
    </div>
    <Footer />
    <CookieConsent
  location="bottom"
  buttonText="Povolit"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  Tato webová stránka využívá cookies.{" "}
  <span style={{ fontSize: "10px" }}></span>
</CookieConsent>
  </div>
  )
}

export default App