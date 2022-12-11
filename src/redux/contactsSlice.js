import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.list) {
          if (
            state.list.find(contact => contact.name === action.payload.name)
          ) {
            alert(`${action.payload.name} is already in contacts`);
            return;
          }
        }

        state.list.push(action.payload);
      },
      prepare(contactInfo) {
        const { name, number } = contactInfo;
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.list.findIndex(
        contact => contact.id === action.payload
      );
      state.list.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
