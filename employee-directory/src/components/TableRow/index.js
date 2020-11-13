import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function TableRow() {
    const { employee } = useContext(EmployeeContext);
  return (
    <tr>
      <td>{employee.firstname} {employee.lastname}</td> 
      <td>{employee.email}</td>
      <td>{employee.image}</td>
      <td>{employee.phone}</td>
      <td>{employee.dob}</td>
    </tr>
    );
};

export default TableRow;

// Image, Name, Phone, Email, DOB