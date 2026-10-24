export const toFiniteNumber = (value) => {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

export const formatNumber = (value) => {
  const number = toFiniteNumber(value);
  return number === null ? "--" : number.toFixed(2);
};
