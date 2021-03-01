import styled from 'styled-components';

import Card from '../../components/layout/card/Card';

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
        <Card />
        <Card />
        <Card />
      </Section1>
    );
}

export default Mobile;