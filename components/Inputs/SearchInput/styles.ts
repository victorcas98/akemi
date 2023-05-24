import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
`;

export const Input = styled.input`
  color: var(--purple-dark);
  font-size: 28px;
  width: 100%;
  padding:  5px;
  height: 40px;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
}
::placeholder { 
  color: var(--purple);
}
`;

export const IconContainer = styled.div`
  width: 50px;
  padding:  5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-dark);
  cursor: pointer;
  font-size: 1.5rem;
  :hover{  
  color: var(--purple);
  }
`;

