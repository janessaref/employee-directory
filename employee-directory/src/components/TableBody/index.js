import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import TableRow from "../TableRow";

// Table Body component that is wrapped around the table rows for each employee
function TableBody() {
    // importing store to grab employee data and mapping through each employee to display their information
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
                dob={new Date(employee.dob).toLocaleDateString()}
            />
        )}
    </tbody>
    );
};

export default TableBody;
