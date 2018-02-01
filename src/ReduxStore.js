// @flow
import {combineReducers, createStore} from "redux";
import {theme} from "./theme/ThemeReducer";

const ReduxStore = createStore(combineReducers({theme}));

export default ReduxStore;
