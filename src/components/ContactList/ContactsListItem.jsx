import PropTypes from 'prop-types';
import { FcBusinessman, FcCellPhone } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ItenInfoText } from './ContactsList.styled';
import { Loader } from '../Loader/Loader';
import { deleteContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';

export const ContactsListItem = ({ contact }) => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContacts(contact.id));
  };

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
