import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Container, Wrapper } from "./styled";
import { getAllAlbums } from "../../services/v1/Mock/album-service";

export default function ListAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAlbumsMock() {
    try {
      setLoading(true);
      const results = await getAllAlbums();
      setAlbums(results);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      await getAlbumsMock();
    })();
  }, []);

  return (
    <Container>
      <Wrapper>
        {!loading && albums.length > 0 ? (
          albums.map(({ thumbnail, name }) => (
            <figure>
              <img src={thumbnail} alt="name" title={`Album ${name}`} />
            </figure>
          ))
        ) : (
          <Skeleton count={1} height={260} />
        )}
      </Wrapper>
    </Container>
  );
}
