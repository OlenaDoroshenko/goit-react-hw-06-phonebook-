import GlobalStyle from './GlobalStyle';
import { useSelector } from 'react-redux';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { getFilter } from 'redux/selectors';
import { getContacts } from 'redux/selectors';

const Phonebook = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Form />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      )}
    </>
  );
};

export default Phonebook;
