export const SET_DISPLAY_HEADER = 'SET_DISPLAY_HEADER';

export interface HeaderState {
    display: boolean
}

interface SetDisplayHeaderAction extends HeaderState {
    type: typeof SET_DISPLAY_HEADER
}

export type DisplayHeaderTypes = SetDisplayHeaderAction