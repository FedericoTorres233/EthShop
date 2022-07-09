import { Row, Col, Card } from "react-bootstrap";
import classes from "../styles/categories.module.css";

export default function Categories() {
  const category_list = ["Comida", "Electronica", "Videojuegos", "Libros"];
  return (
    <>
      <Row xs={1} md={2} className="mt-4 mb-5 g-5">
        {category_list.map((category, idx) => (
          <Col key={idx} className={classes.column}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  <h1>{category}</h1>
                  <div className={classes.cardImg}>
                    <Card.Img
                      variant="top"
                      className="overflow-hidden"
                      src={`${category}.jpg`}
                    />
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
