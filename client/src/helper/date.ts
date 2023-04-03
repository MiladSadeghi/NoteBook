const months = [
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

export const ArticleCreatedAt = (date: Date) => {
  const myDate = new Date(date);
  const day = `${myDate.getDay()}${myDate.getDate()}`;
  const month = `${months[myDate.getMonth()]}`;
  const year = `${myDate.getFullYear()}`;
  return `${day} ${month} ${year}`;
};
