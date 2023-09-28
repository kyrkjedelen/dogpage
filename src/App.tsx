import React from "react"
import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import DogGenerator from './components/dog-generator/DogGenerator';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/about/About";
import Breeds from "./components/breeds/Breeds";
import Favourites from "./components/favourites/Favourites";

const App:React.FC = () => {
  return <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DogGenerator />} />
          <Route path="/about" element={<About />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>;
}

export default App
