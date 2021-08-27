import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

const initialContactsState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsReduser = createReducer(initialContactsState, {
  [actions.saveContactAction]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.deleteContactAction]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  },
});

const filterReducer = createReducer("", {
  [actions.updateFilterAction]: (state, action) => {
    return action.payload;
  },
});

export default combineReducers({ contactsReduser, filterReducer });