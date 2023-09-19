import { Container, InputArea } from "./styles";
import { useState, useEffect } from "react";
import { formatDate } from "../../utils/formatDate"; // Substitua "suaFuncaoUtils" pelo caminho correto do seu arquivo de utilitário

export function DateTimeCard({ title, onDateChange, dateValue }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (dateValue) {
      // Formate a data usando sua função formatDate
      const formattedDate = formatDate(dateValue, "yyyy-MM-dd'T'HH:mm");
      setDate(formattedDate);
    }
  }, [dateValue]);

  function handleDateChange(value) {
    setDate(value);
    onDateChange(new Date(value));
  }

  return (
    <Container>
      <h5>{title}</h5>
      <InputArea>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </InputArea>
    </Container>
  );
}
