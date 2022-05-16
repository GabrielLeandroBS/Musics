import "react-tiny-fab/dist/styles.css";
import { Fab, Action } from "react-tiny-fab";
import { useState } from "react";

import { Container, Wrapper } from "./styled";
import Album from "../../pages/Albums/Modal/Album";
import AlbumDelete from "../../pages/Albums/Modal/AlbumDelete";
import Track from "../../pages/Albums/Modal/Track";
import TrackDelete from "../../pages/Albums/Modal/TrackDelete";

const actions = [
  {
    position: {
      bottom: "0.5rem",
      margin: "0",
      position: "absolute",
      right: "1rem",
      zIndex: "1",
    },

    event: "click",
    mainButtonStyles: {
      backgroundColor: "#d1d1d1",
      color: "#000",
      height: "4rem",
      width: "4rem",
    },

    actionButtonStyles: {
      backgroundColor: "#ffffff",
      color: "#34495e",
      height: "4rem",
      margin: "0",
      width: "4rem",
    },
  },
];

export default function Actions({ getAlbums }) {
  const [modal, setModal] = useState({
    state: false,
    name: "",
  });

  return (
    <Container>
      <Wrapper>
        {actions.map(
          (
            {
              mainButtonStyles,
              actionButtonStyles,
              position,
              event,
              alwaysShowTitle,
            },
            index
          ) => (
            <Fab
              mainButtonStyles={mainButtonStyles}
              style={position}
              icon="+"
              event={event}
              key={index}
              alwaysShowTitle={alwaysShowTitle}
              aria-label="add"
            >
              <Action
                style={actionButtonStyles}
                text="Insert a track"
                onClick={() => {
                  setModal({
                    state: true,
                    name: "Track",
                  });
                }}
              >
                <Track getAlbums={getAlbums} />
              </Action>
              <Action
                style={actionButtonStyles}
                text="Insert a album"
                onClick={() => {
                  setModal({
                    state: true,
                    name: "Album",
                  });
                }}
              >
                <Album getAlbums={getAlbums} />
              </Action>
              <Action
                style={actionButtonStyles}
                text="Remove a track"
                onClick={() => {
                  setModal({
                    state: true,
                    name: "removeTrack",
                  });
                }}
              >
                <TrackDelete getAlbums={getAlbums} />
              </Action>
              <Action
                style={actionButtonStyles}
                text="Remove a album"
                onClick={() => {
                  setModal({
                    state: true,
                    name: "removeAlbum",
                  });
                }}
              >
                <AlbumDelete getAlbums={getAlbums} />
              </Action>
            </Fab>
          )
        )}
      </Wrapper>
    </Container>
  );
}
