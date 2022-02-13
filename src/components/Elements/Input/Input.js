import React from 'react';

import './input.scss';

function Input({ type = 'text', handleChange, label, isRequired, ...rest }) {
  const requiredIndicator = isRequired ? '*' : '';

  return (
    <>
      <label>
        {label}
        {requiredIndicator}:
      </label>
      <input type={type} onChange={handleChange} {...rest} />
    </>
  );
}

export default Input;
