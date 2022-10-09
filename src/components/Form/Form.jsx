import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Lable, Input, Forma } from './Form.styled';
import { Button } from '../ContactList/ContactsList.styled';
import { Loader } from '../Loader/Loader';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const itemContact = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      let newContact = {
        name,
        number,
      };

      itemContact.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
        ? alert(`${newContact.name} is already exist in your contacts!`)
        : await dispatch(addContacts(newContact));

      reset();
    } catch (error) {
      console.log('ERROR');
    }
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
