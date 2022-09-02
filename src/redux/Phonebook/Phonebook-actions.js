import actionTypes from "./Phonebook-types";

export const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: id,
});

export const changeFilter = (value) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export const formSubmitData = (data) => ({
  type: actionTypes.FORM_SUBMIT_DATA,
  payload: data,
});
