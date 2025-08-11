export const useCreateDate = () => {
  const dateObj = new Date();
  const monthName = dateObj.toLocaleString("default", { month: "short" });
  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;

  return date;
};
