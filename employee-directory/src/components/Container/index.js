import React from "react";
import "./style.css";
import Table from "../Table";

// Container for the employee table
function Container() {
  return (
    <div className="container table-responsive">
       <Table />
    </div>
    );
};

export default Container;