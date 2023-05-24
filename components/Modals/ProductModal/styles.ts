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
min-height: 60px;
min-width: 400px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.text};
border-radius: 8px;
padding: 10px 10px;
b{
  color: ${(props) => props.theme.primary};
}

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
    color: ${(props) => props.theme.primary};
  }
`
export const Title = styled.div`
  width: 370px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: left;
  margin-bottom: 5px;

  @media only screen and (max-width: 768px) {
  width: 300px;
  }
`
export const Content = styled.div`
  width: 400px;
  height: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
    @media only screen and (max-width: 768px) {
  width: 300px;
  }
`
