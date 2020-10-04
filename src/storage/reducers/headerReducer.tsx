import { DisplayHeaderTypes, HeaderState, SET_DISPLAY_HEADER } from "../types/actionHeaderTypes";

const INITIAL_STATE: HeaderState = {
    display: true,
}

const headerReducer = (state = INITIAL_STATE, action: DisplayHeaderTypes): HeaderState => {
    switch (action.type) {
    case SET_DISPLAY_HEADER:
        return { display: action.display }
    default:
        return state;
    }
}

export default headerReducer;