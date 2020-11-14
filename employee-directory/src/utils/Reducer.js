
export const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            if(action.payload === "") {
                return {
                    ...state,
                    selectedEmployees: 
                        state.employees}
            } else if(action.payload !== "") {
                return {
                    ...state,
                    selectedEmployees: 
                        state.employees.filter(employee => {
                        const name = employee.firstname + " " + employee.lastname;
                        return name.toLowerCase().includes(action.payload.toLowerCase());
                    })
                };
            };
            break;
            
        case "ascend":
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
