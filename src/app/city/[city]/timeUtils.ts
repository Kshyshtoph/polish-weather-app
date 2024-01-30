export const twoDigit = (input: number): string =>
  `${input}`.length === 1 ? `0${input}` : `${input}`;

export const parseTime = (dateTime: Date): string =>
  `${twoDigit(dateTime.getDate())}.${twoDigit(
    dateTime.getMonth() + 1
  )} ${twoDigit(dateTime.getHours())}:${twoDigit(dateTime.getMinutes())}`;

const currentTime = new Date();

export const isNow = (dateTime: Date): boolean =>
  dateTime.getDate() == currentTime.getDate() &&
  dateTime.getMonth() === currentTime.getMonth() &&
  dateTime.getHours() === currentTime.getHours();
