import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 30px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid var(--purple);
`;
export const ItemLine = styled(Line)`
  cursor: pointer;
  :hover{
    color: var(--purple)
  }
`;
export const Item = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Item)`
font-size: 1.5rem;
`;

export const Amount = styled(Item)<{
  almostFinishing?: boolean;
  finished?: boolean;
}>`
  ${(props) =>
    props.almostFinishing &&
    `
    color: var(--warning)
  `}
  ${(props) =>
    props.finished &&
    `
    color: var(--error)
  `}
`;
export const PaginationContainer = styled.div`
    width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  font-size: 2rem;
  gap: 30px;
`;
export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover{  
  color: var(--purple-light);
  }
`;

export const Button = styled.div`
  width: 250px;
  height: 30px;
  border-radius: 7px;
  display: flex;
  align-self: flex-end;
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