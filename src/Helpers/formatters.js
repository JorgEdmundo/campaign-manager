export const formatCampaign = (payload) => {
  const { name, customer, status, start, end } = payload;
  const payloadId = getCSID(name, customer);

  if (status) payload.status = status.toLowerCase();
  if (start) payload.start = formatDate(start);
  if (end) payload.end = formatDate(end);

  return {
    ...payload,
    id: payloadId,
  };
};

const getCSID = (name, customer) => {
  const firstNameLetter = name.slice(0, 1).toUpperCase();
  const firstCustomerLetter = customer.slice(0, 1).toUpperCase();
  const randNumberOne = Math.floor(Math.random() * 10);
  const randNumberTwo = Math.floor(Math.random() * 10);
  const randNumberThree = Math.floor(Math.random() * 10);

  return `${firstNameLetter}${firstCustomerLetter}-${randNumberOne}${randNumberTwo}${randNumberThree}`;
};

const formatDate = (date) => {
  const dateObject = new Date(date);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
    dateObject,
  );
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
    dateObject,
  );
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
    dateObject,
  );
  return `${day}-${month}-${year}`;
};
