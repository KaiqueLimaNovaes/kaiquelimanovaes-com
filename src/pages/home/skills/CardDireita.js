import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import ReactImg from '../../../assets/images/python.png';

const Card = styled.div`
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 300px;
    border-radius: 20px;
    border: 1px solid #1d6bff;
    background-color: #7729ff !important;
    box-shadow: 0 0 10px #fff, 0 0 20px #0247c9;
`;

const Logo = styled.img`
    margin-top: 25px;
    height: 250px;
`;

const CardDireita = () => {
    return(
        <Card>
            <Row>
                <Col xl={8}>Python</Col>
                <Col xl={4}>
                    <Logo src={ReactImg} alt="" />
                </Col>
            </Row>
        </Card>
    );
}

export default CardDireita;