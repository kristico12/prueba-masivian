// dependencies
import {combineReducers} from "redux-immutable";

// reducer
import comicsReducer from './comics/reducer';

const reducer = combineReducers({
    comicsReducer
});

export default reducer;
