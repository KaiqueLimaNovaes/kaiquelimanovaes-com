import { Row, Col } from "react-bootstrap";
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0%{
        background-position: 0 0;
    }
    50%{
        background-position: 300% 0;
    }
    100%{
        background-position: 0 0;
    }
`; 

const CardC = styled.div`
    &{  
        position: relative;
        margin-top: 40px;
        margin-right: auto;
        margin-left: auto;
        width: 90%;
        height: 400px;
        border-radius: 20px;
        background: linear-gradient(135deg, #651E43, #091A33);
        cursor: pointer;
    }
    &:after,
    &:before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
        background-size: 400%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 20px;
        z-index: -1;
        animation: ${animate} 50s linear infinite;
    }
    &:after {
        filter: blur(15px);
    }
    @media (max-width: 800px) {
        height: 630px;
    }
`;

const ImgEx = styled.img`
    width: 90%;
    @media (max-width: 800px) {
        max-width: 300px;
        max-height: 250px;
    }
`;

const Linha = styled(Row)`
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
`;

const Coluna = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

const TituloCard = styled.h3`
    margin-right: 40px;
    margin-left: 40px;
    font-size: 28px;
    color: #A1A1A6;
`;

const TextoCard = styled.h3`
    margin-right: 40px;
    margin-left: 40px;
    font-size: 24px;
    color: #A1A1A6;
`;

const BotaoCard = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 25px;
    background-color: white;
`;

const Card = (props) => {
    return(
      <CardC onClick={() => window.open(props.end)}>
          <Linha>
              <Coluna xl={5}>
                  <ImgEx src={props.img} alt="" />
              </Coluna>
              <Coluna xl={7}>
                <TituloCard>{props.titulo}</TituloCard>
                <TextoCard>{props.texto}</TextoCard>
                <BotaoCard onClick={() => window.open(props.aplicacao)}>Visualizar</BotaoCard>
              </Coluna>
          </Linha>
      </CardC>
    );
}

export default Card;