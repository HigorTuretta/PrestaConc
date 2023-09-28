import { useEffect, useState } from "react";
import { NotificationWrapper } from "./styles"; // Importando o estilo do arquivo styles.js
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export function Notification({ message, type, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000); // 5000 milissegundos = 5 segundos

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <NotificationWrapper $isvisible={visible} $type={type}>
      <div>
        {type === "error" ? <FaExclamationTriangle /> : <FaCheckCircle />}
      </div>
      <span>{message}</span>
    </NotificationWrapper>
  );
}

/*
implementation:

const showNotification = (message, type) => {
  const notification = (
    <Notification
      message={message}
      type={type}
      onClose={() => {
        setTimeout(() => {
          setNotification(null);
        }, 500);
      }}
    />
  );
  setNotification(notification);
};

*/
