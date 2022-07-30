import { NavDropdown } from "react-bootstrap";
function Date({onPress}) {
  return (
    <NavDropdown title="When You Want" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3" onClick={()=>onPress('Today')}>Today</NavDropdown.Item>
      <NavDropdown.Item href="#action4" onClick={()=>onPress('Tommorow')}>tommorow</NavDropdown.Item>
      <NavDropdown.Item href="#action5" onClick={()=>onPress('DayAftertommorow')}>Day after Tommorow</NavDropdown.Item>
    </NavDropdown>
  );
}
export default Date;
