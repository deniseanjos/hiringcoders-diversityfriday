import React from 'react';
import * as S from './styled';

export default function Singlepage(){

    return (

        <S.MainContainer>
            
            <S.LogoContainer>

                <S.GradienteColor>DIVERSITY FRIDAY</S.GradienteColor>

            </S.LogoContainer>

            <S.InformacaoContainer>
            
                <h1>Compre com propósito</h1>
                <h4>Somos mais que um e-commerce, somos um hub de empreendedores diversos com o objetivo de trazer uma varidade de produtos e serviços. </h4>
                <p>Aproveite as ofertas de lançamento e impacte diretamente a vida e os negócios de:</p>

                <ul>
                    <li>Mulheres;</li>
                    <li>Pessoas negras;</li>
                    <li>Pessoas com deficiência;</li>
                    <li>LGBTQIA+;</li>
                    {/* <li></li>
                    <li></li> */}
                </ul>

                <p>Cadastre-se para receber novidades e promoções</p>

                <form>
                    <input type="email" placeholder="exemplo@exemplo.com"/>
                    <button>Cadastrar</button>
                </form>
                
            </S.InformacaoContainer>

        </S.MainContainer>
        
    );

}