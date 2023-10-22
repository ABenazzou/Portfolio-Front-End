import { ActionType } from '../action-types';
import { Action } from '../actions/maintenanceActions'

const initialState = true;

const maintenanceReducer = (state: boolean = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.MAINTENANCE:
            // if payload is true set state as true if payload is false set state to false
            return action.payload;
        default:
            return state;
    }
}

export default maintenanceReducer;