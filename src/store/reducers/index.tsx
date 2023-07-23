import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const reducers = combineReducers({
    theme: themeReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;