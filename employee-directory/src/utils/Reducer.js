// having our initial state and our action types, using dispatch and specifying each of our action types to be executed
import { SORT_EMPLOYEES_ASCEND, SORT_EMPLOYEES_DESCEND, CLEAR_SEARCH, SEARCH_EMPLOYEES, ALL_EMPLOYEES } from "./Variables"

export const reducer = (state, action) => {
    switch (action.type) {
        case SEARCH_EMPLOYEES:
            // if the input field is an empty string, return to the initial state else, filter employee results
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
            
        case SORT_EMPLOYEES_ASCEND:
            // set our employees firstname in ascending order from A to Z
            return {
                ...state,
                selectedEmployees:
                state.employees.sort((a,b) => (a.firstname > b.firstname ? 1: -1))
            };
            case SORT_EMPLOYEES_DESCEND:
                // set our employees firstname in descending order from Z to A
            return {
                ...state,
                selectedEmployees:
                state.employees.sort((a,b) => (b.firstname > a.firstname ? 1: -1))
            };
           
        
        case ALL_EMPLOYEES:
            // loads the results of our employees
            return {
                employees: action.payload,
                selectedEmployees: action.payload
            };
        
        case CLEAR_SEARCH:
            // when the user clears the input field, return to initial state displaying all the employees
            return {
                ...state,
                selectedEmployees: state.employees
            };

        default:
            throw new Error(`Invalid action type: ${action.type}`);
        
    };
};
