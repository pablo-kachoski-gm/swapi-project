export const getResidentIdFromURL = (url: string) => {
  if (!url) return '';
  const splitted = url.split('people/');
  return splitted[1];
};
