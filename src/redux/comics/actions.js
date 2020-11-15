// redux
import typeActions from "./typeActions";
import Model from './model';
// utils
import Call from "../../utils/call";
import { typeURL } from '../../utils/constants';

// Dispacher
function setComicsDispacth(type, payload) {
    return {
        type,
        payload,
    }
}

// Actions
function CleanError() {
    return (dispatch) => {
        dispatch(
            setComicsDispacth(
                typeActions.COMICS_MESSAGE_ERROR,
                {},
            )
        )
    }
}
function CleanSuccess() {
    return (dispatch) => {
        dispatch(
            setComicsDispacth(
                typeActions.COMICS_MESSAGE_SUCCESS,
                false,
            )
        )
    }
}

function ComicsLoad(page) {
    return (dispatch) => {
        Call(`${page}/info.0.json`, typeURL.GET)
            .then(response => {
                dispatch(
                    setComicsDispacth(
                        typeActions.COMICS_LOAD,
                        Model(response)
                    )
                );
                dispatch(
                    setComicsDispacth(
                        typeActions.COMICS_MESSAGE_SUCCESS,
                        true,
                    )
                );
            })
            .catch((err) => {
                dispatch(
                    setComicsDispacth(
                        typeActions.COMICS_MESSAGE_ERROR,
                        { non_field_errors: `Ha ocurrido un error: ${err}` },
                    )
                )
            })
    };
}

export default {
    ComicsLoad,
    CleanError,
    CleanSuccess,
}
