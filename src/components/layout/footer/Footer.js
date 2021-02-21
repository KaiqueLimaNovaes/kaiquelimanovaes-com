import React from "react";
import styled from 'styled-components';

const Rodape = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #151516;
`;

const Texto = styled.h3`
    margin-top: auto;
    margin-bottom: auto;
    font-size: 16px;
    color: #A1A1A6;
`;

export const Footer = () => {

  return (
    <Rodape>
      <Texto>KAIQUE LIMA NOVAES | TODOS OS DIREITOS RESERVADOS</Texto>
    </Rodape>
  );
};

export default Footer;