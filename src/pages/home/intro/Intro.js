import styled from 'styled-components';

import Banner from './Banner';

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

const Intro = () => {
    return(
      <Section1>
        <Title>Bem vindo ao meu portifólio</Title>
        <Banner />
      </Section1>
    );
}

export default Intro;