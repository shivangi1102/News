

const ActionTypes={
    SET_NEWS :"SET_NEWS",
SEARCH_NEWS :"SEARCH_NEWS",
    
}

export const setNews=(news)=>{
    return {
        type:ActionTypes.SET_News,
        payload: news
    }
}

export const searchNews=(product)=>{
    return {
        type:ActionTypes.SEARCH_NEWS,
        payload: product
    }
}  

