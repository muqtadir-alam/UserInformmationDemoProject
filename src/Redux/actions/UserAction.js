import ActionType from "../contants/ActionType"

  export const SetUsers = (Users) => {
    
    return {
        type: ActionType.SET_USERS,
        payload: Users,
    };
};


export const SelectedUser = (User) => {
    return {
        type: ActionType.SELECTED_USER,
        payload: User,

    };
        
};

