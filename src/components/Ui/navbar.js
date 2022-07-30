import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
} from "react-bootstrap";
function NavbarofUi() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand  href="#">Estatery</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link  className='formargin'  href="#action1">Rent</Nav.Link>
                <Nav.Link  className='formargin'  href="#action2">Buy</Nav.Link>
                <NavDropdown  className='formargin' 
                  title="Manage Property"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='formargin'  title="Resourses" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Button variant=" light">Login</Button>
                <Button variant="outline-primary primary">Sign up</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}
export default NavbarofUi;
