import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {}, []);

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

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getExistedContact = name => {
    return contacts.find(contact => contact.name === name);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLocaleLowerCase().includes(normalizedFilter),
    // );
    setContacts(
      contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter),
      ),
    );
  };

  return (
    <>
      <ContactForm
        onAddNewContact={addNewContact}
        exsisted={getExistedContact}
      />
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </>
  );
};

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addNewContact = (name, number) => {
//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getExistedContact = name => {
//     const { contacts } = this.state;
//     return contacts.find(contact => contact.name === name);
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizedFilter),
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <>
//         <ContactForm
//           onAddNewContact={this.addNewContact}
//           exsisted={this.getExistedContact}
//         />
//         <Filter value={filter} changeFilter={this.changeFilter} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

export default App;
