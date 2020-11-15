import './App.css';
import React, { useReducer } from "react";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeContext from './utils/EmployeeContext';
import { reducer } from "./utils/Reducer";

function App() {

  // setting our initial state
  const initialState = {
    employees: [],
    selectedEmployees: []
  };

  // setting our store to the initial state and our dispatch to the actions stored in our reducer file
  const [store, dispatch] = useReducer(reducer, initialState);

  // wrapping our other children in the provider to give it access to our values store and dispatch globally
  return (
    <div className="App">
      <EmployeeContext.Provider value={{store, dispatch}}>
        <Header />
        <Search />
        <Gallery />
      </EmployeeContext.Provider>
     
    </div>
  );
}

export default App;
