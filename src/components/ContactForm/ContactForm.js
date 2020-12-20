import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

const ContactForm = ({ onAddNewContact, exsisted }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const phoneNumberId = shortid.generate();

  const handleContactInputChange = event => {
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

  const handleContactSubmit = event => {
    event.preventDefault();

    if (exsisted(name)) {
      alert(`${name} is alredy in contacts.`);
      reset();
      return;
    }

    onAddNewContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className={s.phonebookTitle}>Phonebook</h1>
      <form className={s.form} onSubmit={handleContactSubmit}>
        <label htmlFor={nameInputId} className={s.label}>
          <span className={s.labelDescription}>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            className={s.input}
            onChange={handleContactInputChange}
          />
        </label>

        <label htmlFor={phoneNumberId} className={s.label}>
          <span className={s.labelDescription}>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            id={phoneNumberId}
            className={s.input}
            onChange={handleContactInputChange}
          />
        </label>

        <button type="submit" className={s.addContactBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onAddNewContact: PropTypes.func,
  exsisted: PropTypes.func,
};

export default ContactForm;
