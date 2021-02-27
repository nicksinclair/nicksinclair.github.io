// Formats ISO date into 'MON YYYY' format
const formatDate = date => {
  if (date === 'PRESENT') {
    return date;
  }
  const preformattedDate = new Date(date);
  const month = preformattedDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = preformattedDate.getFullYear();
  return `${month} ${year}`;
};

const stub = () => {
  return null;
};

export { formatDate, stub };
