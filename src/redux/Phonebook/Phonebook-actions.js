import { createAction } from "@reduxjs/toolkit";

const deleteContact = createAction("phonebook/deleteContact");
const changeFilter = createAction("phonebook/changeFilter");
const formSubmitData = createAction("phonebook/formSubmitData");

// export const deleteContact = (id) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: id,
// });

// export const changeFilter = (value) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

// export const formSubmitData = (data) => ({
//   type: actionTypes.FORM_SUBMIT_DATA,
//   payload: data,
// });
export default { deleteContact, changeFilter, formSubmitData };
