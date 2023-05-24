import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 1rem;
  color: var(--grey-dark);
`;

export const CardNumber = styled.div<{ color?: string }>`
  font-size: 8rem;
  font-weight:bold;

   ${(props) =>
    props.color
      ? `
    color: var(--${props.color})
  `
      : `
    color: var(--purple)
  `}
`;
export const CardText = styled.div<{ color?: string }>`
  font-size: 1.5rem;
  ${(props) =>
    props.color
      ? `
    color: var(--${props.color})
  `
      : `
    color: var(--grey)
  `}
`;
