
import React, { useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import ChatBot from 'react-simple-chatbot';
import "./App.css"; 
function App() {
  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to our shop",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name!",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please select your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "React",   
          label: "React",        
          trigger: "React",       
        },       
        { value: "Angular", label: "Angular", trigger: "Angular" },       
      ],       
    },       
    {       
      id: "React",       
      message:        
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",        
      end: true,       
    },       
    {       
      id: "Angular",       
      message:       
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",       
      end: true,       
    },       
  ]; 
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Box className="App" height="100vh">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer /> 
      </Router>

      {/* Floating Chat Button */}
      <button
        className={`floating-chat-button ${isChatOpen ? "active" : ""}`}
        onClick={toggleChat}
      >
        Chat
      </button>
      {/* Chatbox */}
      {isChatOpen && (
        <div className="chatbox-container">
          <ChatBot steps={steps} />
        </div>
      )}
    </Box>
  );
}

export default App;
