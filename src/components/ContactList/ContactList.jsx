import ContactListItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
