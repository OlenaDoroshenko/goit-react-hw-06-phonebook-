import GlobalStyle from './GlobalStyle';
import { useSelector } from 'react-redux';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { getContacts } from 'redux/selectors';

const Phonebook = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Form />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};

export default Phonebook;
