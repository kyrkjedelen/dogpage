import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import About from "./components/about/About.tsx";
import Favourites from "./components/favourites/Favourites.tsx";
import NotFound from "./components/not-found/NotFound.tsx";
import IndexPage from "./components/index-page/IndexPage.tsx";
import Breeds from "./components/breeds/Breeds.tsx";

import "./App.css";

const App:React.FC = () => {
  return <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dogpage" element={<IndexPage />} />
          <Route path="/dogpage/about" element={<About />} />
          <Route path="/dogpage/favourites" element={<Favourites />} />
          <Route path="/dogpage/breeds" element={<Breeds />} />
          <Route path="/dogpage*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>;
}

export default App
