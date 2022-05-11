export const PRODUCT = "PRODUCT";
export const PRODUCTDELETE = "PRODUCTDELETE";
export const PRODUCTCREATE = "PRODUCTCREATE";
export const PRODUCTUPDATE = "PRODUCTUPDATE";

const initialState = {
    product: [],
    pageCount: []
};

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT:
            return {
                ...state,
                product: action.payload.products,
                pageCount: Array.from(Array(Math.ceil(Number(action.payload.pageCount) / Number(action.payload.limit))).keys())
            }

        case PRODUCTDELETE:

            return {...state, product: state.product.filter(u => u.id !== action.payload)}

        case PRODUCTCREATE:

            const NewProduct = [{...action.payload}, ...state.product]

            return {...state, product: NewProduct}

        case PRODUCTUPDATE:

            let searchIndex = state.product.findIndex(i => i.id == action.payload.id)


            console.log('state.product[searchIndex]', state.product[searchIndex])
            // let arr = state.product
            // const updatedProduct = arr.filter(i => i.id === action.payload.id)[0];
            // for (const [key,value] of updatedProduct) {
            //     updatedProduct[key] = value
            // }

            // console.log('red 1', updatedProduct)
            // console.log('red 2', state.product)

            return {...state, product: []}

        default:
            return state;
    }
};
