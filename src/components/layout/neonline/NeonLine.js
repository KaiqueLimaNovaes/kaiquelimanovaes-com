import { Container } from "react-bootstrap";
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

const Neon = styled.div`
  width: 100%;
  height: 2px;
  background-color: #1d6bff;
  box-shadow: 0 0 20px #fff, 0 0 30px #0247c9;
  animation: 3s ${fadeIn} ease-out;
`;

const NeonLine = () => {
    return(
      <Container fluid>
        <Neon />
      </Container>
    );
}

export default NeonLine;