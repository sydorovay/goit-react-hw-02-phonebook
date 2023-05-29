import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles['contact-list']}>
      {contacts.map(contact => (
        <li className={styles['contact-list-item']} key={contact.id}>
          <span className={styles['contact-name']}>{contact.name}:</span>{' '}
          {contact.number}
          <button
            className={styles['delete-button']}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
