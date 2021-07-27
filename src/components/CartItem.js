import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="150" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">{product.productPrice}</CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Comprar ahora
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
