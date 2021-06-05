import { ActionType } from "../contants/ActionType";

const initialState = {
    Users: [],
};

export const UserReducer = (state= initialState, {type, payload}) => {
    
    switch (type)
    {
        case ActionType.SET_USERS:
            return { ...state  , Users:payload};
        default:
            return state;
    }
}
const initial = {
    User: [],
 }

export const selectedUserReducer = (state=initial , {type, payload}) => {
    
    switch (type)
    {
        case ActionType.SELECTED_USER:
            return { ...state , ...payload};
        default:
        return state;
    }
}