import TableRow from "../TableRow";
import "./style.css";
import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";

function TableBody() {
    const { store } = useContext(EmployeeContext);
  return (
    <tbody>
        {store.selectedEmployees.map((employee, i) => 
            <TableRow 
                key={i} 
                image={employee.picture}
                firstName={employee.firstname}
                lastName={employee.lastname}
                email={employee.email}
                phone={employee.phone}
                dob={employee.dob}
            />
        )}
    </tbody>
    );
};

export default TableBody;
