import {
  Container,
  Line,
  InvoiceHeader,
  InvoiceDetails,
  ActionButton,
} from "./styles";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Message, useToaster } from "rsuite";

export function Invoice({
  dateTime,
  isNew = false,
  readOnly = false,
  onInputChange,
  onDelete,
  invDescription,
  invValue,
  entranceAnimation,
  ...rest
}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const toaster = useToaster();

  function handleAddClick() {
    if (value === "" || value === 0) {
      const message = (
        <Message type="error" showIcon closable>
          Informe um valor para a nota fiscal!
        </Message>
      );
      toaster.push(message, { placement: "topEnd", duration: 5000 });
      return;
    }
    onInputChange(description, value);
    setDescription("");
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddClick();
    }
  }

  handleKeyDown;

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <Container
      $isnew={isNew}
      className={entranceAnimation ? "tilt-in-fwd-tl" : ""}
    >
      <InvoiceHeader $isnew={isNew}>
        <p>{dateTime}</p>
        <ActionButton
          $isnew={isNew}
          {...rest}
          onClick={isNew ? handleAddClick : handleDeleteClick}
        >
          {isNew ? <FiPlus /> : <FiTrash2 />}
        </ActionButton>
      </InvoiceHeader>
      <Line $isnew={isNew} />
      <InvoiceDetails $isnew={isNew}>
        <input
          type="text"
          placeholder={invDescription == "" ? "Sem Descrição" : "Descrição"}
          {...rest}
          autoComplete="false"
          value={invDescription ? invDescription : description}
          onChange={(e) => setDescription(e.target.value)}
          readOnly={readOnly}
        />
        <input
          type={!isNew ? "text" : "number"}
          placeholder="Valor"
          step="0.01"
          {...rest}
          value={invValue ? `R$ ${invValue}` : value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          readOnly={readOnly}
        />
      </InvoiceDetails>
      <Line $isnew={isNew} />
    </Container>
  );
}
