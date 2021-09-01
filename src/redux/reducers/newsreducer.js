const ActionTypes={
    SET_NEWS :"SET_NEWS",
SEARCH_NEWS :"SEARCH_NEWS",
    
   
}

const initialState={
    products:[]
}

export const productreducer=(state=initialState,{type,payload})=>{
    if (type===ActionTypes.SET_NEWS){
        return {...state,news:payload}
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
