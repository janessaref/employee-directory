import React from "react";
// import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function TableRow({image, firstName, lastName, email, phone, dob}) {
    // const { store, dispatch } = useContext(EmployeeContext);
    // console.log({table: store})
  return (
    <tr>
        <td><img src={image}></img></td>
        <td>{firstName} {lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{dob}</td>
    </tr>
    );
};

export default TableRow;

// Image, Name, Phone, Email, DOB