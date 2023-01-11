export const formmatedDate = (): string => {
  let newDate = new Date();
  const date = {
    date: newDate.getDate(),
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear(),
    minutes: newDate.getMinutes().toString().padStart(2, "0"),
    hours: newDate.getHours() % 12 || 12,
    amOrPm: newDate.getHours() < 12 ? "AM" : "PM",
  };
  let formattedDate = `${date.date}/${date.month}/${date.year}`;

  return formattedDate;
};
