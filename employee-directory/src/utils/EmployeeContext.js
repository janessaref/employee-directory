import React from "react";

const EmployeeContext = React.createContext({
    firstname: "",
    lastname: "",
    email: "",
    picture: "",
    phone: "",
    dob: ""
});
  
  export default EmployeeContext;