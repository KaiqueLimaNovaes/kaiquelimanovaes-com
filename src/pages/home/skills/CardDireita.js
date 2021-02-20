import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const Card = styled.div`
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 300px;
    border-radius: 20px;
    background: linear-gradient(135deg, #651E43, #091A33);
`;

const Logo = styled.img`
    margin-top: 25px;
    width: 90%;
    max-width: 300px;
    max-height: 250px;
`;

const TextoCard = styled.h3`
  font-size: 20px;
  color: #A1A1A6;
`;

const CardDireita = (props) => {
    return(
        <Card>
            <Row>
                <Col xl={8}><TextoCard>{props.texto}</TextoCard></Col>
                <Col xl={4}>
                    <Logo src={props.img} alt="" />
                </Col>
            </Row>
        </Card>
    );
}

export default CardDireita;