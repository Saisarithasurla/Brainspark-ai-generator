import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from './pages/Terms';
import Privacy from "./pages/Privacy";
import Generate from "./pages/Generate"
import Pagenotfound from './pages/Pagenotfound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={< Terms/>} />
         <Route path="/privacy" element={< Privacy/>} />
         <Route path="/generate" element={<Generate/>}/>
         <Route path='*' element={<Pagenotfound />}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
