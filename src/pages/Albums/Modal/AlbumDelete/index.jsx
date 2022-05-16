import AsyncSelect from "react-select/async";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import { deleteAlbum } from "../../../../services/v1/Supliu/album-services";
import { getAllSupliuAlbum } from "../../../../services/v1/Supliu/album-services";
import getImages from "../../../../assets";

import {
  Container,
  Wrapper,
  Header,
  Title,
  Label,
  Submit,
  WrapperButton,
} from "../styled";

export default function AlbumDelete({ getAlbums: deleteAlbums }) {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
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

  async function handleDeleteAlbum() {
    await deleteAlbum(selectedOption.id);
    toggleModal();
    deleteAlbums();
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
          <img src={getImages("DeleteAlbum")} alt="Logo" />
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
              <Title>Remove a album</Title>
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

              <Submit
                type="button"
                value={"Remove a album"}
                onClick={handleDeleteAlbum}
              />
            </form>
          </Wrapper>
        </Container>
      </ReactModal>
    </>
  );
}
