import React from 'react';

const Filter = ({ filter, number, onChange, onNumberChange }) => {
  return (
    <div>
      Filter contacts:
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="By name"
      />
      <input
        type="text"
        value={number}
        onChange={onNumberChange}
        placeholder="By number"
      />
    </div>
  );
};

export default Filter;
