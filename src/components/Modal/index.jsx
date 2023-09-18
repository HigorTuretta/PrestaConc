import React, { useState } from "react";
import { Container, ModalArea, ButtonArea, MessageArea, } from "./styles";
export function Modal({
  question,
  icon: Icon,
  buttonTrue,
  buttonFalse,
  onResponse,
}) {
  const [answered, setAnswered] = useState(false);

  const handleButtonClick = (response) => {
    setAnswered(true);
    onResponse(response);
  };

  if (!answered) {
    return (
      <Container>
        <ModalArea>
          <MessageArea>
            {Icon && <Icon />}
            <p>{question}</p>
          </MessageArea>
          <ButtonArea>
            <button onClick={() => handleButtonClick(true)}>
              {buttonTrue}
            </button>
            <button onClick={() => handleButtonClick(false)}>
              {buttonFalse}
            </button>
          </ButtonArea>
        </ModalArea>
      </Container>
    );
  } else {
    return null; // O modal não será renderizado depois que o usuário responder.
  }
}
