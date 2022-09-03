// import { combineReducers, createStore } from "redux";
import phonebook from "./Phonebook/Phonebook-reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfigPhonebook = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    seriallzableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; // вставка прослойки(логгера) в стек прослоек

const store = configureStore({
  reducer: {
    phonebook: persistReducer(persistConfigPhonebook, phonebook),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);
export default { store, persistor };
