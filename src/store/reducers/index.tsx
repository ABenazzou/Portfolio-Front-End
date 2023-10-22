import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import adminReducer from "./adminReducer";
import maintenanceReducer from "./maintenanceReducer";

const reducers = combineReducers({
    theme: themeReducer,
    isAdmin: adminReducer,
    maintenance: maintenanceReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;