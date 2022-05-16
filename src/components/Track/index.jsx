import { Container, Wrapper, Figure, Title, Subtitle, Time } from "./styled";

export default function Track({
  titleMusic,
  nameArtist,
  time,
  background = "track",
}) {
  return (
    <Container>
      <Wrapper>
        <Figure>
          <img src={background} alt="Track logo" />
        </Figure>

        <section>
          <Title>{titleMusic}</Title>
          <Subtitle>{nameArtist}</Subtitle>
        </section>
      </Wrapper>
      <Time>{time}</Time>
    </Container>
  );
}
