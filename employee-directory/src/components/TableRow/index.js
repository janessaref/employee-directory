import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function TableRow() {
    const { store, dispatch } = useContext(EmployeeContext);
    console.log({table: store})
  return (
    <tr>
        <td><img src={store.employees[0].picture}></img></td>
        <td>{store.employees[0].firstname}</td>
        <td>{store.employees[0].lastname}</td>
        <td>{store.employees[0].email}</td>
        <td>{store.employees[0].phone}</td>
        <td>{store.employees[0].dob}</td>
    </tr>
    );
};

export default TableRow;

// Image, Name, Phone, Email, DOB