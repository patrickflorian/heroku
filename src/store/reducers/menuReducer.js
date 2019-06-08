const initialState = 'map'

function activeMenuReducer(state=initialState,action){
    let nextState;
    switch (action.type) {
        case 'TOGGLE_ACTIVE_MENU_ITEM':
            nextState=action.value
            break;
        /* case 'AUTHENTICATE' :
          if(action.value === "login"){
              nextState = authenticate()
              setTimeout(action.redirect, 100);
          }
          if(action.value==="logout"){
            nextState = signout()
            setTimeout(action.redirect, 100);
          }
        break; */
    
        default:
            return state;
    }
    return nextState || state;
};
export default activeMenuReducer;