import styled from 'styled-components';

import Skills from './skills/Skills';
import Intro from './intro/Intro';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Home = () => {
    return(
      <Section1>
        <Intro />
        <Skills />
      </Section1>
    );
}

export default Home;