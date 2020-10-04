import { DisplayHeaderTypes, SET_DISPLAY_HEADER } from "../types/actionHeaderTypes";

export const setDisplayHeader = (display: boolean): DisplayHeaderTypes => ({
    type: SET_DISPLAY_HEADER,
    display,
})