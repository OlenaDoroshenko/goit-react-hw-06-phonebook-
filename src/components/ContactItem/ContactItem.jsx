import PropTypes from 'prop-types';
import Button from 'components/base/Button.styled';
import ContactItem from './ContactItem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';


const ContactListItem = ({contact}) => {
const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem>
      {contact.name}: {contact.number}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
      </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }
  ).isRequired,
};