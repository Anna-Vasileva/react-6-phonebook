import React from "react";
import { connect } from "react-redux";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import * as actions from "../../redux/Phonebook/Phonebook-actions";

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={s.input}
      ></input>
    </label>
  );
};
// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };
const mapStateToProps = (state) => ({
  filter: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (event) =>
    dispatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
