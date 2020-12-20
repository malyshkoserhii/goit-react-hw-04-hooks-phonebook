import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactsListItem}>
          <p className={s.contact}>
            <span className={s.name}>{name}:</span>
            <span className={s.number}>{number}</span>
          </p>
          <button className={s.deleteBtn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.protoTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
