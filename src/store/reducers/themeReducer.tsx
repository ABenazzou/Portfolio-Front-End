import { ActionType } from '../action-types';
import { Action } from '../actions/themeActions'

const initialState = true;

const themeReducer = (state: boolean = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.THEME:
            // if payload is true set state as true if payload is false set state to false
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;