import React from "react";
import "./style.css";

function TableHeader() {
  return (
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        </tr>
    </thead>
    );
};

export default TableHeader;