import { NavDropdown } from "react-bootstrap";
function Property({onPress}) {
  return (
    <NavDropdown title="Property Type" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3" onClick={()=>onPress("Houses")}>Houses</NavDropdown.Item>
      <NavDropdown.Item href="#action4" onClick={()=>onPress("Villa")}>Villa</NavDropdown.Item>
    </NavDropdown>
  );
}
export default Property;
