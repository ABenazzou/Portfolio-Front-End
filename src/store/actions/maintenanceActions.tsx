import { ActionType } from "../action-types";

interface MaintenanceAction {
    type: ActionType.MAINTENANCE,
    payload: boolean
}

export type Action = MaintenanceAction;