export const validatePayload = (payload) => {
  const { name, customer } = payload;
  if (!name) return false;
  if (!customer) return false;

  return true;
};
