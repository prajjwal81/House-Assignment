import Card from "react-bootstrap/Card";
import Styles from "./card.module.css"

function UICard({ values }) {
  return (
   <div className={Styles.carddesign}>
     <Card>
      <Card.Img variant="top" src={values.ImageUrl} className={Styles.img} />
      <Card.Body>
        <Card.Title>{values.Price} $</Card.Title>
        <Card.Text>
          {values.Name} <Card.Text>{values.Address}</Card.Text>
        </Card.Text>
        <hr />
        <Card.Text className={Styles.bed}> 🛌 {values.Beds}  🚽{values.Bathroom} ᴞ {values.Size}</Card.Text>
      
      </Card.Body>
    </Card>
   </div>
  );
}

export default UICard;

