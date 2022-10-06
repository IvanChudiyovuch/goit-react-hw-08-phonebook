import { Form } from '../../components/ContactsBook/Form/Form';
import { Filter } from '../../components/ContactsBook/Filter/Filter';
import { ContactsList } from '../../components/ContactsBook/ContactList/ContactsList';
import { Container } from './Container.styled.jsx';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts:</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
