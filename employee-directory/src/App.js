// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
