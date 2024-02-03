import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from './contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const number = formData.get('number');

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    e.target.reset();
  };

  return (
    <form className={css.contact_form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input className={css.form_name} type="text" name="name" required />
      </label>
      <label>
        Number:
        <input type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
