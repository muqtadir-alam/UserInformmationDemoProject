import { combineReducers } from "redux";
import { UserReducer, selectedUserReducer } from "./UserReducer";


export const Reducers = combineReducers({
  AllUsers: UserReducer,
  User: selectedUserReducer,
     
});