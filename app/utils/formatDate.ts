export const formatDateToUser = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return '';
  }
  
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  
  return `${day}/${month}/${year}`;
};



export const convertToBackendDate = (date: string): string => {
  const [day, month, year] = date.split('/').map(part => part.trim());
  if (
    !day || !month || !year ||
    isNaN(parseInt(day, 10)) ||
    isNaN(parseInt(month, 10)) ||
    isNaN(parseInt(year, 10)) ||
    day.length !== 2 ||
    month.length !== 2 ||
    year.length !== 4
  ) {
    return date;
  }
  return `${year}-${month}-${day}`;
};



  