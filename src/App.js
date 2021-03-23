import React, { useState } from "react";
import test from "./jsons/test.json";
import "./App.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import BurgerMenu from "./components/BurgerMenu";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import Market from "./components/Market";
import People from "./components/People";
import SlickSlider_1 from "./components/SlickSlider_1";
import SlickSlider_2 from "./components/SlickSlider_2";
import SlickSlider_3 from "./components/SlickSlider_3";
import HomeSubMenu from "./components/HomeSubMenu";
// import DemoMenu from "./components/DemoMenu";
function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      <MainVideo />
      <HomeSubMenu />
      <Brand />

      <SlickSlider_1 />
      <Market />
      <SlickSlider_2 />
      <People />
      <SlickSlider_3 />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
