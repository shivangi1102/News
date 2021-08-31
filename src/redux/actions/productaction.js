

const ActionTypes={
    SET_PRODUCTS :"SET_PRODUCTS",
SEARCH_NEWS :"SEARCH_NEWS",
    REMOVE_PRODUCTS :"REMOVE_PRODUCTS",
   
}

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const searchNews=(product)=>{
    return {
        type:ActionTypes.SEARCH_NEWS,
        payload: product
    }
}  

