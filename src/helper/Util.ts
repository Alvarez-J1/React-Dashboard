type MonthsConfig = {
  count?: number;
  section?: number;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const months = (config: MonthsConfig = {}) => {
  const { count = 12, section } = config;

  return Array.from({ length: count }, (_, i) => {
    const month = MONTHS[i % 12];
    return section ? month.substring(0, section) : month;
  });
};