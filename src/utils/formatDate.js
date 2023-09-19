import { DateTime } from 'luxon';

export function formatDate(inputDate, format = 'dd/MM/yyyy HH:mm') {
  const date = DateTime.fromJSDate(inputDate, { zone: 'America/Sao_Paulo' });
  
  return date.toFormat(format);
}
