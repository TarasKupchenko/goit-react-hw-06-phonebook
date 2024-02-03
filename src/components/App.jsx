// App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addContact, deleteContact } from './ContactForm/contactsSlice';
import { setFilter } from './Filter/filterSlice';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const addContactHandler = contact => {
    dispatch(addContact(contact));
  };

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilterHandler = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterHandler} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
};
