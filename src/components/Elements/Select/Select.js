import React, { useState, useRef, useEffect } from 'react';

import './select.scss';

function Select({ handleChange, label, isRequired, name, ...rest }) {
  const [selected, setSelected] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const selectNode = useRef();

  const requiredIndicator = isRequired ? '*' : '';

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  const handleClickOutside = (e) => {
    if (selectNode.current && !selectNode.current.contains(e.target)) {
      setShowOptions(false);
      return;
    }
  };

  const handleSelection = (e) => {
    const selectedOption = e.target.innerHTML.toLowerCase();
    setSelected(selectedOption);
    setShowOptions(false);
    handleChange(e);
  };

  return (
    <>
      <label>
        {label}
        {requiredIndicator}:
      </label>
      <div className="custom-select">
        <input
          readOnly
          onClick={() => setShowOptions(true)}
          type="text"
          value={selected}
          name={name}
          {...rest}
        />
        <span
          className={`open-select select-icon ${
            showOptions ? 'opened' : 'closed'
          }`}
        />
        {showOptions && (
          <div className="options" ref={selectNode}>
            <span data-name="status" onClick={handleSelection}>
              Angebot
            </span>
            <span data-name="status" onClick={handleSelection}>
              Gebucht
            </span>
            <span data-name="status" onClick={handleSelection}>
              Archiviert
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Select;
