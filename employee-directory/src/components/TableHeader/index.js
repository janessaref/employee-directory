import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function TableHeader() {
    const { dispatch } = useContext(EmployeeContext);
  return (
    <thead>
        <tr>
        <th scope="col">Image</th>
        <th scope="col"><button className="btn btn-dark" onClick={() => dispatch({type: "sort", payload: "name"})}>Name</button></th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Date of Birth</th>
        </tr>
    </thead>
    );
};

export default TableHeader;