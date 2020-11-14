import "./style.css";
import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";

function Header() {
    const { store, dispatch } = useContext(EmployeeContext);
    console.log({header: store})
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center">Employee Directory</h1>
    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
  </div>
</div>
  );
}

export default Header;