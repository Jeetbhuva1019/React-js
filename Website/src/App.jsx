import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Categories from './Components/Categories';
import GlobalSale from './Components/GlobalSale';
import PopularProducts from './Components/PopularProducts';
import Brands from './Components/Brands';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Categories />
      <GlobalSale />
      <PopularProducts />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
