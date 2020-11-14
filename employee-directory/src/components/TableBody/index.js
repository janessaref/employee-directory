import TableRow from "../TableRow";
import "./style.css";
import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";

function TableBody() {
    const { store } = useContext(EmployeeContext);
  return (
    <tbody>
        {store.selectedEmployees.map(employee => <TableRow key={employee.name} td={employee}/>)}
    </tbody>
    );
};

export default TableBody;
