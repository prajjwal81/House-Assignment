import Locations from "./location";
import Date from "./date";
import Property from "./property";
import Price from "./price";
import { Container , Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Styles from "./filter.module.css"
function Filters({filterHandler,locationHandler,typeofHandler,dateHandler}) {
  return (
    <Navbar bg="white" expand="lg" className={Styles.Navbar}>
      <Container fluid className={Styles.filter}>
        <Locations onPress={locationHandler} />
        <Date onPress={dateHandler}/>
        <Property onPress={typeofHandler} />
        <Price onPress={filterHandler} /> 
      </Container>
      <Button variant="outline-success" className={Styles.btn}>Search</Button>
    </Navbar>
  );
}
export default Filters;

