import { useState } from 'react';
import { Lable, Input, Forma } from './Form.styled';
import { Button } from '../ContactList/ContactsList.styled';
import { Loader } from '../Loader/Loader';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from '../../../redux/contactsSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleValueInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    let newContact = {
      name,
      number,
    };

    contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : createContact(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Lable>
        Name
        <Input
          value={name}
          onChange={handleValueInputChange}
          type="text"
          name="name"
          placeholder="Jacob Mercer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="
            Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Lable>

      <Lable>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleValueInputChange}
          placeholder="___-__-__"
        />
      </Lable>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Loader />} Add contact
      </Button>
    </Forma>
  );
};
