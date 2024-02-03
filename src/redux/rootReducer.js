import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from '../components/ContactForm/contactsSlice';
import filterReducer from '../components/Filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
