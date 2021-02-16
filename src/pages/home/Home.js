import styled from 'styled-components';

import CardEsquerda from './skills/CardEsquerda';
import CardDireita from './skills/CardDireita';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #A1A1A6;
`;

const Home = () => {
    return(
      <Section1>
        <Title>Bem vindo ao meu portifólio</Title>
        <CardEsquerda />
        <CardDireita />
      </Section1>
    );
}

export default Home;