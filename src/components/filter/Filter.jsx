import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, number, onChange, onNumberChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subfilter}>
        <span className={styles.label}>Filter contacts by name:</span>
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={`${styles.input} ${styles.placeholder}`}
          placeholder="By name"
        />
      </div>
      <div className={styles.subfilter}>
        <span className={styles.label}>Filter contacts by number:</span>
        <input
          type="text"
          value={number}
          onChange={onNumberChange}
          className={`${styles.input} ${styles.placeholder}`}
          placeholder="By number"
        />
      </div>
    </div>
  );
};

export default Filter;
