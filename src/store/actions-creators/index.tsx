import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/themeActions"
import {Action as adminAction} from '../actions/adminActions';
import {Action as maintenanceAction} from '../actions/maintenanceActions';


export const setTheme = (isDarkMode: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.THEME,
            payload: isDarkMode,
        })
    }
}

export const setMaintenance = (isMaintenance: boolean) => {
    return (dispatch: Dispatch<maintenanceAction>) => {
        dispatch({
            type: ActionType.MAINTENANCE,
            payload: isMaintenance,
        })
    }
}

export const setAdmin = (isAdmin: boolean, token: string) => {
    return (dispatch: Dispatch<adminAction>) => {
        dispatch({
            type: ActionType.ADMIN,
            isAdmin: isAdmin,
            token: token
        })
    }
}

