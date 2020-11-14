import React from "react";
import "./style.css";

// This is creating each row for each employee with all their data
function TableRow({image, firstName, lastName, email, phone, dob}) {
  return (
    <tr>
        <td>
            <img src={image} alt={firstName}></img>
        </td>
        <td>{firstName} {lastName}</td>
        <td>
            <a className="employeeEmail" href={`mailto:${email}`}>{email}
            </a>
        </td>
        <td>
            <a className="employeePhone" href={`tel:${phone}`}>{phone}
            </a>
        </td>
        <td>{dob}</td>
    </tr>
    );
};

export default TableRow;
