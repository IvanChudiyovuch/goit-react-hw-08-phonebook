import PropTypes from 'prop-types';
import { FcBusinessman, FcCellPhone } from 'react-icons/fc';
import { Button, ItenInfoText } from './ContactsList.styled';
import { useDeleteContactMutation } from '../../../redux/contactsSlice';
import { Loader } from '../Loader/Loader';

export const ContactsListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <FcBusinessman size={20} />
      <ItenInfoText>{contact.name}:</ItenInfoText>
      <FcCellPhone />
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
