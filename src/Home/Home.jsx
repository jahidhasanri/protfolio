import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Introduction from '../components/Introduction';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skils';
import Educational from '../components/Educational';
import Projects from '../components/Projects';
import ContactInfo from '../components/ContactInfo';
import Robot from '../components/Robot';


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#140e24] via-[#41256f] to-[#340a4f]">
      <Navbar />
      <div className="min-h-[calc(100vh-500px)]  flex items-center justify-center">
     <Introduction></Introduction>
      </div>
      <AboutMe></AboutMe>
      {/* <Robot></Robot> */}
      <Skills></Skills>
      <Projects></Projects>
      <Educational></Educational>
      <ContactInfo></ContactInfo>
      <Footer />
    </div>
  );
};

export default Home;
