import { formatDateInput } from '@/app/utils/formatDateInput';
import { isValidDate } from '../utils/isValidDate';

const useFormattedText = (isDate: boolean, onChangeText: (text: string) => void) => {
  const handleTextChange = (text: string) => {
    let formattedText = text;
    let isValid = true;

    if (isDate) {
      formattedText = formatDateInput(text);
      const [dayString, monthString, yearString] = formattedText.split('/');
      const day = parseInt(dayString, 10);
      const month = parseInt(monthString, 10);
      const year = parseInt(yearString, 10);

      isValid = 
        !isNaN(day) && !isNaN(month) && !isNaN(year) &&
        month >= 1 && month <= 12 &&
        year >= 1000 && year <= 9999 &&
        isValidDate(day, month, year);
    }

    if (isDate && !isValid) {
      // Handle invalid date (e.g., show error, adjust UI)
    }

    onChangeText(formattedText);
  };

  return handleTextChange;
};

export default useFormattedText;
