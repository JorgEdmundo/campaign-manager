import React from 'react';

import CalendarIcon from '../../../icons/CalendarIcon';

import './input.scss';

function Input({ type = 'text', handleChange, label, isRequired, ...rest }) {
  const requiredIndicator = isRequired ? '*' : '';

  let input = <input type={type} onChange={handleChange} {...rest} />;

  if (type === 'date') {
    input = (
      <div className="input-date">
        <input type={type} onChange={handleChange} {...rest} />
        <CalendarIcon />
      </div>
    );
  }

  return (
    <>
      <label>
        {label}
        {requiredIndicator}:
      </label>
      {input}
    </>
  );
}

export default Input;
