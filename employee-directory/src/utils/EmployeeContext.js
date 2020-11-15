import React from "react";

// exporting our employee context
const EmployeeContext = React.createContext({
    store: {},
    dispatch: () => {
        console.log("must implement context");
    }
});
  
  export default EmployeeContext;