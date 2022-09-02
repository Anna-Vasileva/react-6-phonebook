// import React, { Component } from "react";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem("contacts")) ?? []
  // );
  // const [filter, setFilter] = useState("");
  // const normalizeFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter((el) =>
  //   el.name.toLowerCase().includes(normalizeFilter)
  // );
  //!!!!!!!!!!!!!!!!!!!
  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  //!!!!!!!!!!!!!!!!!!!
  // const formSubmitData = (data) => {
  //   if (checkNewName(data.name)) {
  //     alert(`${data.name} is already in contact!`);
  //     return;
  //   }
  //   const newContact = { ...data, id: uuidv4() };
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // };
  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };
  // const checkNewName = (name) => {
  //   return contacts.find((el) => el.name === name);
  // };
  // const deleteContact = (id) => {
  //   setContacts((prevContacts) => prevContacts.filter((el) => el.id !== id));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={formSubmitData} /> */}
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter filter={filter} changeFilter={changeFilter} /> */}
      {/* <ContactList contacts={visibleContacts} onDelete={deleteContact} /> */}
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
