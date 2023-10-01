import { format, utcToZonedTime } from "date-fns-tz";

export function formatDate(
  inputDate,
  formatString = "dd/MM/yyyy HH:mm",
  timeZone = "America/Sao_Paulo"
) {
  const zonedDate = utcToZonedTime(inputDate, timeZone);
  return format(zonedDate, formatString, { timeZone });
}

// Função para formatar uma data para o horário de Brasília
export function localeDate(data) {
  // Definir o fuso horário de Brasília (GMT-3)
  const fusoHorarioBrasilia = "America/Sao_Paulo";

  // Formatar a data e hora no fuso horário de Brasília
  const formatoBrasilia = format(data, "yyyy-MM-dd HH:mm:ss", {
    timeZone: fusoHorarioBrasilia,
  });

  return formatoBrasilia;
}

export function formatCurrency(value) {
  const options = {
    style: "currency",
    currency: "BRL",
  };

  return new Intl.NumberFormat("pt-BR", options).format(value);
}