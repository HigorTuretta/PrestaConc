import { Container, InputArea } from "./styles";
import { DatePicker, Stack } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";

export function DateTimeCard({ title, onDateChange, dateValue }) {
  const locale = {
    sunday: "Dom",
    monday: "Seg",
    tuesday: "Ter",
    wednesday: "Qua",
    thursday: "Qui",
    friday: "Sex",
    saturday: "Sáb",
    today: "Hoje",
    yesterday: "Ontem",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  };

  const [date, setDate] = useState(new Date())

  function handleDateChange(value){
    setDate(value);
    onDateChange(value);
  }


  return (
    <Container>
      <h5>{title}</h5>
      <InputArea>
        <Stack direction="column" alignItems="flex-start" spacing={6}>
          <DatePicker           
            value={dateValue ? dateValue: date}
            onChange={(selectedDate) => handleDateChange(selectedDate)}
            locale={locale}
            format="dd/MM/yyyy HH:mm"
            ranges={[
              {
                label: "Hoje",
                value: new Date(),
              },
            ]}
          />
        </Stack>
      </InputArea>
    </Container>
  );
}
