import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function TableHeader() {
    const { dispatch } = useContext(EmployeeContext);
  return (
    <thead>
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Name
        <button className="btn btn-dark" onClick={() => dispatch({type: "ascend", payload: "name"})}>^</button>
        <button className="btn btn-dark" onClick={() => dispatch({type: "descend", payload: "name"})}>Down</button>
        </th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Date of Birth</th>
        </tr>
    </thead>
    );
};

export default TableHeader;