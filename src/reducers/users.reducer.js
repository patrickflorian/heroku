import { userConstants } from '../constants';
const initialState ={
  items:[
    {id:1,password:'admin',email:'noumbissipatrick@gmail.com',role:'administrator'},
    {id:2,password:'admin',email:'vaillantyomen@gmail.com',role:'administrator'},
    {id:3,password:'admin',email:'mpombiezejordan@gmail.com',role:'collector'}
  ],
  update:{user:{}}
};
export function users(state = initialState /*{}*/, action) {
  switch (action.type) {
    case userConstants.ADD_REQUEST:
        return {
          loading: true,
          update:{user:{}}
        };
      case userConstants.ADD_SUCCESS:  
        const nextitem=state.items;
        nextitem.push(action.user)
        return{...state,
          items:nextitem
        };
      case userConstants.ADD_FAILURE:
        return{
          items: state.items,
          error:action.error,
          loading: false
        };
      case userConstants.ADD_ACTION:
        return{
          action:"add",
          items: state.items,
          update:{user:{}}
        };
      case userConstants.UPDATE_REQUEST:
        return {
          ...state,
          loading: true,
          
        };
      case userConstants.UPDATE_SUCCESS:
        return {
          ...state,
          items: state.items.map(user =>
            user.id === action.user.id
              ? action.user
              : user
          ),
          loading: false
        };
      case userConstants.UPDATE_FAILURE:
        return {
          ...state,
          items: state.items,
          error: action.error,
          loading: false
        };
      case userConstants.UPDATE_ACTION:
        return {
          items: state.items,
          action:"update",
          update: {user:action.user}
        };
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        ...state,
        error: action.error,
        loading: false
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state;
  }
}