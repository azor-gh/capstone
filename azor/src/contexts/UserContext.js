import { createContext, useReducer } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.payload,
      };
    case "CREATE_USER":
      return {
        users: [action.payload, state.users],
      };
    case "DELETE_USER":
      return {
        users: state.users.filter((user) => user._id !== action.payload._id),
      };
    case "UPDATE_USER":
      const newUser = state.users.filter(
        (user) => user._id !== action.user._id
      );
      return {
        users: newUser,
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { users: null });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
