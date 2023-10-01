import datetimeDifference from "datetime-difference";

export function compareDate(date1, date2) {
  const result = datetimeDifference(new Date(date1), new Date(date2));

  const days = result.days;
  const hours = result.hours;
  const minutes = result.minutes;
  let totalValue = 0;
  const valorDiarias = 80;
  let diarias = 0;
  let meiaDiaria = false;

  //Verifica quantos dias se passou.
  if (days >= 1) {
    if (hours > 12) {
      //Se já passou + 12 horas é contato mais 1 dia na diária.
      diarias = days + 1;
    } else {
      diarias = days;
    }

    if (hours <= 12) {
      // Se a diferença de horas for menor que 12 e também diferente de 0, teremos meia diária.
      if (hours != 0) {
        meiaDiaria = true;
      }

      //Se a diferença de minutos for maior ou igual a 5 também teremos meia diária.
      if (minutes >= 5) {
        meiaDiaria = true;
      }
    }
  } else {
    // Se não temos a diferença de dias, apenas conferimos se teremos uma diferença superior a 12 horas.
    if (hours > 12 || minutes >= 5) {
      diarias = 1; // Acima de 12 horas e 5 minutos = 1 diária.
    } else {
      meiaDiaria = true; // Caso negativo, meia diária.
    }
  }

  totalValue =
    meiaDiaria == true
      ? diarias * valorDiarias + valorDiarias / 2
      : diarias * valorDiarias;

  return totalValue;
}
