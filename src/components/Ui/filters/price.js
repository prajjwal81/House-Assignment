import { NavDropdown } from "react-bootstrap";
function Price({onPress}) {
  return (
    <NavDropdown title="Price" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3" value="1000" onClick={()=>onPress(300)}>Less than $1000</NavDropdown.Item>
      <NavDropdown.Item href="#action4" onClick={()=>onPress(1000)}>More than $1000</NavDropdown.Item>
      <NavDropdown.Item href="#action5" onClick={()=>onPress(2000)}>More than $2000</NavDropdown.Item>
    </NavDropdown>
  );
}
export default Price;
