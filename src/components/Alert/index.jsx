import { Container } from "./styles";
import { FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Alert({ msg }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(null);
      }, 500); // 500ms para coincidir com a duração da animação
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (isVisible === null) return null;
  return (
    <Container $isvisible={isVisible}>
      <div>
        <FaExclamationTriangle />
      </div>

      <p>{msg}</p>
      <div className="closeButton" onClick={() => setIsVisible(false)}>
        <FaTimesCircle />
      </div>
    </Container>
  );
}
