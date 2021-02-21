import styled from 'styled-components';

import Intro from './intro/Intro';
import Apresentacao from './apresentacao/Apresentacao';
import Skills from './skills/Skills';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Home = () => {
    return(
      <Section1>
        <Intro />
        <Apresentacao />
        <Skills />
      </Section1>
    );
}

export default Home;