import { combineReducers } from "redux"
import editorReducer from "./editorReducer"

const rootReducer = combineReducers({
    editorReducer,
})

export default rootReducer;