export const convertToPlainText = (text: string) => {
  if (/[-_]/.test(text)) return text.split(/[-_]/).join(' ');
  if (/[A-Z]/.test(text)) {
    return text.split(/(?=[A-Z])/).map((str) => str.trim()).join(' ').toLowerCase();
  }

  return text;
};
