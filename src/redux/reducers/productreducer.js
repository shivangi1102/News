const ActionTypes={
    SET_PRODUCTS :"SET_PRODUCTS",
SEARCH_NEWS :"SEARCH_NEWS",
    REMOVE_PRODUCTS :"REMOVE_PRODUCTS",
   
}

const initialState={
    products:[]
}

export const productreducer=(state=initialState,{type,payload})=>{
    if (type===ActionTypes.SET_PRODUCTS){
        return {...state,products:payload}
    }

    
    return state


}

export const searchnewsreducer=(state={
    
},{type,payload})=>{
    if (type===ActionTypes.SEARCH_NEWS){
        return{...state,...payload}
    }
    return state
}
