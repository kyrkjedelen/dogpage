import React from "react"
import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import DogGenerator from './components/dog-generator/DogGenerator';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/about/About";

const App:React.FC = () => {
  return <>
      <BrowserRouter>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<DogGenerator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>;
}

export default App
