// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Container from "./components/Container";
// import TableHeader from "./components/TableHeader";
// import TableRow from "./components/TableRow";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Container />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
