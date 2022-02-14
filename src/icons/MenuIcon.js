import React from 'react';

const MenuIcon = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    name="Menu"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M4 18h16.5v-2H4v2zm0-5h16.5v-2H4v2zm0-7v2h16.5V6H4z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default MenuIcon;
