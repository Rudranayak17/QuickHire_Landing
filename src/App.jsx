import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import SignupSection from "./components/SignupSection";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <SignupSection />
      <Footer />
    </>
  );
};

export default App;
