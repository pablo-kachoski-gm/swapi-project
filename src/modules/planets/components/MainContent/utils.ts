export const getPlanetIdFromURL = (url: string) => {
  if (!url) return '';
  const splitted = url.split('planets/');
  return splitted[1];
};
