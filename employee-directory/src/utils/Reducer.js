
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
        case "sort":
            return {
                ...state,
                selectedEmployees:
                state.employees.sort()
            }
        
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
