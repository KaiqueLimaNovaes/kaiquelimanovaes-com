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
        <CardEsquerda texto={'react js'} img={ReactImg} />
        <CardDireita texto={'node js'} img={NodeImg} />
        <CardEsquerda texto={'react native'} img={ReactNImg} />
        <CardDireita texto={'php'} img={PhpImg} />
        <CardEsquerda texto={'python'} img={PythonImg} />
        <CardDireita texto={'html'} img={HtmlImg} />
        <CardEsquerda texto={'mysql'} img={MysqlImg} />
        <CardDireita texto={'mongodb'} img={MongoImg} />
        <CardEsquerda texto={'git'} img={GitImg} />
      </Section1>
    );
}

export default Skills;