import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import adminReducer from "./adminReducer";

const reducers = combineReducers({
    theme: themeReducer,
    isAdmin: adminReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;