import React from "react";

import { Container, Input, IconContainer } from "./styles";
import { BiSearch } from "react-icons/bi";

const SearchInput: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Pesquisar" />

      <IconContainer>
        <BiSearch />
      </IconContainer>
    </Container>
  );
};
export default SearchInput;
