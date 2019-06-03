const initialState = {
    activeMenuItem:'map'
};
function activeMenuReducer(state=initialState,action){
    let nextState;
    switch (action.type) {
        case 'TOGGLE_ACTIVE_MENU_ITEM':
            nextState={
                activeMenuItem:action.value,
            }
            console.log(action.value)
            break;
    
        default:
            return state;
    }
    return nextState || state;
};
export default activeMenuReducer;