import styled from 'styled-components';

import CardEsquerda from './CardEsquerda';
import CardDireita from './CardDireita';

import ReactImg from '../../../assets/images/react.png';
import NodeImg from '../../../assets/images/node.png';
import ReactNImg from '../../../assets/images/react-native.png';
import PhpImg from '../../../assets/images/php.png';
import PythonImg from '../../../assets/images/python.png';
import HtmlImg from '../../../assets/images/htmljavascriptcss.png';
import MysqlImg from '../../../assets/images/mysql.png';
import MongoImg from '../../../assets/images/mongodb.png';
import GitImg from '../../../assets/images/git.png';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #A1A1A6;
`;

const Skills = () => {
  return(
    <Section1>
      <Title>Skills</Title>
      <CardEsquerda texto={'UIs interativas baseadas em componentes com lógica escrita em javascript podendo ser renderizado no servidor.'}
      tec={'Clique para conhecer um projeto em react js'} img={ReactImg} 
      end={'https://github.com/KaiqueLimaNovaes/kaiquelimanovaes-com'} />

      <CardDireita texto={'Aplicativos escalonáveis com execução assíncrona em javascript baseado em eventos.'} 
      tec={'Clique para conhecer um projeto em node js'} img={NodeImg} 
      end={'https://github.com/KaiqueLimaNovaes/fullstack-games-api-node'} />

      <CardEsquerda texto={'Criação de aplicativos componetizados em javascript que são renderizados nativamento para android ou ios.'} 
      tec={'Clique para conhecer um projeto em react native'} img={ReactNImg} 
      end={'https://github.com/KaiqueLimaNovaes/fullstack-games-app.git'} />

      <CardDireita texto={'Rápido, flexível e pragmático, adequada para o desenvolvimento web desde blogs até grandes aplicações.'} 
      tec={'Clique para conhecer um projeto em php'} img={PhpImg} 
      end={'https://github.com/KaiqueLimaNovaes/fullstack-games-back'} />

      <CardEsquerda texto={'Uma linguagem de propósito geral, multiplataforma sendo utilizada desde analise de dados, inteligência artificial até mesmo em sistemas web.'} 
      tec={'Clique para conhecer um projeto em python'} img={PythonImg} 
      end={'https://github.com/KaiqueLimaNovaes/calculadora-python.git'} />

      <CardDireita texto={'O conjunto de ferramentas e linguagens que permitem uma construção prática de diversas aplicações web atendendo variados propósitos.'} 
      tec={'Clique para conhecer um projeto em html'} img={HtmlImg} 
      end={'https://github.com/KaiqueLimaNovaes/fullstackGames.git'} />

      <CardEsquerda texto={'Um dos sistemas de gerenciamento de banco de dados mais usado no mundo em linguagem sql.'} 
      tec={'Clique para conhecer um projeto em mysql'} img={MysqlImg} 
      end={'https://github.com/KaiqueLimaNovaes'} />

      <CardDireita texto={'Sistema de gerenciamento baseado em NoSql com o conceito de banco de dados de documentos.'} 
      tec={'Clique para conhecer um projeto em mongodb'} img={MongoImg} 
      end={'https://github.com/KaiqueLimaNovaes/fullstack-games-api-mongodb.git'} />

      <CardEsquerda texto={'Atualmente é muito importante termos uma maneira agíl e eficaz para hospedarmos nosso código, termos controle de versão além da possibilidade de toda equipe poder trabalhar simultaneamente de forma organizada.'} 
      tec={'Clique para conhecer meu github'} img={GitImg} 
      end={'https://github.com/KaiqueLimaNovaes'} />
    </Section1>
  );
}

export default Skills;