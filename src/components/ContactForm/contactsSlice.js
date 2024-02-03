import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const { name } = action.payload;

      const isNameExists = state.some(contact => contact.name === name);

      if (isNameExists) {
        alert(`Contact with name ${name} already exists!`);
      } else {
        state.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
