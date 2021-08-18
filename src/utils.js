export function getTimeString(date, isNeedTime) {
  const dateOptions = {
    year: `numeric`,
    month: `2-digit`,
    day:`2-digit`,
  },
  timeOptions = {
    hour: `2-digit`,
    minute: `2-digit`,
  },
  dateStr = date.toLocaleString(`ru`, dateOptions).replace(/\./g, `-`),
  timeStr = `T${date.toLocaleString('ru', timeOptions)}`;
    
  return !isNeedTime ?
    dateStr : dateStr + timeStr;
}