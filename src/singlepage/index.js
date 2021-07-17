import React, { useState } from 'react';
import * as S from './styled';

export default function Singlepage() {

    const [email, setEmail] = useState('');


    function handleCadastro() {
        localStorage.setItem('email', email);
        console.log(email);

        if(localStorage.email){
            localStorage.setItem('email', email);
        }
    };


    return (

        <S.MainContainer>

            <S.LogoContainer>

                <S.GradienteColor>DIVERSITY FRIDAY</S.GradienteColor>

            </S.LogoContainer>

            <S.InformacaoContainer>

                <h1>Compre com propósito</h1>
                <h4>Somos mais que um e-commerce, somos um hub de empreendedores diversos com o objetivo de trazer uma varidade de produtos e serviços de qualidade. </h4>
                <p>Aproveite as ofertas de lançamento e impacte diretamente a vida e os negócios de:</p>

                <ul>
                    <li>Mulheres;</li>
                    <li>Pessoas negras;</li>
                    <li>Pessoas com deficiência;</li>
                    <li>LGBTQIA+;</li>
                    <li>Entre outros.</li>
                </ul>

                <S.CardCadastro>
                    <p>Cadastre-se para receber novidades e promoções</p>

                    <form>
                        <input id="emailInput" type="email" name="email" placeholder="exemplo@exemplo.com" value={email} onChange={e => setEmail(e.target.value)} />
                        <button type="button" onClick={handleCadastro}>Cadastrar</button>
                    </form>

                </S.CardCadastro>

            </S.InformacaoContainer>

        </S.MainContainer>

    );

}