// import logo from './logo.svg';
import './App.css';
import React, { useReducer } from "react";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Search from "./components/Search";
import Container from "./components/Container";
import EmployeeContext from './utils/EmployeeContext';
import { reducer } from "./utils/Reducer";
// import TableHeader from "./components/TableHeader";
// import TableRow from "./components/TableRow";

function App() {

  const initialState = {
    employees: [],
    selectedEmployees: []
  }

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <EmployeeContext.Provider value={{store, dispatch}}>
        <Header />
      <Search />
      <Container />
      <Gallery />
      {/* <Footer /> */}
      </EmployeeContext.Provider>
     
    </div>
  );
}

export default App;
