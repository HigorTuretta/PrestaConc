import { Container, Content } from "./styles";
import { FaTrashCan } from "react-icons/fa6";

export function SubTitle({
  title,
  iconSrc,
  deleteButton = false,
  onDeleteButtonClick,
}) {
  const handleDeleteButtonClick = () => {
    // Chame a função onDeleteButtonClick se ela existir
    if (onDeleteButtonClick) {
      onDeleteButtonClick();
    }
  };

  return (
    <Container>
      <Content>
        <h2>
          <img src={iconSrc} alt={title} /> {title}
        </h2>
        {deleteButton && (
          <button onClick={handleDeleteButtonClick}>
            <FaTrashCan />
          </button>
        )}
      </Content>
      <div className="line"></div>
    </Container>
  );
}
