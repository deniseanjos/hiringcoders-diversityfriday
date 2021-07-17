import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #0F1123;
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
    color: #A98B98;
    
    h1 {
        text-transform: uppercase;
        text-align: center;
        color: white;
        letter-spacing: 1rem;
        text-shadow: 2px 2px 5px #54436B;
    }

`;

export const GradienteColor = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: transparent;
    letter-spacing: .3rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #54436B;
    
    &:hover {
        background-image: linear-gradient(45deg, #ff0000 , #ffa500 , #ee82ee, #4b0082);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-stroke-width: 0;
    };

`;

export const CardCadastro = styled.div`
    padding: 1rem;
    background-color: #54436B;
    border-radius: 10px;

    p {
        color: black;
        text-align: center;
        font-weight: bold;
    };

    input {
        width: 80%;
        height: 25px;
    };
    
    button {
        width: 18%;
        height: 31px;
    };

    form {
        margin: 0 0 1rem 0;
        align-items: center;
    };

`;
