import React from "react";
import Table from "../Table";
import "./style.css";

// Container for the employee table
function Container() {
  return (
    <div className="container table-responsive tableContainer">
       <Table />
    </div>
    );
};

export default Container;