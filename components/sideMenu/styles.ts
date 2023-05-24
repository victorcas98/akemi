import styled from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
    width: 200px;
    height: 100vh;
    background-color: var(--purple);
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const Logo = styled(Image)`
    width: auto;
    height: 80px;
    margin-top: 10px;
`
export const Menu = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
`
export const MenuItem = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: lighter;
    color:  var(--purple-light);

    cursor: pointer;

    :hover {
        color:  var(--purple-lighter);
    }
`
export const LogOut = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: lighter;
    color:  var(--purple-dark);

    cursor: pointer;
    
    :hover {
        color:  var(--purple-lighter);
        font-weight: normal;
    }
`