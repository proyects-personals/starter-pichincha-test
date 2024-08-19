export const parseDate = (dateString: string): Date => {
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!datePattern.test(dateString)) {
    return new Date(NaN);
  }
  const [day, month, year] = dateString.split("/").map(Number);

  if (day > 31 || month > 12 || isNaN(day) || isNaN(month) || isNaN(year)) {
    return new Date(NaN); 
  }

  return new Date(year, month - 1, day);
};
