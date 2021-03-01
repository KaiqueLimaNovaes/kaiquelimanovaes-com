import styled from 'styled-components';

import Card from '../../components/layout/card/Card';

import Assegura1 from '../../assets/images/web/assegura1.png';
import kaique1 from '../../assets/images/web/portifoliok1.png';
import Fullstack1 from '../../assets/images/web/fullstackgames1.png';

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

        <Card texto={'Um projeto criado em Reactjs com ssr em Nextjs, com estilização através de styled components e responsividade com react-bootstrap.'}
        img={kaique1} titulo={'Portifólio Kaique Lima Novaes'} end={'https://github.com/KaiqueLimaNovaes/kaiquelimanovaes-com'}
        aplicacao={'https://kaiquelimanovaes.com/'} />

        <Card texto={'Um projeto criado em Reactjs com banco de dados sql tudo conectado por um back-end em Nodejs, realizado em parceiria com mais 5 Devs.'}
        img={Assegura1} titulo={'Assegura LGBTQIA+'} end={'https://github.com/squad4spm/Assegura-Lgbtqia.git'}
        aplicacao={'https://assegura-lgbtqia-squad4spm.vercel.app/'} />

        <Card texto={'Projeto de e-commerce criado para aprendizagem em Reactjs utilizando desde lazy loading, commonjs, express com back-end em Nodejs consumindo uma api json de produtos.'}
        img={Fullstack1} titulo={'Fullstack games'} end={'https://github.com/KaiqueLimaNovaes/fullstack-games-react.git'}
        aplicacao={'https://github.com/KaiqueLimaNovaes/fullstack-games-react.git'} />
      </Section1>
    );
}

export default Web;