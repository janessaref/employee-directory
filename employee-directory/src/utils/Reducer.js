
export const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return {
                ...state,
                selectedEmployees: 
                    state.employees.filter(employee => {
                    const name = employee.firstname + " " + employee.lastname;
                    return name.toLowerCase().includes(action.payload.toLowerCase());
                })
            };
        case "ascend":
            // const employee = state.employees.sort((a,b) => (a.firstname > b.firstname ? 1: -1))

            // console.log(employee)
            return {
                ...state,
                selectedEmployees:
                state.employees.sort((a,b) => (a.firstname > b.firstname ? 1: -1))
            };
            case "descend":

            return {
                ...state,
                selectedEmployees:
                state.employees.sort((a,b) => (b.firstname > a.firstname ? 1: -1))
            };
           
        
        case "loading":
            return {
                employees: action.payload,
                selectedEmployees: action.payload
            };
        
        case "clear":
            return {
                ...state,
                selectedEmployees: state.employees
            }
    }
};
