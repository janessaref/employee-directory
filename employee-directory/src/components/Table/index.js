import React from "react";
import "./style.css";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

function Table() {
  return (
    <table className="table table-hover table-striped table-dark">
        <TableHeader />
        <TableBody />
    </table>
    );
};

export default Table;