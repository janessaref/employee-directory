import React from "react";
import "./style.css";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

function Table() {
  return (
    <table className="table table-responsive table-hover table-dark">
        <TableHeader />
        <TableRow />
    </table>
    );
};

export default Table;