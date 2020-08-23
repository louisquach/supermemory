const INITIAL_STATE = {
    hidden: false
}

const toggleAction = () => ({type: "TOGGLE_CHANGE"});

export const ToggleReducer = (state = INITIAL_STATE, toggleAction) => { 
    switch (toggleAction.type) {
        case "TOGGLE_CHANGE":
            return ({...state, hidden: !state.hidden})
    
        default:
            return state;
    }    
}

export default toggleAction;