import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { ContactsList } from '../../components/ContactList/ContactsList';
import { Container } from './Container.styled.jsx';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts:</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </Container>
  );
}
