const initialState = {
    isAuthenticated: false,
}; 
function authenticate() {
  let next_state = {...initialState}
  next_state.isAuthenticated = true 
  return next_state

};
function signout() {
  let next_state = {...initialState}
  next_state.isAuthenticated = false 
  return next_state
}
function authReducer(state=initialState,action){
    let nextState;
    switch (action.type) {
        case 'AUTHENTICATE' :
          if(action.value === "login"){
              nextState = authenticate()
              setTimeout(null, 100);
          }
          if(action.value==="logout"){
            nextState = signout()
            setTimeout(null, 100);
          }
        break;
    
        default:
            return state;
    }
    return nextState || state;
};
export default authReducer;