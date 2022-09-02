import { combineReducers, createStore } from "redux";
import phonebook from "./Phonebook/Phonebook-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  phonebook,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
