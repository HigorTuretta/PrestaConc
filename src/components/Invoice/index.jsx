import {
  Container,
  Line,
  InvoiceHeader,
  InvoiceDetails,
  ActionButton,
} from "./styles";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { useState } from "react";

export function Invoice({
  dateTime,
  isNew = false,
  readOnly = false,
  onInputChange,
  onDelete,
  invDescription,
  invValue,
  ...rest
}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  function handleAddClick() {
    onInputChange(description, value);
    setDescription("");
    setValue("");
  }

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <Container $isnew={isNew}>
      <InvoiceHeader $isnew={isNew}>
        <p>{dateTime}</p>
        <ActionButton $isnew={isNew} {...rest} onClick={ isNew ? handleAddClick : handleDeleteClick}>
          {isNew ? <FiPlus /> : <FiTrash2 />}
        </ActionButton>
      </InvoiceHeader>
      <Line $isnew={isNew} />
      <InvoiceDetails $isnew={isNew}>
        <input
          type="text"
          placeholder="Descrição"
          {...rest}
          autoComplete="false"
          value={invDescription ? invDescription : description}
          onChange={(e) => setDescription(e.target.value)}
          readOnly={readOnly}
        />
        <input
          type={invValue ? 'text' : 'number'}
          placeholder="Valor"
          step="0.01"
          {...rest}
          value={invValue ? invValue : value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={readOnly}
        />
      </InvoiceDetails>
      <Line $isnew={isNew} />
    </Container>
  );
}
