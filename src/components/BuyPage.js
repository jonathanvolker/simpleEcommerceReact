import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";

import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "563492ad6f91700001000001785aef5771804a7b8a2600f382ade1f5";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);

    console.log(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Productos</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
