import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import { Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";
import Search from "../../components/Search";
import Skeleton from "react-loading-skeleton";

import { getAllSupliuAlbum } from "../../services/v1/Supliu/album-services";
import Actions from "../../components/Actions";
import ListAlbums from "../../components/Albums";
import Slider from "../../components/Slider";

import {
  AccordionContainer,
  AccordionTitle,
  AccordionWrapper,
  Aside,
  Container,
  Content,
  Title,
  DetailMusic,
  Topic,
  Wrapper,
  Subtitle,
  WrapperAccordion,
} from "./styled";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function getAlbums() {
    try {
      setLoading(true);
      const results = await getAllSupliuAlbum(query);
      setAlbums(results.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  const secondsToTime = (e) => {
    const minutes = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");
    return minutes + ":" + seconds;
  };

  useEffect(() => {
    (async () => {
      await getAlbums();
    })();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Content>
          <Topic>Best of the best</Topic>
          <Title>Tranding Albums</Title>
          <Search placeholder="Search" setQuery={setQuery} submit={getAlbums} />
          <Slider />
          <ListAlbums />
        </Content>
        <Aside>
          <WrapperAccordion>
            <Accordion>
              <Subtitle>Albums</Subtitle>
              {loading && <Skeleton count={2} height={50} />}
              {albums.length > 0 &&
                !loading &&
                albums.map(({ name, id, tracks }) => (
                  <Accordion.Item eventKey={id} key={id}>
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>
                      <AccordionTitle>
                        {tracks.length > 0 ? "Tracks" : "No tracks registered"}
                      </AccordionTitle>
                      {tracks.map(({ duration, id, title, number }) => (
                        <AccordionContainer key={id}>
                          <AccordionWrapper>
                            <DetailMusic>
                              <span>{number} -</span>
                              <h2>{title}</h2>
                            </DetailMusic>
                          </AccordionWrapper>
                          <p>{secondsToTime(duration)}</p>
                        </AccordionContainer>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              {!loading && query && albums.length === 0 && (
                <Topic>No albums found</Topic>
              )}
            </Accordion>
          </WrapperAccordion>
          <Actions getAlbums={getAlbums} />
        </Aside>
      </Wrapper>
    </Container>
  );
}
