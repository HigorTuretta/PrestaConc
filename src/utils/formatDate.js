import { DateTime } from 'luxon';

export function formatDate(inputDate) {
  const date = DateTime.fromJSDate(inputDate, { zone: 'America/Sao_Paulo' });
  
  return date.toFormat('dd/MM/yyyy HH:mm');
}
