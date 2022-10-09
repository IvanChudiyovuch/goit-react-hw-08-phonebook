import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';
import { List, ListItem } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const itemContact = useSelector(getContacts);
  const filterContact = useSelector(getFilter);

  const visibleContacts = !filterContact
    ? itemContact
    : itemContact.filter(item =>
        item.name.toLowerCase().includes(filterContact.toLocaleLowerCase())
      );

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactsListItem contact={contact} />
          </ListItem>
        ))}
    </List>
  );
};
