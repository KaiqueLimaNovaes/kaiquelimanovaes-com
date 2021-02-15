import styled from 'styled-components';

import CardEsquerda from './skills/CardEsquerda';
import CardDireita from './skills/CardDireita';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #1d6bff;
`;

const Home = () => {
    return(
      <Section1>
        <Title>Bem vido ao meu portifólio</Title>
        <CardEsquerda />
        <CardDireita />
      </Section1>
    );
}

export default Home;