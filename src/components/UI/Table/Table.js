import React from 'react';

import './table.scss';

function Table({ campaignList }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>
              <span className="head-title">
                CS-ID <span className="order-icon" />
              </span>
            </th>
            <th>
              <span className="head-title">
                Kunde <span className="order-icon" />
              </span>
            </th>
            <th>
              <span className="head-title">
                Kampagnenname <span className="order-icon" />
              </span>
            </th>
            <th>
              <span className="head-title">
                Start <span className="order-icon" />
              </span>
            </th>
            <th>
              <span className="head-title">
                Ende <span className="order-icon" />
              </span>
            </th>
            <th>
              <span className="head-title">
                Status <span className="order-icon" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {campaignList.map((campaign) => {
            const { id, name, customer, start, end, status } = campaign;
            return (
              <tr key={id} className="table-row">
                <td className="col">
                  <a href="#">{id}</a>
                </td>
                <td className="col">{customer}</td>
                <td className="col">{name}</td>
                <td className="col">{start}</td>
                <td className="col">{end}</td>
                <td className="col">{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
