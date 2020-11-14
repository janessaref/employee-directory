import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";
import  { SORT_EMPLOYEES_ASCEND, SORT_EMPLOYEES_DESCEND }  from "../../utils/Variables";

// Main Table Header of the table and allows user to sort employees by first name
function TableHeader() {
    const { dispatch } = useContext(EmployeeContext);
  return (
    <thead>
        <tr className="tableHeader">
            <th scope="col">Image</th>
            <th scope="col" className="employeeName">Name
                <button 
                    className="btn btn-dark ascend" 
                    onClick={() => dispatch({type: SORT_EMPLOYEES_ASCEND, payload: "name"})}>
                        (A-Z)
                </button>
                <button 
                    className="btn btn-dark descend" 
                    onClick={() => dispatch({type: SORT_EMPLOYEES_DESCEND, payload: "name"})}>
                        (Z-A)
                </button>
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date of Birth</th>
        </tr>
    </thead>
    );
};

export default TableHeader;