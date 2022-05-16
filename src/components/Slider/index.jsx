import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Container, Wrapper } from "./styled";
import { getAllAnnouncement } from "../../services/v1/Mock/announcement-services";

export default function Slider() {
  const [announcement, setAnnouncement] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAnnouncement() {
    try {
      setLoading(true);
      const results = await getAllAnnouncement();
      setAnnouncement(results);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      await getAnnouncement();
    })();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {!loading && announcement.length > 0 ? (
            announcement.map(({ images, id }) => (
              <SwiperSlide key={id}>
                <figure>
                  <img src={images} alt="Announcement" />
                </figure>
              </SwiperSlide>
            ))
          ) : (
            <Skeleton count={1} height={260} />
          )}
        </Swiper>
      </Wrapper>
    </Container>
  );
}
