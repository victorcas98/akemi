import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 2px solid var(--purple);
`;
export const Title = styled.div`
  color: var(--purple);
  font-size: 1.3rem;

`;

export const Input = styled.input`
  color: var(--purple);
  font-size: 1rem;
  width: 100%;
  padding:  5px;
  height: 20px;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
}
::placeholder { 
  color: var(--purple-light);
}
`;


