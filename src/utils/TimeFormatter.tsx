export const TimeFormatter = (date: string): string => {
  const dateObject = new Date(date);
  const options: object = { month: "long", year: "numeric" };
  const formatted = new Intl.DateTimeFormat("en-US", options);
  return formatted.format(dateObject);
};
