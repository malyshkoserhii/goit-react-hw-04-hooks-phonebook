import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onAddNewContact: PropTypes.func,
    exsisted: PropTypes.func,
  };

  nameInputId = shortid.generate();
  phoneNumberId = shortid.generate();

  handleContactInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleContactSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.props.exsisted(name)) {
      alert(`${name} is alredy in contacts.`);
      this.reset();
      return;
    }

    this.props.onAddNewContact(name, number);

    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;

    return (
      <>
        <h1 className={s.phonebookTitle}>Phonebook</h1>
        <form className={s.form} onSubmit={this.handleContactSubmit}>
          <label htmlFor={this.nameInputId} className={s.label}>
            <span className={s.labelDescription}> Name</span>
            <input
              type="text"
              name="name"
              value={name}
              id={this.nameInputId}
              className={s.input}
              onChange={this.handleContactInputChange}
            />
          </label>

          <label htmlFor={this.phoneNumberId} className={s.label}>
            <span className={s.labelDescription}>Number</span>
            <input
              type="tel"
              name="number"
              value={number}
              id={this.phoneNumberId}
              className={s.input}
              onChange={this.handleContactInputChange}
            />
          </label>

          <button type="submit" className={s.addContactBtn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
