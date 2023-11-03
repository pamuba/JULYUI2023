export const Types = {
    GET_USERS_REQUEST : 'users/get_users-request',
    GET_USERS_SUCCESS : 'users/get_users-success'
};

export const getUsersRequest = () => {return {
    type: Types.GET_USERS_REQUEST
}};

export const getUsersSuccess = ({items}) => {return{
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
}};



