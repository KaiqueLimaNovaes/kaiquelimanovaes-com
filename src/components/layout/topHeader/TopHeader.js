import { Container, Row, Col } from "react-bootstrap";
import styled, { keyframes } from 'styled-components';

import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ae0fc, 0 0 40px #0ae0fc, 0 0 50px #0ae0fc, 0 0 60px #0ae0fc, 0 0 70px #0ae0fc, 0 0 80px #0ae0fc;
  }
  to {
    box-shadow: 0 0 20px #fff, 0 0 30px #0247c9, 0 0 40px #0247c9, 0 0 50px #0247c9, 0 0 60px #0247c9, 0 0 70px #0247c9, 0 0 80px #0247c9;
  }
`;

const RowTopH = styled(Row)`
  text-align: right;
  padding-top: 10px;
  padding-right: 20px;
`;

const NeonLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #A1A1A6;
  box-shadow: 0 0 20px #fff, 0 0 30px #0247c9;
  animation: 3.1s ${fadeIn} ease-out;
`;

const TopHeader = () => {
    return(
      <Container fluid>
        <RowTopH>
          <Col>
            <IconContext.Provider value={{ color: "#A1A1A6", size: "1.8em" }}>
              <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/kaique-lima-novaes-834bb9150/')} style={{paddingLeft: 10, cursor: 'pointer',}} />
              <FaGithub onClick={() => window.open('https://github.com/KaiqueLimaNovaes')} style={{paddingLeft: 10, cursor: 'pointer',}} />
              <FaYoutube onClick={() => window.open('https://www.youtube.com/channel/UCh_4ntexRvLbaK9rEmqJ3dg')} style={{paddingLeft: 10, cursor: 'pointer',}} />
            </IconContext.Provider>
          </Col>
        </RowTopH>
        <NeonLine />
      </Container>
    );
}

export default TopHeader;