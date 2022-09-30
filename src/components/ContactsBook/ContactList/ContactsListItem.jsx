import PropTypes from 'prop-types';
import { Button, ItenInfoText } from './ContactsList.styled';
import { useDeleteContactMutation } from '../../../redux/contactsSlice';
import { Loader } from '../Loader/Loader';

export const ContactsListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ItenInfoText>{contact.name}:</ItenInfoText>
      <ItenInfoText>{contact.number}</ItenInfoText>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(contact.id)}
      >
        {isLoading && <Loader size={10} />}
        Delete
      </Button>
    </>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
