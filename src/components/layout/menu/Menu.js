import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Menu = () => {

  const fadeIn = keyframes`
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ae0fc, 0 0 40px #0ae0fc, 0 0 50px #0ae0fc, 0 0 60px #0ae0fc, 0 0 70px #0ae0fc, 0 0 80px #0ae0fc;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #0247c9, 0 0 40px #0247c9, 0 0 50px #0247c9, 0 0 60px #0247c9, 0 0 70px #0247c9, 0 0 80px #0247c9;
    }
  `; 
  
  const Title = styled.h1`
      font-size: 25px;
      font-weight: bold;
      color: #A1A1A6;
    `;

    const NavMenu = styled(Navbar.Collapse)`
      justify-content: right;
      text-align: right;
      flex-grow: 0; 
    `;

    const ItensMenu = styled(Nav.Link)`
      font-size: 20px;
      color: #A1A1A6 !important;
      &:hover{
        animation: 2s ${fadeIn} ease-out;
        color: #0ae0fc !important;
      }
    `;

    const Toggle = styled(Navbar.Toggle)`
      background-color: #A1A1A6 !important;
    `;

    const history = useHistory();
  
    const menuItens = [
      {
        label: "Home",
        path: ""
      },
      {
        label: "Mobile",
        path: "mobile"
      },
      {
        label: "Web",
        path: "web"
      },
    ];
  
    return (
      <Navbar expand="lg">
        <Container>
  
          <Navbar.Brand>
            <Title>Kaique Lima Novaes</Title>
          </Navbar.Brand>
  
          <Toggle aria-controls="menu-topo">
          </Toggle>
  
          <NavMenu id="menu-topo">
            <Nav className="menu m-auto">
  
              {menuItens.map((iten) => (
                <Nav.Item>
                  <ItensMenu className="item" onClick={() => history.push(`/${iten.path}`)}>
                    {iten.label}
                  </ItensMenu>
                </Nav.Item>
              ))}
  
  
            </Nav>
          </NavMenu>
  
        </Container>
      </Navbar>
    );
};

export default Menu;