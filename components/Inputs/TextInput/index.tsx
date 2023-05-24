import React from "react";
import { IInput } from "./interface";

import { Container, Input, Title } from "./styles";

const TextInput = ({ title, value, setValue } : IInput): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
    </Container>
  );
};
export default TextInput;
