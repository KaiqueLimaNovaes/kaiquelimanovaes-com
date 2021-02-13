import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = () => {

    const Title = styled.h1`
        font-size: 20px;
        font-weight: bold;
        color: #1d6bff;
    `;

    const ItensMenu = styled(Nav.Link)`
        font-size: 20px;
        color: #1d6bff !important;
    `;

    const Toggle = styled(Navbar.Toggle)`
        background-color: #1d6bff !important;
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
  
          <Navbar.Collapse id="menu-topo">
            <Nav className="menu m-auto">
  
              {menuItens.map((iten) => (
                <Nav.Item>
                  <ItensMenu className="item" onClick={() => history.push(`/${iten.path}`)}>
                    {iten.label}
                  </ItensMenu>
                </Nav.Item>
              ))}
  
  
            </Nav>
          </Navbar.Collapse>
  
        </Container>
      </Navbar>
    );
};

export default Menu;