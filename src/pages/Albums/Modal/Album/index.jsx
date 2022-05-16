import React, { useState } from "react";
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

import { createAlbum } from "../../../../services/v1/Supliu/album-services";
import getImages from "../../../../assets";

export default function Album({ getAlbums }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  async function handleCreateAlbum() {
    await createAlbum(name, year)
      .then((resolved) => {
        toggleModal();
        getAlbums();
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.error);
        }
      });
  }

  return (
    <>
      <WrapperButton onClick={toggleModal}>
        <figure>
          <img src={getImages("album")} alt="Logo" />
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
              <Title>Register a new album</Title>
              <span onClick={toggleModal}>
                <figure>
                  <img src={getImages("close")} alt="" />
                </figure>
              </span>
            </Header>
            <form method="post">
              <Label aria-labelledby="1" htmlFor="1">
                Album name
                <Error>{error ? error : ""}</Error>
                <Input
                  type="text"
                  id="1"
                  placeholder="insert the name"
                  onBlur={(e) => setName(e.target.value)}
                />
              </Label>
              <Label aria-labelledby="1" htmlFor="2">
                Album year
                <Input
                  type="number"
                  id="2"
                  placeholder="insert the year"
                  onBlur={(e) => setYear(e.target.value)}
                />
              </Label>
              <Submit
                type="button"
                value={"Create a new album"}
                onClick={handleCreateAlbum}
              />
            </form>
          </Wrapper>
        </Container>
      </ReactModal>
    </>
  );
}
