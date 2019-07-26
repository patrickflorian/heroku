import { locationConstants } from '../constants';
const initialState ={
  items:[
    {id:1,latitude: 5.4429218, longitude: 10.068471199999976,description:'Universite de Dschang, Cameroon',classroom:'FSEG '},
    {id:2,latitude:5.445715, longitude:10.067634,description:'Universite de Dschang, Cameroon',classroom:'Restaurant universitaire'},
    {id:3,latitude: 5.440038, longitude: 10.071123,description:'Universite de Dschang, Cameroon',classroom:'Amphi 600,Campus B'},  ],
  update:{location:{}}
};
export function locations(state = initialState, action) {
  switch (action.type) {
    case locationConstants.ADD_REQUEST:
        return {
          loading: true,
          update:{location:{}}
        };
      case locationConstants.ADD_SUCCESS:  
        const nextitem=state.items;
        nextitem.push(action.location)
        return{...state,
          items:nextitem
        };
      case locationConstants.ADD_FAILURE:
        return{
          items: state.items,
          error:action.error,
          loading: false
        };
      case locationConstants.ADD_ACTION:
        return{
          action:"add",
          items: state.items,
          update:{location:{}}
        };
      case locationConstants.UPDATE_REQUEST:
        return {
          ...state,
          loading: true,
          
        };
      case locationConstants.UPDATE_SUCCESS:
        return {
          ...state,
          items: state.items.map(location =>
            location.id === action.location.id
              ? action.location
              : location
          ),
          loading: false
        };
      case locationConstants.UPDATE_FAILURE:
        return {
          ...state,
          items: state.items,
          error: action.error,
          loading: false
        };
      case locationConstants.UPDATE_ACTION:
        return {
          items: state.items,
          action:"update",
          update: {location:action.location}
        };
    case locationConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case locationConstants.GETALL_SUCCESS:
      return {
        items: action.locations
      };
    case locationConstants.GETALL_FAILURE:
      return { 
        ...state,
        error: action.error,
        loading: false
      };
    case locationConstants.DELETE_REQUEST:
      // add 'deleting:true' property to location being deleted
      return {
        ...state,
        items: state.items.map(location =>
          location.id === action.id
            ? { ...location, deleting: true }
            : location
        )
      };
    case locationConstants.DELETE_SUCCESS:
      // remove deleted location from state
      return {
        items: state.items.filter(location => location.id !== action.id)
      };
    case locationConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to location 
      return {
        ...state,
        items: state.items.map(location => {
          if (location.id === action.id) {
            // make copy of location without 'deleting:true' property
            const { deleting, ...locationCopy } = location;
            // return copy of location with 'deleteError:[error]' property
            return { ...locationCopy, deleteError: action.error };
          }

          return location;
        })
      };
    default:
      return state;
  }
}