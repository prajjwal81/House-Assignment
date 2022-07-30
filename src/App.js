import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Form,
} from "react-bootstrap";
import Data from "./components/data";
import Filter from "./components/Ui/filters/filter.js";
import { Row, Col } from "react-bootstrap";
import NavbarofUi from "./components/Ui/navbar";
import data1 from './data/index'
import { useState,useEffect } from "react";
let newdata
function App() {
  const [data,setData] = useState(data1)
  
  const filterHandler = (customprice) =>{
    let filterByPrice = newdata.filter(price => price.Price>=customprice)
    setData(filterByPrice)
  }
  const locationHandler = (place) =>{
    console.log("--",newdata)
    let filterByLocation = newdata.filter(location => location.Location==place)
    console.log(filterByLocation)
    setData(filterByLocation) 
  }
  const typeofHandler = (typeofhouse) => {
    let filterByType = newdata.filter(type => type.PropertyType==typeofhouse)
    setData(filterByType)
  }
  const dateHandler = (dates) => {
    let filterByDate = newdata.filter(date => date.WhenYouWant==dates)
    setData(filterByDate)
  }
  
  useEffect(()=>{
    newdata = data
  },[])


  return (
    <div className="App">
      <Container >
        <NavbarofUi/>
        <div className="searchbox">
          <Row>
            <Col className="text" sm-8>Search Properties to Rent</Col>
            <Col sm-4>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Col>
          </Row>
        </div >

        <Filter filterHandler={filterHandler} locationHandler={locationHandler} typeofHandler={typeofHandler} dateHandler={dateHandler}/>
        <div className="my-3 largeblock">
          <Data data={data} />
        </div>
      </Container>
    </div>
  );
}

export default App;
