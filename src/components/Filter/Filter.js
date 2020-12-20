import s from './Filter.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Filter = ({ value, changeFilter }) => {
  const filterInputId = shortid.generate();

  return (
    <section className={s.contactsSection}>
      <h2 className={s.contactsTitle}>Contacts</h2>
      <label htmlFor={filterInputId} className={s.label}>
        <span className={s.findDescription}>Find contact by name:</span>
        <input
          type="text"
          name="filter"
          value={value}
          id={filterInputId}
          className={s.input}
          onChange={changeFilter}
        />
      </label>
    </section>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func,
};

export default Filter;
