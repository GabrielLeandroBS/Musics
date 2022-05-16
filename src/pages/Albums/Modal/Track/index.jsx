import AsyncSelect from "react-select/async";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import {
  Container,
  Wrapper,
  Header,
  Title,
  Label,
  Error,
  Input,
  Submit,
  WrapperButton,
} from "../styled";

import { createTrack } from "../../../../services/v1/Supliu/track-service";
import { getAllSupliuAlbum } from "../../../../services/v1/Supliu/album-services";
import getImages from "../../../../assets";

export default function Track({ getAlbums: listAlbums }) {
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateTracks = async () => {
    try {
      await createTrack(selectedOption.id, number, title, duration);
      toggleModal();
      listAlbums();
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };

  const mapResponse = (data) => ({
    id: data.id,
    label: data.name,
  });

  async function getAlbums(key) {
    const data = await getAllSupliuAlbum(key)
      .then((results) => results.data.map(mapResponse))
      .then((filteredResults) =>
        filteredResults.filter((item) =>
          item.label.toLowerCase().includes(item.label.toLowerCase())
        )
      );
    return data;
  }

  useEffect(() => {
    (async () => {
      await getAlbums(query);
    })();
  }, []);

  return (
    <>
      <WrapperButton onClick={toggleModal}>
        <figure>
          <img src={getImages("music")} alt="Logo" />
        </figure>
      </WrapperButton>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
      >
        <Container>
          <Wrapper>
            <Header>
              <Title>Register a new song</Title>
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
                  }}
                  defaultOptions
                />
              </Label>
              <Label aria-labelledby="1" htmlFor="1">
                Song title
                <Input
                  type="text"
                  id="1"
                  placeholder="insert the title"
                  onBlur={(e) => setTitle(e.target.value)}
                />
              </Label>
              <Label aria-labelledby="2" htmlFor="2">
                Song number
                <Error>{error ? `(${error})` : ""}</Error>
                <Input
                  type="number"
                  id="2"
                  placeholder="insert the number"
                  onBlur={(e) => setNumber(e.target.value)}
                />
              </Label>
              <Label aria-labelledby="4" htmlFor="4">
                Song duration
                <Input
                  type="number"
                  id="4"
                  placeholder={"insert the duration"}
                  onBlur={(e) => setDuration(e.target.value)}
                />
              </Label>
              <Submit
                type="button"
                value={"Create a new track"}
                onClick={handleCreateTracks}
              />
            </form>
          </Wrapper>
        </Container>
      </ReactModal>
    </>
  );
}
