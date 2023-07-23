import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/themeActions"


export const setTheme = (isDarkMode: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.THEME,
            payload: isDarkMode,
        })
    }
}