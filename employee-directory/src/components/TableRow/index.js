import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function TableRow() {
    const { employees } = useContext(EmployeeContext);
    console.log(useContext(EmployeeContext))
    console.log({employees})
  return (
    <tr>
    {/* <td>{employee.firstname} {employee.lastname}</td> 
      <td>{employee.email}</td>
      <td>{employee.picture}</td>
      <td>{employee.phone}</td> */}
      {/* <td>{employees.dob}</td> */}

      <td>name1</td>
      <td>name1</td>
      <td>name1</td>
      <td>name1</td>
      <td>name1</td>
    </tr>
    );
};

export default TableRow;

// Image, Name, Phone, Email, DOB