import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./reducers/dataReducer";
const store = createStore(dataReducer, applyMiddleware(thunkMiddleware));
export default store;
