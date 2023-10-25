import {createStore} from "redux"
import noteReducer  from "../reducer/noteReducer"
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const store = createStore(noteReducer, composeWithDevTools());

export default store;