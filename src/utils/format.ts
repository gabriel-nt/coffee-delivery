export const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

export const formatDate = (date: Date) => {
  date = new Date(date);

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${String(day).padStart(2, '0')}/${String(month).padStart(
    2,
    '0',
  )}/${year} ${hours}h:${minutes}m`;
};

export const formatNumber = (number: number) => Number(number.toFixed(2));
