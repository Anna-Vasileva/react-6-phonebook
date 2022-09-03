import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./Phonebook-actions";

// const initialStateContacts =
//   JSON.parse(window.localStorage.getItem("contacts")) ?? [];
console.log(
  JSON.parse(window.localStorage.getItem("persist:phonebook")).contacts
);
const contacts = createReducer([], {
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
  [actions.formSubmitData]: (state, { payload }) => {
    const checkNewName = (name) => {
      return state.find((el) => el.name === name);
    };

    if (checkNewName(payload.name)) {
      alert(`${payload.name} is already in contact!`);
      return state;
    }
    const newContact = { ...payload, id: uuidv4() };
    return [...state, newContact];
  },
});
const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const contacts = (state = [], { type, payload }) => {
//   const che};

//   switch (type) {
//     case types.DELETE_CONTACT:
//       return state.filter((el) => el.id !== payload);
//     case types.FORM_SUBMIT_DATA:
//       if (checkNewName(payload.name)) {
//         alert(`${payload.name} is already in contact!`);
//   ckNewName = (name) => {
//     return state.find((el) => el.name === name);
//         return state;
//       }
//       const newContact = { ...payload, id: uuidv4() };
//       return [...state, newContact];
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  filter,
  contacts,
});
