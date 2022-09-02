import { combineReducers } from "redux";
import types from "./Phonebook-types";
import { v4 as uuidv4 } from "uuid";

// const initialStateContacts =
//   JSON.parse(window.localStorage.getItem("contacts")) ?? [];

const contacts = (state = [], { type, payload }) => {
  const checkNewName = (name) => {
    return state.find((el) => el.name === name);
  };

  switch (type) {
    case types.DELETE_CONTACT:
      return state.filter((el) => el.id !== payload);
    case types.FORM_SUBMIT_DATA:
      if (checkNewName(payload.name)) {
        alert(`${payload.name} is already in contact!`);
        return state;
      }
      const newContact = { ...payload, id: uuidv4() };
      return [...state, newContact];
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  filter,
  contacts,
});
