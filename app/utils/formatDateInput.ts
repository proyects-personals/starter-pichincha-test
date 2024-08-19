export const formatDateInput = (text: string) => {
    const numericText = text.replace(/\D/g, '');

    let formattedText = '';
    if (numericText.length <= 2) {
      formattedText = numericText;
    } else if (numericText.length <= 4) {
      formattedText = `${numericText.slice(0, 2)}/${numericText.slice(2)}`;
    } else if (numericText.length <= 8) {
      formattedText = `${numericText.slice(0, 2)}/${numericText.slice(2, 4)}/${numericText.slice(4)}`;
    } else {
      formattedText = `${numericText.slice(0, 2)}/${numericText.slice(2, 4)}/${numericText.slice(4, 8)}`;
    }

    return formattedText;
  };