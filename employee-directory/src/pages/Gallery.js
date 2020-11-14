import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import Container from "../components/Container";
// import Table from "../components/Table";
// import TableRow from "../components/TableRow";

function Gallery() {
    const { store, dispatch } = useContext(EmployeeContext);

    const [employees, setEmployees] = useState([]);
    // const [employee, setEmployee] = useState({});
  

    // function handleSubmit(e) {
    //     e.preventDefault();
        
    //   }
    useEffect(() => {
        loadEmployees();
    },[]);

    function loadEmployees() {
        API.getEmployeesList()
            .then(employees => {
                // event.preventDefault();  
                setEmployees(employees);
                dispatch({type: "loading", payload: employees})
                // setEmployee(employees[0]);
            })
            .catch(err => console.log(err));
  };

//   console.log(employees)
//   console.log(employee)

  return (
    // <EmployeeContext.Provider value={{ employees }}>
      <div>
          <Container />
      </div>
    // </EmployeeContext.Provider>
  );
};

export default Gallery;