import { ActionType } from "../action-types";

interface ThemeAction {
    type: ActionType.THEME,
    payload: boolean
}

export type Action = ThemeAction;