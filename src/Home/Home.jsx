import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Introduction from '../components/Introduction';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skils';
import Educational from '../components/Educational';
import Projects from '../components/Projects';
import ContactInfo from '../components/ContactInfo';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-500px)] bg-gray-100 flex items-center justify-center">
     <Introduction></Introduction>
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Educational></Educational>
      <Projects></Projects>
      <ContactInfo></ContactInfo>
      <Footer />
    </div>
  );
};

export default Home;
