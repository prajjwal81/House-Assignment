import { NavDropdown } from "react-bootstrap";
function Locations({onPress}) {
  return (
    <NavDropdown title="Location" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3" onClick={()=>onPress('Agra')}>Agra</NavDropdown.Item>
      <NavDropdown.Item href="#action4" onClick={()=>onPress('Banglore')}>Banglore</NavDropdown.Item>
      <NavDropdown.Item href="#action6" onClick={()=>onPress('Mumbai')}>Mumbai</NavDropdown.Item>
      <NavDropdown.Item href="#action5" onClick={()=>onPress('Kerela')}>Kerala</NavDropdown.Item>
      <NavDropdown.Item href="#action7" onClick={()=>onPress('Punjab')}>Punjab</NavDropdown.Item>
      <NavDropdown.Item href="#action8" onClick={()=>onPress('Pune')}>Pune</NavDropdown.Item>
    </NavDropdown>
  );
}
export default Locations;
