import styled from 'styled-components';
import { Jumbotron } from "react-bootstrap";

import Bcg from '../../../assets/images/home/code2.jpg'

const Section1 = styled.div`
    justify-content: center;
    align-itens: center;
`;
const Jumbo = styled(Jumbotron)`
    background-image: url(${Bcg});;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    height: 650px;
    width: 100%;
`;

const Banner = () => {
    return(
      <Section1>
        <Jumbo></Jumbo>
      </Section1>
    );
}

export default Banner;