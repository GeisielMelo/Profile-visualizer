export const UrlFormatter = (url: string): string => {
  const regex = /^https:\/\//;
  return regex.test(url) ? url : `https://${url}`;
};
