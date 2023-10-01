import { Container, City, Description, TripData } from "./styles";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";
export function TripCard({ title, dataLeave, dataReturn, url, ...rest }) {
  return (
    <Container {...rest}>
      <Description>
        <City>
          <span>Viagem para</span>
          <h4>{title}</h4>
        </City>
        <TripData>
          <div>
            <FaPlaneDeparture />
            <p>{dataLeave}</p>
          </div>
          <div>
            <FaPlaneArrival />
            <p>{dataReturn}</p>
          </div>
        </TripData>
      </Description>
    </Container>
    
  );
}
