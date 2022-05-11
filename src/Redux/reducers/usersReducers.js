export const USERS = 'USERS';
export const USERSCREATE = 'USERSCREATE';
export const USERDELETE = 'USERDELETE'


const initialState = {
    users: []
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case USERS:

            return {...state, users: action.payload.data}

        case USERSCREATE:

            const newData = [{...action.payload}, ...state.users ]

            return {...state, users: newData}

        case USERDELETE:

            return {...state, users: state.users.filter(u => u.id !== action.payload)}

        default:
            return state;
    }
}