import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { getAllAdverts } from "../../services/v1/Mock/adverts-services";
import { getAllTracks } from "../../services/v1/Mock/track-services";
import Announcement from "../../components/Announcement";
import Button from "../../components/Button";
import getImages from "../../assets";
import Track from "../../components/Track";

import {
  Container,
  Topic,
  Title,
  Banner,
  Figure,
  Details,
  Category,
  Subtitle,
  WrapperButton,
  Wrapper,
  Trends,
  Adverts,
} from "./styled.jsx";

export default function Explorer() {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [adverts, setAdverts] = useState([]);

  async function getTracks() {
    try {
      setLoading(true);
      const results = await getAllTracks();
      setTracks(results);
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false);
    }
  }

  async function getAdverts() {
    try {
      setLoading(true);
      const results = await getAllAdverts();
      setAdverts(results);
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      await getTracks();
      await getAdverts();
    })();
  }, []);

  return (
    <Container>
      <Topic>What's hot</Topic>
      <Title>Trending</Title>
      <Banner>
        <Figure>
          <img
            src={getImages("background")}
            alt="Banner image"
            loading="lazy"
          />
        </Figure>
        <Details>
          <Category>Artist</Category>
          <Title>On top of the world</Title>
          <WrapperButton>
            <Button
              type={"primary"}
              text="Songs"
              alt="Link to songs"
              title="Songs"
              href="songs"
            />
            <Button
              type={"default"}
              text="Follow"
              alt="Link to follow"
              title="Follow"
              href="songs"
            />
          </WrapperButton>
        </Details>
      </Banner>
      <Wrapper>
        <Trends>
          <section>
            <Subtitle>Top trends</Subtitle>
            {!loading && tracks.length > 0 ? (
              tracks.map(({ track, singer, avatar, id }) => (
                <Track
                  key={id}
                  titleMusic={track}
                  nameArtist={singer}
                  background={avatar}
                  time="2:45"
                />
              ))
            ) : (
              <Skeleton count={5} height={22} />
            )}
          </section>
        </Trends>
        <Adverts>
          {!loading && adverts.length > 0 ? (
            <Swiper slidesPerView={1}>
              {adverts.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <Announcement key={id} image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Skeleton count={1} height={260}  />
          )}
        </Adverts>
      </Wrapper>
    </Container>
  );
}
