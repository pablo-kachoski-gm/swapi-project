export const getPlanetIdFromURL = (url: string) => {
  if (!url) return '';
  const splitted = url.split('/');
  const idPosition = splitted.length - 2;
  return splitted[idPosition];
};
