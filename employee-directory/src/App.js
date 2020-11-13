// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
