import { combineReducers } from "redux";

import { newsreducer, searchnewsreducer } from "./productreducer";

const reducer=combineReducers({
    allnews:productreducer,
    news:searchnewsreducer,
    
})

export default reducer
