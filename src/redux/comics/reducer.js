// dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
// type actions
import typeActions from "./typeActions";

const initialState = fromJS({
    comics: {
        data: fromJS({}),
        errors: fromJS({}),
        success: false,
    },
});

function comicsErrorsReducer(state = initialState.get('comics').get('errors'), action = {}) {
    switch (action.type) {
        case typeActions.COMICS_MESSAGE_ERROR:
            return fromJS(action.payload);
        default:
            return state;
    }
}
function comicsDataReducer(state = initialState.get('comics').get('data'), action = {}) {
    switch (action.type) {
        case typeActions.COMICS_LOAD:
            return fromJS(action.payload);
        default:
            return state;
    }
}
function comicsSuccessReducer(state = initialState.get('comics').get('success'), action = {}) {
    switch (action.type) {
        case typeActions.COMICS_MESSAGE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

const comicsReducer = combineReducers({
    comicsDataReducer,
    comicsErrorsReducer,
    comicsSuccessReducer
});

export default comicsReducer;