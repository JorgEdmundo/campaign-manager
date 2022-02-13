import React from 'react';

import './table.scss';

function Table({ campaignList }) {
  return (
    <div className="table">
      <div className="table-header">
        <div className="col">
          CS-ID <span className="order-icon" />
        </div>
        <div className="col">
          Kunde <span className="order-icon" />
        </div>
        <div className="col">
          Kampagnenname <span className="order-icon" />
        </div>
        <div className="col">
          Start <span className="order-icon" />
        </div>
        <div className="col">
          Ende <span className="order-icon" />
        </div>
        <div className="col">
          Status <span className="order-icon" />
        </div>
      </div>
      {campaignList.map((campaign) => {
        const { id, name, customer, start, end, status } = campaign;
        return (
          <div key={id} className="table-row">
            <div className="col">
              <a href="#">{id}</a>
            </div>
            <div className="col">{customer}</div>
            <div className="col">{name}</div>
            <div className="col">{start}</div>
            <div className="col">{end}</div>
            <div className="col">{status}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
