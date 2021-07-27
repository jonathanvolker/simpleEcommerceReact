import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Carro</h1> 
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="cart item" />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>Precio: {item.productPrice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remover
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Total</CardHeader>
          <CardBody>
            Precio de su producto {cartItem.length} $ {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pagar ahora
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Carro vacio</h1>
      )}
    </Container>
  );
};

export default Cart;
