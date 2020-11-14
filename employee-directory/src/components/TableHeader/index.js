import React from "react";
import "./style.css";

function TableHeader() {
  return (
    <thead>
        <tr>
        <th scope="col">Image</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Date of Birth</th>
        </tr>
    </thead>
    );
};

export default TableHeader;