import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // background-color: #2C2E43;
    // background-color: #0A1931;
    background-color: #4A3933;
    // background-color: #2C2E43;
    // width: 100vw;
    height: 100vh;
    padding: 0 60px 0 60px;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`;

export const InformacaoContainer = styled.div`
    width: 100vw;
`;

export const GradienteColor = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;

    &:hover {
        background-image: linear-gradient(45deg, #ff0000 , #ffa500 , #ee82ee, #4b0082);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-stroke-width: 0;
    };

`;
