import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import ImgFoto from '../../../assets/images/home/kaiquelimanovaes.jpg';

const Section1 = styled.div`
    justify-content: center;
    align-itens: center;
`;

const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 50px;
    font-weight: bold;
    color: #A1A1A6;
`;

const Foto = styled.img`
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;

const Texto = styled.h3`
    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: 50px;
    margin-right: 50px;
    font-size: 25px;
    color: #A1A1A6;
`;

const Coluna = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Apresentacao = () => {
    return(
      <Section1>
        <Title>Apresentação</Title>
        <Row>
            <Coluna xl={6}>
                <Foto src={ImgFoto} alt="Kaique Lima Novaes" />
            </Coluna>
            <Coluna xl={6}>
                <Texto>Prático, realista e eficiente, com ótima capacidade de criação e execução. O que mais me motiva é atuar com autonomia, liderar times e processos e criar soluções novas, para impactar as pessoas em prol de um mundo mais próspero e justo.
                </Texto>
            </Coluna>
        </Row>
      </Section1>
    );
}

export default Apresentacao;