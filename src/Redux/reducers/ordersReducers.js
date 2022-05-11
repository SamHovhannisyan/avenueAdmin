export const ORDERS = 'ORDERS';

const initialState = {
    order: []
}

export const ordersReducers = (state = initialState, action) => {
    switch (action.type) {

        case ORDERS:

            const NewOrders = [{...action.payload}, ...state.order]

            return {...state, order: NewOrders}

        default:
            return state;
    }
}