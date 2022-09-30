// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { Container } from './Container.styled';
// import { getContacts } from 'redux/selectors';

export const App = () => {
  // const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts);
  // }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>} */}
      <ContactsList />
    </Container>
  );
};

// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { ContactsList } from './ContactList/ContactsList';
// import { Container } from './Container.styled';
// // import { getContacts } from 'redux/selectors';

// export const App = () => {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <Form />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactsList />
//     </Container>
//   );
// };
