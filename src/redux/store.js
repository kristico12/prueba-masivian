// dependencies
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
// all reducers
import reducer from "./reducer";

const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
    )    
);

export default store;
