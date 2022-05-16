import AsyncSelect from "react-select/async";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Select from "react-select";

import {
  Container,
  Wrapper,
  Header,
  Title,
  Label,
  Input,
  Submit,
  WrapperButton,
} from "../styled";

import { deleteTrack } from "../../../../services/v1/Supliu/track-service";
import { getAllSupliuAlbum } from "../../../../services/v1/Supliu/album-services";
import getImages from "../../../../assets";

export default function TrackDelete({ getAlbums: listTracks }) {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selected, setSelectedTrack] = useState([]);
  const [focus, setFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteTrack = async () => {
    try {
      await deleteTrack(selected.id);
      toggleModal();
      listTracks();
    } catch (error) {
      throw new Error(error);
    }
  };

  const getAlbumsListing = (data) => ({
    id: data.id,
    label: data.name,
    tracks: data.tracks,
  });

  async function getAlbums(key) {
    const data = await getAllSupliuAlbum(key)
      .then((results) => results.data.map(getAlbumsListing))
      .then((filteredResults) =>
        filteredResults.filter((item) =>
          item.label.toLowerCase().includes(item.label.toLowerCase())
        )
      );
    return data;
  }

  const getSelectedTrackWithoutAlbum = (data) => ({
    label: data.title,
    value: data.title,
    id: data.id,
  });

  const getTracks = selectedOption?.tracks.map(getSelectedTrackWithoutAlbum);

  useEffect(() => {
    (async () => {
      await getAlbums(query);
    })();
  }, []);

  return (
    <>
      <WrapperButton onClick={toggleModal}>
        <figure>
          <img src={getImages("DeleteMusic")} alt="Logo" />
        </figure>
      </WrapperButton>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
      >
        {" "}
        <Container>
          <Wrapper>
            <Header>
              <Title>Remove a Track</Title>
              <span onClick={toggleModal}>
                <figure>
                  <img src={getImages("close")} alt="" />
                </figure>
              </span>
            </Header>
            <form action="" method="post">
              <Label>
                Select album
                <AsyncSelect
                  cacheOptions
                  loadOptions={getAlbums}
                  onChange={(data) => {
                    setSelectedOption(data);
                    setFocus(true);
                  }}
                  defaultOptions
                />
              </Label>
              {focus ? (
                <Label>
                  Select a track
                  <Select
                    options={getTracks}
                    isClearable={true}
                    escapeClearsValue={true}
                    onChange={(data) => {
                      setSelectedTrack(data);
                    }}
                  />
                </Label>
              ) : (
                <Label>Please, confirm a album</Label>
              )}
              <Submit
                type="button"
                value={"Delete a track"}
                onClick={handleDeleteTrack}
              />
            </form>
          </Wrapper>
        </Container>
      </ReactModal>
    </>
  );
}
