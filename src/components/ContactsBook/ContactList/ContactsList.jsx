import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';
import { List, ListItem } from './ContactsList.styled';
import { useGetContactsQuery } from '../../../redux/contactsSlice';
import { Loader } from '../Loader/Loader';
import { getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const filterContact = useSelector(getFilter);

  const visibleContacts = !filterContact
    ? data
    : data.filter(item =>
        item.name.toLowerCase().includes(filterContact.toLocaleLowerCase())
      );

  return (
    <List>
      {isFetching && <Loader />}
      {visibleContacts &&
        visibleContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactsListItem contact={contact} />
          </ListItem>
        ))}
    </List>
  );
};
