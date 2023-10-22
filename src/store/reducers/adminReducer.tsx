import { ActionType } from '../action-types';
import { Action } from '../actions/adminActions';

interface initialState {
    isAdmin: boolean,
    token: string
}

const initialState = {
    isAdmin: false,
    token: ""
}

const adminReducer = (state: initialState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADMIN:
            // if payload is true set state as true if payload is false set state to false
            return action;
        default:
            return state;
    }
}

export default adminReducer;