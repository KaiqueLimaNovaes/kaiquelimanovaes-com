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

const Card = styled.div`
    &{  
        position: relative;
        margin-top: 40px;
        margin-right: auto;
        margin-left: auto;
        width: 90%;
        height: 300px;
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