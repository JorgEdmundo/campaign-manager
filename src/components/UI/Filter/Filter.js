import React from 'react';
import PlusIcon from '../../../icons/PlusIcon';

import './filter.scss';

function Filter({
  openFilter,
  filterOptions,
  handleRemoveFilterOption,
  setFilterOptions,
  setOpenFilter,
  handleFilterOption,
  filterNode,
}) {
  const handleRemove = (e, index) => {
    e.stopPropagation();
    handleRemoveFilterOption(index);
  };

  const clearAll = (e) => {
    e.stopPropagation();
    setFilterOptions([]);
  };

  return (
    <div className="list-filter">
      <span>Status filtern:</span>
      <div
        className="filter"
        onClick={() => setOpenFilter(!openFilter)}
        ref={filterNode}
      >
        <div className="filter-selected">
          {filterOptions.map((option, index) => {
            return (
              <div
                onClick={(e) => handleRemove(e, index)}
                key={index}
                className="option"
              >
                {option}
                <span className="close-icon">
                  <PlusIcon />
                </span>
              </div>
            );
          })}
        </div>
        <div className="filter-count">
          {!!filterOptions.length && (
            <div className="status">
              <span className="selected">{filterOptions.length}</span>
              <span onClick={clearAll} className="close-icon">
                <PlusIcon />
              </span>
            </div>
          )}
          <span
            className={`open-filter select-icon ${
              openFilter ? 'opened' : 'closed'
            }`}
          />
        </div>
        {openFilter && (
          <div className="filter-options">
            <span onClick={handleFilterOption}>Angebot</span>
            <span onClick={handleFilterOption}>Gebucht</span>
            <span onClick={handleFilterOption}>Archiviert</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
