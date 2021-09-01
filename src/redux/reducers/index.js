import { combineReducers } from "redux";

import { newsreducer, searchnewsreducer } from "./newsreducer";

const reducer=combineReducers({
    allnews:newsreducer,
    news:searchnewsreducer,
    
})

export default reducer
