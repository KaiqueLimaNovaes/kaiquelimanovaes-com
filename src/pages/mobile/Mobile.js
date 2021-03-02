import styled from 'styled-components';

import CardM from '../../components/layout/card/CardM';

import AsseguraApp1 from '../../assets/images/mobile/AsseguraApp1.jpeg';
import AsseguraApp2 from '../../assets/images/mobile/AsseguraApp2.jpeg';
import AsseguraApp3 from '../../assets/images/mobile/AsseguraApp3.jpeg';
import FullstackApp1 from '../../assets/images/mobile/FullstackApp1.jpeg';
import FullstackApp2 from '../../assets/images/mobile/FullstackApp2.jpeg';
import FullstackApp3 from '../../assets/images/mobile/FullstackApp3.jpeg';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #A1A1A6;
`;

const Mobile = () => {
    return(
      <Section1>
        <Title>Mobile</Title>

        <CardM texto={'Um projeto criado em React native com banco de dados sql tudo conectado por um back-end em Nodejs, realizado em parceiria com mais 5 Devs.'}
        img1={AsseguraApp1} img2={AsseguraApp2} img3={AsseguraApp3} 
        titulo={'App Assegura LGBTQIA+'} end={'https://github.com/squad4spm/Assegura-Lgbtqia-App.git'}
        aplicacao={'https://github.com/squad4spm/Assegura-Lgbtqia-App.git'} />
        
        <CardM texto={'Um projeto criado em Reactjs com ssr em Nextjs, com estilização através de styled components e responsividade com react-bootstrap.'}
        img1={FullstackApp1} img2={FullstackApp2} img3={FullstackApp3}
        titulo={'App Fullstack games'} end={'https://github.com/KaiqueLimaNovaes/fullstack-games-app.git'}
        aplicacao={'https://github.com/KaiqueLimaNovaes/fullstack-games-app.git'} />
      </Section1>
    );
}

export default Mobile;