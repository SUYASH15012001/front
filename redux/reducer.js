import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from './actionTypes';

//initializing state
const initialState = {
  users: [],
  loadingUsers: false,
  err: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loadingUsers: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loadingUsers: false,
        err: action.payload,
      };
    // case INCREASE_BURGER:
    //   return {
    //     ...state,
    //     numberOfBurger: state.numberOfBurger + action.payload,
    //   };
    // case DECREASE_BURGER:
    //   return {
    //     ...state,
    //     numberOfBurger: state.numberOfBurger - 1,
    //   };
    default:
      return state;
  }
};

export default userReducer;
