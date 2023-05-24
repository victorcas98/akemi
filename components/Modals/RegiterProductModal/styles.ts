import styled from 'styled-components'

export const Background = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  display:${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
  overflow-y: scroll;
  }
`

export const ContainerBorder = styled.div`
display: flex;
height: fit-content;
min-height: 64px;
min-width: 404px;
padding: 2px;
justify-content: center;
align-items: center;
background: linear-gradient(
        45deg,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary} 100%
      );
border-radius: 10px;
margin-top: 40px;

@media only screen and (max-width: 768px) {
  min-width: 300px;
  }
`
export const Container = styled.div`
height: fit-content;
height: 500px;
width: 550px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: var(--purple-lighter);
color: var(--purple);
border-radius: 8px;
  border: 2px solid var(--purple-light);
padding: 10px 10px;


@media only screen and (max-width: 768px) {
  min-width: 300px;
  }
`

export const Top = styled.div`
display: flex;
  align-self: end;
  height: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--error);
  }
`

export const Content = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
    @media only screen and (max-width: 768px) {
  width: 300px;
  }
`
export const Button = styled.div`
  width: 250px;
  height: 30px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-light);
  background: var(--purple-dark);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
  cursor: pointer;
  :hover{  
  color: var(--purple-lighter);
  background: var(--purple);
  box-shadow: inset rgba(0, 0, 0, 0.24) 0px 3px 3px;

  }
`;