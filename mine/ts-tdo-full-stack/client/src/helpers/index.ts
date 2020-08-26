export const isExpired = (exp?: number) => {
  if (!exp) {
    return false;
  }

  return Date.now() > exp;
};
