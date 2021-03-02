import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Menu = () => {

  const BarraMenu = styled(Navbar)`
    background-color: #151516 !important;
  `;
  
  const Title = styled.h1`
      margin: 7px;
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
      font-size: 23px;
      font-weight: bold;
      padding: 0px;
      color: #A1A1A6 !important;
      &:hover{
        text-shadow: -1px -1px 0 rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.25), 3px 3px 3px rgba(0,0,0,.25), 10px 10px 20px rgba(0,0,0,.5), 20px 40px 40px rgba(0,0,0,.5);
        color: #641E43 !important;
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
      <BarraMenu expand="lg">
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
      </BarraMenu>
    );
};

export default Menu;