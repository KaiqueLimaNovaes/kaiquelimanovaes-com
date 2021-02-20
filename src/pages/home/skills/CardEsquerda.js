import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const Card = styled.div`
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 300px;
    border-radius: 20px;
    border: 1px solid #1d6bff;
    background: linear-gradient(135deg, #651E43, #091A33);
    box-shadow: 0 0 10px #fff, 0 0 20px #0247c9;
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

const CardEsquerda = (props) => {
    return(
      <Card>
          <Row>
              <Col xl={4}>
                  <Logo src={props.img} alt="" />
              </Col>
              <Col xl={8}><TextoCard>{props.texto}</TextoCard></Col>
          </Row>
      </Card>
    );
}

export default CardEsquerda;