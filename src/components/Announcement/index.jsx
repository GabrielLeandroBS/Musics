import { Container } from "./styled";

export default function Announcement({ image }) {
  return (
    <Container>
      <img src={image} alt="Adverts"></img>
    </Container>
  );
}
