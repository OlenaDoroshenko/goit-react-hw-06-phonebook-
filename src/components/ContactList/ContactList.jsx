import ContactListItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
