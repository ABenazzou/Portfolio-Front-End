import { ActionType } from "../action-types";

interface adminAction {
    type: ActionType.ADMIN,
    isAdmin: boolean,
    token: string
}

export type Action = adminAction;