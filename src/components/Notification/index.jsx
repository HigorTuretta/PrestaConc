import { useEffect, useState } from "react";
import { NotificationWrapper } from "./styles"; // Importando o estilo do arquivo styles.js

function Notification({ message, type, onClose }) {
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
      {message}
    </NotificationWrapper>
  );
}

export default Notification;
