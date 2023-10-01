import { Container, Line, InvoiceDetails } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { formatCurrency } from "../../utils/formatDate";
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
  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <Container>
      <InvoiceDetails $isnew={isNew}>
        <div>
          <FiTrash2 onClick={() => handleDeleteClick()} />
          <span>{invDescription}</span>
        </div>
        <span>
          {formatCurrency(invValue)}
        </span>
      </InvoiceDetails>
      <Line />
    </Container>
  );
}
