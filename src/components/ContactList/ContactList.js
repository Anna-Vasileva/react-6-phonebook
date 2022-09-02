import React from "react";
import { connect } from "react-redux";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem";
import PropTypes from "prop-types";
import * as actions from "../../redux/Phonebook/Phonebook-actions";

const ContactList = ({ contacts, filter, onDelete }) => {
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(normalizeFilter)
  );
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            <ContactListItem
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// export default ContactList;
