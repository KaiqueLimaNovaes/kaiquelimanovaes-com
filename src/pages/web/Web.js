import styled from 'styled-components';

import Card from '../../components/layout/card/Card';

import Assegura1 from '../../assets/images/web/assegura1.png';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #A1A1A6;
`;

const Web = () => {
    return(
      <Section1>
        <Title>Web</Title>

        <Card texto={'Um projeto criado em Reactjs com banco de dados sql tudo conectado por um back-end em Nodejs.'}
        img={Assegura1} titulo={'Assegura LGBTQIA+'} end={'https://github.com/KaiqueLimaNovaes/kaiquelimanovaes-com'}
        aplicacao={'https://assegura-lgbtqia-squad4spm.vercel.app/'} />

        <Card />

        <Card />
      </Section1>
    );
}

export default Web;