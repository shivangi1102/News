import { combineReducers } from "redux";

import { productreducer, searchnewsreducer } from "./productreducer";

const reducer=combineReducers({
    allproduct:productreducer,
    product:searchnewsreducer,
    
})

export default reducer