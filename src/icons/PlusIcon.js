import React from 'react';

const Plus = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    name="Plus"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M7.071 8.443 8.435 7.08l3.547 3.547 3.565-3.564 1.391 1.39-3.564 3.566 3.547 3.547-1.364 1.364-3.548-3.547-3.556 3.556-1.391-1.39 3.556-3.557z"
        fill="#00BEF7"
      />
    </g>
  </svg>
);

export default Plus;
