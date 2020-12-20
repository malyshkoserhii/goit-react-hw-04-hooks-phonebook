import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = window.localStorage.getItem('contacts');
    return JSON.parse(storedContacts) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(state => [...state, contact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = ({ currentTarget }) => {
    setFilter(currentTarget);
  };

  const getExistedContact = name => {
    return contacts.find(contact => contact.name === name);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );

  const showContacts = getFilteredContacts();

  return (
    <>
      <ContactForm
        onAddNewContact={addNewContact}
        exsisted={getExistedContact}
      />
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList contacts={showContacts} onDeleteContact={deleteContact} />
    </>
  );
};

export default App;
