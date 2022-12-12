import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import CategoryAndPage from "./components/CategoryAndPags";
import Carousal from "./components/Carousal";

function App() {
  return (
<>
<Header img="logoOne.png" className="logo1" list1="Moters" list2="property"/>
<Navbar img="logo2.png" className="logo2" placeholder1="Pakistan" placeholder2="Find Cars, Mobile Phones and more..."/>
<CategoryAndPage/>
<Carousal img="https://images.olx.com.pk/thumbnails/310378076-800x600.webp"/>
</>
  );
}

export default App;
