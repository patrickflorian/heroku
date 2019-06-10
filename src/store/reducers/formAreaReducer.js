const initialState=false
function activeMenuReducer(state=initialState,action){
    let nextState;
    switch (action.type) {
        case 'TOGGLE_FORM_AREA_VISIBILITY':
            console.log(action.value)
            nextState=action.value
            break;

        default:
            return state;
    }
    return nextState;
};
export default activeMenuReducer;